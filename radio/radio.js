/* Neta DAO Radio: one live player shared by netadao.org, academy., fork. and play.
 *
 * Every page on the four sites loads this one file:
 *   <script src="https://netadao.org/radio/radio.js" defer></script>
 *
 * A bar is pinned to the bottom of every page, on or off. Pressing play starts the stream right there.
 * A browser stops a page's audio whenever the page itself is replaced, so once the radio is on, following
 * a link to any family page doesn't replace this page: it hides its content and shows the destination in
 * a full-window frame above the bar, and every later click happens inside that frame. The bar and its
 * audio never reload, so the stream never stops. People who don't press play browse exactly as before.
 *
 *   Top page, radio off      ordinary browsing; the bar is a fixed strip with a spacer under the page.
 *   Top page, radio on       family links open in the frame ("the shell"); other links open in a new tab.
 *   Inside the shell         no bar of its own; family links stay in the frame, other links open a new tab;
 *                            the page reports its address and title so the shell can show them.
 *
 * Address bar: a framed page on the same site as the shell shows its own path. One on another family
 * site can't be shown in this site's address bar, so the shell records it as #listen=<address>; opening or
 * reloading that link puts the page back in the shell (paused, as browsers won't start sound unasked).
 * Back walks through the framed pages, then out of the shell to where play was pressed.
 *
 * Pages with a radio of their own (a game on play.netadao.org with its own stations) take over from this
 * one. The radio stops and the bar steps aside until they give it back:
 *   const wasPlaying = window.NetaDAORadio?.handOff();  // e.g. on entering a game; true if it was on
 *   window.NetaDAORadio?.takeBack();                    // e.g. on leaving it, back to the lobby
 * A page that has its own radio from the start can say so instead:
 *   <meta name="netadao-radio" content="handoff">
 * And a link marked  data-radio="leave"  is followed as an ordinary link, outside the shell, which ends
 * this radio.
 */
