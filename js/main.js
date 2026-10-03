/* ============================================================
   NETA DAO — Shared JavaScript
   - Mobile nav toggle
   - Scroll reveal
   - DAO DAO governance proposal loader
   ============================================================ */

// ── Mobile nav ──────────────────────────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Scroll reveal ────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

// ── DAO DAO Governance Loader ────────────────────────────────
const DAO_ADDRESS = 'juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6';
const INDEXER_BASE = 'https://indexer.daodao.zone/juno-1';

async function loadProposals(containerSelector, limit = 10) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = '<p class="proposals-loading">Loading proposals from chain…</p>';

  try {
    // Fetch proposal modules first
    const modulesRes = await fetch(
      `${INDEXER_BASE}/contract/${DAO_ADDRESS}/daoCore/activeProposalModules`
    );
    if (!modulesRes.ok) throw new Error('Could not fetch proposal modules');
    const modules = await modulesRes.json();

    let allProposals = [];

    for (const mod of modules) {
      // the indexer's formula for the newest proposals first (it no longer answers to daoProposalSingle/proposals)
      let propRes = await fetch(
        `${INDEXER_BASE}/contract/${mod.address}/daoProposalSingle/reverseProposals?limit=${limit}`
      );
      if (!propRes.ok) propRes = await fetch(`${INDEXER_BASE}/contract/${mod.address}/daoProposalSingle/listProposals?limit=${limit}`);
      if (!propRes.ok) continue;
      const data = await propRes.json();
      const proposals = Array.isArray(data) ? data : (data.proposals || []);
      allProposals = allProposals.concat(proposals.map(p => ({
        ...p,
        moduleAddress: mod.address,
        modulePrefix: mod.prefix || ''
      })));
    }

    if (!allProposals.length) {
      container.innerHTML = '<p class="proposals-loading">No proposals found on-chain.</p>';
      return;
    }

    // Sort by id desc
    allProposals.sort((a, b) => (b.id || 0) - (a.id || 0));
    const shown = allProposals.slice(0, limit);

    container.innerHTML = shown.map(p => {
      const status = p.proposal?.status || p.status || 'unknown';
      const title  = p.proposal?.title || p.title || 'Untitled Proposal';
      const id     = p.id ?? '—';
      const prefix = p.modulePrefix || '';
      const date   = p.createdAt
        ? new Date(p.createdAt).toLocaleDateString('en-US', {year:'numeric',month:'short',day:'numeric',timeZone:'UTC'})
        : (p.proposal?.start_height ? `Block ${p.proposal.start_height}` : '');

      const badgeClass = {
        passed:   'badge-passed',
        rejected: 'badge-failed',
        failed:   'badge-failed',
        open:     'badge-open',
        voting_open: 'badge-open',
        executed: 'badge-executed',
      }[status.toLowerCase()] || 'badge-open';

      const daoLink = `https://daodao.zone/dao/${DAO_ADDRESS}/proposals/${prefix}${id}`;

      return `
        <a href="${daoLink}" target="_blank" rel="noopener" class="proposal-item">
          <span class="proposal-num">${prefix}${id}</span>
          <span>
            <div class="proposal-title">${escHtml(title)}</div>
            <div class="proposal-meta">${date}</div>
          </span>
          <span class="badge ${badgeClass}">${status.replace(/_/g,' ')}</span>
        </a>`;
    }).join('');

  } catch (err) {
    console.error('Proposal load error:', err);
    container.innerHTML = `
      <p class="proposals-loading">
        Could not load live proposals. 
        <a href="https://daodao.zone/dao/${DAO_ADDRESS}/proposals" 
           target="_blank" rel="noopener" 
           style="color:var(--blue)">View on DAO DAO ↗</a>
      </p>`;
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// Export for use on specific pages
window.NetaDAO = { loadProposals };

// The hero mark holds still for anyone who asks for less motion.
(function () {
  var v = document.querySelector('.hero-mark');
  if (!v || !window.matchMedia) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function apply() { if (mq.matches) { v.pause(); v.currentTime = 0; } else { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
  apply();
  if (mq.addEventListener) mq.addEventListener('change', apply);
})();

// The Academy's word on the homepage fills with its pigment film on hover; the film loads the first time.
document.querySelectorAll('[data-film]').forEach(function (card) {
  var film = card.querySelector('.ns-liquid__film');
  if (!film) return;
  function load() { if (!film.style.backgroundImage) film.style.backgroundImage = 'url(' + card.getAttribute('data-film') + ')'; }
  card.addEventListener('pointerenter', load);
  card.addEventListener('focus', load);
});

// Initiatives (the header's menu): the button opens and closes it; Escape closes it and returns to the button;
// so does a click or focus elsewhere. With a pointer it also opens on hover (night.css).
document.querySelectorAll('[data-ns-menu]').forEach(function (menu) {
  var toggle = menu.querySelector('.ns-menu__toggle');
  if (!toggle) return;
  function setOpen(open) {
    if (open) menu.setAttribute('data-open', ''); else menu.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setOpen(!menu.hasAttribute('data-open')); });
  menu.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.hasAttribute('data-open')) { setOpen(false); toggle.focus(); } });
  menu.addEventListener('focusout', function (e) { if (!menu.contains(e.relatedTarget)) setOpen(false); });
  document.addEventListener('click', function (e) { if (!menu.contains(e.target)) setOpen(false); });
});
