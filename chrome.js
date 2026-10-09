/*
 * Portfolio System chrome, shared across the hub, cv and blog.
 * Reads data-site on <html> to mark the current site in switcher + footer.
 */

const SITES = [
  { id: 'hub', num: '00', url: 'riera.co.uk',     href: 'https://riera.co.uk/',        title: 'Profile',             desc: 'HPC and AI infrastructure architect: profile, CV and contact.',  tag: 'index' },
  { id: 'cv',  num: '01', url: 'cv.riera.co.uk',  href: 'https://cv.riera.co.uk/',     title: 'Curriculum vitae',    desc: 'HPC and AI infrastructure architect: CV download and contact.',  tag: 'career' },
  { id: 'blog', num: '02', url: 'blog.riera.co.uk', href: 'https://blog.riera.co.uk/',  title: 'Lab notes',           desc: 'Hands-on HPC, storage, Linux and self-hosted AI infrastructure.', tag: 'notes' },
];

const currentSite = document.documentElement.dataset.site || 'hub';

function buildFooter() {
  const root = document.getElementById('foot-grid');
  if (!root) return;
  root.innerHTML = SITES.map(s => `
    <a class="foot-link ${s.id === currentSite ? 'is-current' : ''}" href="${s.href}">
      <span class="u">${s.url}</span>
      <span class="d">${s.tag}</span>
    </a>
  `).join('');
}

function buildSwitcher() {
  const root = document.getElementById('switcher-list');
  if (!root) return;
  root.innerHTML = SITES.map(s => `
    <a class="switch-row ${s.id === currentSite ? 'is-current' : ''}" href="${s.href}">
      <span class="row-num">${s.num}</span>
      <div class="row-body">
        <div class="row-title">${s.title}</div>
        <div class="row-desc">${s.desc}</div>
      </div>
      <span class="row-url">${s.url}</span>
    </a>
  `).join('');
}

function openSwitcher() {
  const el = document.getElementById('switcher');
  if (!el) return;
  el.classList.add('open');
  buildSwitcher();
  const firstRow = el.querySelector('.switch-row');
  if (firstRow) firstRow.focus({ preventScroll: true });
}
function closeSwitcher() {
  const el = document.getElementById('switcher');
  if (el) el.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  buildFooter();

  const openBtn = document.getElementById('switcher-open');
  if (openBtn) openBtn.addEventListener('click', openSwitcher);
  const closeBtn = document.getElementById('switcher-close');
  if (closeBtn) closeBtn.addEventListener('click', closeSwitcher);
  const switcherEl = document.getElementById('switcher');
  if (switcherEl) {
    switcherEl.addEventListener('click', (e) => {
      if (e.target.id === 'switcher') closeSwitcher();
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSwitcher();
    }
    if (e.key === 'Escape') closeSwitcher();
  });
});