(() => {
  if (window.__netadaoRadio) return;
  window.__netadaoRadio = true;

  const STREAM = window.ND_RADIO_STREAM || 'https://s3.radio.co/s39c195d74/listen';
  const STATUS = window.ND_RADIO_STATUS || 'https://public.radio.co/stations/s39c195d74/status';
  const FAMILY = window.ND_RADIO_FAMILY || /^(?:(?:www|academy|fork|play)\.)?netadao\.(?:org|localhost)$/;
  const BAR_H = 52;
  const SCRIPT_BASE = (document.currentScript && document.currentScript.src) || location.href;
  const asset = (name) => new URL(name, SCRIPT_BASE).href;

  const framed = window.self !== window.top;
  const isFamily = (url) => FAMILY.test(url.hostname);
  const isFamilyOrigin = (origin) => { try { return isFamily(new URL(origin)); } catch (_) { return false; } };
  const ownsRadio = () => !!document.querySelector('meta[name="netadao-radio"][content="handoff" i]');
  const httpLink = (event) => {
    if (event.defaultPrevented || event.button !== 0) return null;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || link.closest('.ndr-bar')) return null;
    const url = new URL(link.href, location.href);
    if (!/^https?:$/.test(url.protocol)) return null;
    return { link, url };
  };
  const samePage = (url) => url.origin === location.origin && url.pathname === location.pathname && url.search === location.search;
  // In-page jumps, including the href="#" placeholders some pages hang scripts on, are left alone.
  const inPage = (link, url) => samePage(url) && link.href.includes('#');
  const opensElsewhere = (link) => !!link.target && link.target !== '_self';
  const leaves = (link) => link.getAttribute('data-radio') === 'leave';

  // Each site's own radio (the Academy's header player) gives way to the shared bar.
  const style = document.createElement('style');
  style.textContent = `
    .nav-radio { display: none !important; }
    .ndr-bar { position: fixed; left: 0; right: 0; bottom: 0; z-index: 2147483000; height: ${BAR_H}px; box-sizing: border-box;
      display: flex; align-items: center; gap: 14px; padding: 0 clamp(12px, 3vw, 28px);
      background: #0B0C0E; color: #EDEEF0; border-top: 1px solid #2A2D33;
      font: 500 11px/1 "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .12em; text-transform: uppercase; }
    .ndr-bar * { box-sizing: border-box; }
    .ndr-play { flex: none; width: 34px; height: 34px; display: grid; place-items: center; padding: 0; border: 1px solid #EDEEF0; border-radius: 50%;
      background: transparent; color: #EDEEF0; cursor: pointer; }
    .ndr-play:hover { background: #EDEEF0; color: #0B0C0E; }
    .ndr-play:focus-visible, .ndr-vol input:focus-visible { outline: 2px solid #39C6EE; outline-offset: 2px; }
    .ndr-play svg { width: 12px; height: 12px; fill: currentColor; }
    .ndr-play .ndr-i-stop, .ndr-bar.is-on .ndr-play .ndr-i-play { display: none; }
    .ndr-bar.is-on .ndr-play .ndr-i-stop { display: block; }
    .ndr-mark { flex: none; height: 18px; width: auto; display: block; }
    .ndr-name { flex: none; white-space: nowrap; }
    .ndr-live { flex: none; display: inline-flex; align-items: center; gap: 7px; color: #7D838C; }
    .ndr-live i { width: 7px; height: 7px; border-radius: 50%; background: #4A4F57; }
    .ndr-bar.is-on .ndr-live { color: #F2559B; }
    .ndr-bar.is-on .ndr-live i { background: #F2559B; box-shadow: 0 0 8px #F2559B; animation: ndr-pulse 1.6s ease-in-out infinite; }
    .ndr-bar.is-loading .ndr-live { color: #A3A8B0; }
    .ndr-track { flex: 1 1 auto; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
      font-weight: 400; letter-spacing: .02em; text-transform: none; font-size: 12px; color: #A3A8B0; }
    .ndr-vol { flex: none; display: flex; align-items: center; gap: 8px; }
    .ndr-vol input { width: 96px; accent-color: #39C6EE; }
    .ndr-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
    .ndr-spacer { height: ${BAR_H}px; }
    .ndr-frame { position: fixed; top: 0; left: 0; width: 100%; height: calc(100% - ${BAR_H}px); border: 0; z-index: 2147482999; background: #000; }
    html.ndr-shell, html.ndr-shell body { overflow: hidden !important; }
    .ndr-away { visibility: hidden !important; }
    html.ndr-handed .ndr-bar, html.ndr-handed .ndr-spacer { display: none !important; }
    html.ndr-handed .ndr-frame { height: 100%; }
    @keyframes ndr-pulse { 50% { opacity: .35; } }
    @media (max-width: 560px) { .ndr-name, .ndr-vol { display: none; } }
    @media (prefers-reduced-motion: reduce) { .ndr-bar.is-on .ndr-live i { animation: none; } }
  `;
  document.head.appendChild(style);

  /* ---------------------------------------------------------------- inside the shell */
  if (framed) {
    let handed = ownsRadio();
    let parentState = 'off'; // the shell tells each page whether its radio is on
    const tell = (message) => { try { window.parent.postMessage(message, '*'); } catch (_) {} };
    const announce = () => tell({ type: 'ndr:page', href: location.href, title: document.title, handoff: handed });
    announce();
    window.addEventListener('load', announce);
    window.addEventListener('pageshow', announce);
    window.addEventListener('hashchange', announce);
    window.addEventListener('popstate', announce);
    window.addEventListener('message', (event) => {
      if (event.source !== window.parent || !isFamilyOrigin(event.origin)) return;
      if (event.data && event.data.type === 'ndr:state') parentState = event.data.state;
    });

    // A plain link within this site navigates the frame by itself. Links to another site, or with a
    // target that would leave the frame, are caught here, before the sites' own handlers (window,
    // capture): the Academy's script, for one, sends other-site links to the top window, which would
    // replace the shell and stop the sound.
    window.addEventListener('click', (event) => {
      const hit = httpLink(event);
      if (!hit) return;
      const { link, url } = hit;
      if (leaves(link)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (opensElsewhere(link) && link.target === '_blank') window.open(url.href, '_blank', 'noopener');
        else window.top.location.href = url.href;
        return;
      }
      if (inPage(link, url) && !opensElsewhere(link)) return;
      if (url.origin === location.origin && !opensElsewhere(link)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (isFamily(url)) location.href = url.href;
      else window.open(url.href, '_blank', 'noopener');
    }, true);

    window.NetaDAORadio = {
      handOff() { const was = parentState === 'on'; handed = true; parentState = 'off'; tell({ type: 'ndr:handoff' }); return was; },
      takeBack() { handed = false; tell({ type: 'ndr:takeback' }); },
      get playing() { return parentState === 'on'; },
      get framed() { return true; },
    };
    return;
  }

  /* ---------------------------------------------------------------- the bar (top page) */
  const bar = document.createElement('div');
  bar.className = 'ndr-bar';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Neta DAO Radio');
  bar.innerHTML = `
    <button class="ndr-play" type="button" aria-pressed="false" aria-label="Play Neta DAO Radio">
      <svg class="ndr-i-play" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 1v10l8.5-5z"/></svg>
      <svg class="ndr-i-stop" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zM7 1h3v10H7z"/></svg>
    </button>
    <img class="ndr-mark" src="${asset('neta-mark-night.png')}" alt="" width="251" height="192">
    <span class="ndr-name">Neta DAO Radio</span>
    <span class="ndr-live"><i></i><span class="ndr-live-label">Off</span></span>
    <span class="ndr-track" aria-live="polite"></span>
    <label class="ndr-vol"><span class="ndr-sr">Volume</span><input type="range" min="0" max="100" step="5"></label>`;
  const spacer = document.createElement('div');
  spacer.className = 'ndr-spacer';
  spacer.setAttribute('aria-hidden', 'true');
  const mount = () => { document.body.appendChild(spacer); document.body.appendChild(bar); };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  const button = bar.querySelector('.ndr-play');
  const liveLabel = bar.querySelector('.ndr-live-label');
  const track = bar.querySelector('.ndr-track');
  const volume = bar.querySelector('.ndr-vol input');
  const audio = new Audio();
  audio.preload = 'none';
  let state = 'off'; // off | loading | on
  let frame = null;
  let frameOrigin = '*';

  let savedVolume = 70;
  try { const v = localStorage.getItem('ndr-volume'); if (v !== null && Number(v) >= 0 && Number(v) <= 100) savedVolume = Number(v); } catch (_) {}
  volume.value = String(savedVolume);
  audio.volume = savedVolume / 100;
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value) / 100;
    try { localStorage.setItem('ndr-volume', volume.value); } catch (_) {}
  });

  const tellFrame = () => {
    if (!frame || !frame.contentWindow) return;
    try { frame.contentWindow.postMessage({ type: 'ndr:state', state }, frameOrigin); } catch (_) {}
  };
  const setState = (next) => {
    state = next;
    bar.classList.toggle('is-on', next === 'on');
    bar.classList.toggle('is-loading', next === 'loading');
    button.setAttribute('aria-pressed', String(next !== 'off'));
    button.setAttribute('aria-label', next === 'off' ? 'Play Neta DAO Radio' : 'Stop Neta DAO Radio');
    liveLabel.textContent = next === 'on' ? 'Live' : next === 'loading' ? 'Tuning…' : 'Off';
    if (next === 'off') track.textContent = '';
    tellFrame();
  };

  let statusTimer = 0;
  const pollStatus = async () => {
    clearTimeout(statusTimer);
    if (state === 'off') return;
    try {
      const res = await fetch(STATUS, { cache: 'no-store' });
      const data = await res.json();
      const title = data && data.current_track && data.current_track.title;
      track.textContent = title ? title : '';
    } catch (_) { /* no now-playing: the bar just shows Live */ }
    statusTimer = setTimeout(pollStatus, 30000);
  };

  const start = async () => {
    setState('loading');
    audio.src = STREAM;
    try {
      await audio.play();
      setState('on');
      pollStatus();
    } catch (error) {
      setState('off');
      console.warn('Neta DAO Radio could not start:', error);
    }
  };
  const stop = () => {
    clearTimeout(statusTimer);
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    setState('off');
  };
  button.addEventListener('click', () => (state === 'off' ? start() : stop()));
  audio.addEventListener('error', () => { if (state !== 'off') stop(); });

  // A page with its own radio takes over: this one stops and the bar steps aside until it's given back.
  let handed = false;
  const handOff = () => {
    const was = state !== 'off';
    if (was) stop();
    handed = true;
    document.documentElement.classList.add('ndr-handed');
    return was;
  };
  const takeBack = () => {
    handed = false;
    document.documentElement.classList.remove('ndr-handed');
  };

  /* ---------------------------------------------------------------- the shell */
  let hidden = [];
  const baseUrl = location.href.split('#')[0];
  const originalTitle = document.title;

  const enterShell = (href, { push = true } = {}) => {
    if (!frame) {
      document.querySelectorAll('audio, video').forEach((m) => { if (m !== audio) { try { m.pause(); } catch (_) {} } });
      frame = document.createElement('iframe');
      frame.className = 'ndr-frame';
      frame.title = 'Page';
      frame.setAttribute('allow', 'autoplay; fullscreen; clipboard-read; clipboard-write; web-share');
      // The page under the frame stays laid out (so leaving the shell returns to the same scroll
      // position) but can't be seen, focused or read out.
      hidden = [...document.body.children].filter((n) => n !== bar && n.nodeType === 1);
      hidden.forEach((n) => { n.classList.add('ndr-away'); n.inert = true; });
      document.documentElement.classList.add('ndr-shell');
      document.body.appendChild(frame);
      if (push) history.pushState({ ndrShell: true }, '', location.href);
      else history.replaceState({ ndrShell: true }, '', location.href);
    }
    frame.src = href;
  };
  const exitShell = () => {
    if (!frame) return;
    frame.remove();
    frame = null;
    hidden.forEach((n) => { n.classList.remove('ndr-away'); n.inert = false; });
    hidden = [];
    document.documentElement.classList.remove('ndr-shell');
    document.title = originalTitle;
    if (!ownsRadio()) takeBack();
  };

  window.addEventListener('message', (event) => {
    if (!frame || event.source !== frame.contentWindow || !isFamilyOrigin(event.origin)) return;
    const data = event.data || {};
    if (data.type === 'ndr:handoff') return void handOff();
    if (data.type === 'ndr:takeback') return void takeBack();
    if (data.type !== 'ndr:page') return;
    let url;
    try { url = new URL(data.href); } catch (_) { return; }
    if (!isFamily(url) || url.origin !== event.origin) return;
    frameOrigin = url.origin;
    if (data.handoff) handOff(); else if (handed) takeBack();
    tellFrame();
    if (data.title) document.title = data.title;
    const shown = url.origin === location.origin ? url.href : baseUrl + '#listen=' + encodeURIComponent(url.href);
    if (shown !== location.href) history.replaceState({ ndrShell: true }, '', shown);
  });

  // The page a shell entry shows: its own address, or the one recorded in #listen=.
  const listenTarget = () => {
    const m = location.hash.match(/^#listen=(.+)$/);
    if (!m) return null;
    try { const url = new URL(decodeURIComponent(m[1])); return isFamily(url) ? url.href : null; } catch (_) { return null; }
  };

  window.addEventListener('popstate', (event) => {
    const inShellEntry = !!(event.state && event.state.ndrShell);
    if (frame && !inShellEntry) exitShell();
    else if (!frame && inShellEntry) enterShell(listenTarget() || location.href, { push: false }); // Forward, back in
  });

  // While the radio is on, family links open in the shell and other links in a new tab, so nothing on
  // this page ever replaces it. With the radio off, links behave as usual. This listens last (window,
  // bubbling), so links a page handles with its own script are left to it.
  window.addEventListener('click', (event) => {
    if (state === 'off' && !frame) return;
    const hit = httpLink(event);
    if (!hit) return;
    const { link, url } = hit;
    if (leaves(link)) return;
    if (inPage(link, url) && !opensElsewhere(link)) return;
    event.preventDefault();
    if (isFamily(url)) enterShell(url.href);
    else window.open(url.href, '_blank', 'noopener');
  });

  // A #listen= link (a page on another family site, recorded by the shell) reopens in the shell.
  const listen = listenTarget();
  if (listen) {
    const go = () => enterShell(listen, { push: false });
    if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
  }
  if (ownsRadio()) handOff();

  window.NetaDAORadio = {
    start, stop, handOff, takeBack, audio,
    get state() { return state; },
    get playing() { return state !== 'off'; },
    get inShell() { return !!frame; },
    get framed() { return false; },
  };
})();
