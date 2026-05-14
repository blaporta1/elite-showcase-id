/* ============================================================
   ELITE SHOWCASE ID — main.js
   Handles: nav, camp rendering + filter, coaches rendering,
            FAQ accordion, form validation, counter animation
   ============================================================ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────── */

/** Camp data — swap in API response here for dynamic integration */
const CAMPS = [
  {
    id: 1,
    name: 'Northeast Spring Showcase',
    division: 'U17 · U18 · Spring Series',
    ageGroups: ['U17', 'U18'],
    date: 'April 5–7, 2025',
    location: 'Philadelphia, PA',
    region: 'northeast',
    programs: 32,
    spots: 0,
    spotsStatus: 'sold',
    status: 'sold-out',
    stripeColor: '#8898aa'
  },
  {
    id: 2,
    name: 'Dallas Summer ID Camp',
    division: 'U17 · U18 · Regional Series',
    ageGroups: ['U17', 'U18'],
    date: 'June 20, 2025',
    location: 'Dallas, TX',
    region: 'south',
    programs: 28,
    spots: 44,
    spotsStatus: 'open',
    status: 'open',
    stripeColor: 'var(--accent)'
  },
  {
    id: 3,
    name: 'Midwest National Showcase',
    division: 'U15 · U16 · National Series',
    ageGroups: ['U15', 'U16'],
    date: 'July 18–20, 2025',
    location: 'Columbus, OH',
    region: 'midwest',
    programs: 36,
    spots: 44,
    spotsStatus: 'open',
    status: 'open',
    stripeColor: 'var(--accent)'
  },
  {
    id: 4,
    name: 'Fall National ID Camp',
    division: 'U14 · U15 · U16 · U17 · U18 · Flagship',
    ageGroups: ['U14', 'U15', 'U16', 'U17', 'U18'],
    date: 'September 20–22, 2025',
    location: 'Dallas, TX',
    region: 'south',
    programs: 52,
    spots: null,
    spotsStatus: 'open',
    status: 'open',
    stripeColor: 'var(--accent)'
  }
];

/** Coach roster data — placeholder entries */
const COACHES = [
  {
    initials: 'DM',
    name: 'David Morales',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'Georgetown University',
    division: 'NCAA DI',
    color: '#0057cc'
  },
  {
    initials: 'SC',
    name: 'Sarah Chen',
    title: 'Assistant Head Coach',
    program: "Women's Soccer",
    school: 'University of Virginia',
    division: 'NCAA DI',
    color: '#003fa3'
  },
  {
    initials: 'TW',
    name: 'Thomas Wheeler',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'Wake Forest University',
    division: 'NCAA DI',
    color: '#0057cc'
  },
  {
    initials: 'CR',
    name: 'Chad Riley',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'Notre Dame',
    division: 'NCAA DI',
    color: '#003fa3'
  },
  {
    initials: 'RJ',
    name: 'Rafael Jimenez',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'Creighton University',
    division: 'NCAA DI',
    color: '#0057cc'
  },
  {
    initials: 'RJ',
    name: 'Ryan Jorden',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'UCLA',
    division: 'NCAA DI',
    color: '#003fa3'
  },
  {
    initials: 'MB',
    name: 'Michael Brooks',
    title: 'Head Coach',
    program: "Men's Soccer",
    school: 'Villanova University',
    division: 'NCAA DI',
    color: '#0057cc'
  },
  {
    initials: 'JO',
    name: "Jessica O'Brien",
    title: 'Head Coach',
    program: "Women's Soccer",
    school: 'Penn State',
    division: 'NCAA DI',
    color: '#003fa3'
  }
];

/** FAQ content */
const FAQS = [
  {
    q: 'Who can attend an Elite Showcase ID camp?',
    a: 'Our camps are open to youth soccer players in the U14 through U18 age groups. Players do not need to belong to a specific club or have a minimum ranking to register. Registration is first-come, first-served — no club affiliation or prior exposure required.'
  },
  {
    q: 'What is an ID camp and how is it different from a showcase?',
    a: 'A traditional showcase exposes players to coaches in a tournament-style format — the format isn\'t designed for evaluation. An ID camp (Identification Camp) is structured specifically around the evaluation process. At Elite Showcase ID, every session is coach-designed to surface specific technical, tactical, and athletic qualities, and every player is scored on the same standardized rubric. Coaches leave with data, not just impressions.'
  },
  {
    q: 'Which college coaches will be at each event?',
    a: 'We publish a confirmed coach list for each camp 3–4 weeks before the event. Our events have historically drawn coaches from NCAA Division I, Division II, and NAIA programs. Every coach attending is an active staff member — we do not allow scouts or intermediaries at our events.'
  },
  {
    q: 'How does the evaluation process work?',
    a: 'Each player is evaluated across three structured sessions over the course of the camp. Coaches use our standardized rubric to score players on: technical ability (ball control, passing, finishing), tactical awareness (positioning, decision-making), athleticism (speed, agility, aerial ability), and character (coachability, intensity, work rate). Reports are compiled and distributed to all attending coaches within 24 hours of camp close.'
  },
  {
    q: 'What happens after camp if a coach is interested in me?',
    a: 'Players who receive interest flags from coaching staff are notified directly by our team. The interested coaches then receive the player\'s evaluation report and contact information, and are encouraged to reach out directly. We do not act as intermediaries beyond the initial flag notification. Direct contact from coaches typically happens within 7–14 days of camp closing.'
  },
  {
    q: 'What age groups are eligible, and what does camp look like?',
    a: 'We run divisions for U14, U15, U16, U17, and U18 players (based on birth year, aligned with US Soccer standards). Camp format includes technical sessions, position-specific training, small-sided games, and full 11v11 matches. Each camp runs Friday through Sunday — three full days of evaluation.'
  },
  {
    q: 'What is the refund policy?',
    a: 'We offer a full refund for cancellations made at least 30 days before the camp start date. Cancellations made 15–29 days before camp receive a 50% refund or full credit toward a future camp. No refund is issued for cancellations within 14 days, though camp credit may be available at our discretion.'
  },
  {
    q: 'Do I need to attend with my club team?',
    a: 'No. Players register and attend as individuals. Club affiliation does not affect your evaluation, your spot in the camp, or any decisions made by coaches. We believe talent should speak for itself — and our format is designed to let it.'
  }
];


/* ── DOM READY ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  initNav();
  renderCamps();
  renderCoaches();
  renderFAQs();
  initCampFilter();
  initFAQAccordion();
  initFormValidation();
  initCounters();
  initSmoothScroll();
});


/* ── NAV: scroll class + mobile toggle ─────────────────────── */
function initNav() {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  // Scrolled class for backdrop blur
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}


/* ── SMOOTH SCROLL for anchor links ────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      var top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}


/* ── CAMPS: render cards from data ─────────────────────────── */
function renderCamps() {
  var grid = document.getElementById('events-grid');
  if (!grid) return;

  grid.innerHTML = CAMPS.map(function (camp) {
    var isSoldOut = camp.status === 'sold-out';
    var pillClass = camp.spotsStatus; // 'open' | 'low' | 'sold'

    var pillText = '';
    if (camp.spots === null) pillText = 'Registration Open';
    else if (camp.spots === 0) pillText = 'Sold Out';
    else if (camp.spots < 15) pillText = camp.spots + ' Spots Left';
    else pillText = camp.spots + ' Spots Open';

    var footerAction = isSoldOut
      ? '<span class="event-register" style="color:var(--muted)">Closed</span>'
      : '<a href="#register" class="event-register">Register →</a>';

    var ageData = camp.ageGroups.join(' ');

    return [
      '<article class="event-card' + (isSoldOut ? ' sold-out' : '') + '"',
      '  data-age-groups="' + ageData + '"',
      '  data-region="' + camp.region + '">',
      '  <div class="event-card-stripe" style="background:' + camp.stripeColor + '"></div>',
      '  <div class="event-card-body">',
      '    <div class="event-division">' + camp.division + '</div>',
      '    <h3 class="event-name">' + camp.name + '</h3>',
      '    <div class="event-meta">',
      '      <span>',
      '        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="3" width="12" height="11" rx="1" stroke="#8898aa" stroke-width="1.3"/><path d="M5 1v4M11 1v4M2 7h12" stroke="#8898aa" stroke-width="1.3" stroke-linecap="round"/></svg>',
      '        ' + camp.date,
      '      </span>',
      '      <span>',
      '        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2C5.8 2 4 3.8 4 6c0 3.3 4 8 4 8s4-4.7 4-8c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#8898aa"/></svg>',
      '        ' + camp.location,
      '      </span>',
      '      <span>',
      '        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3.5 14a4.5 4.5 0 0 1 9 0" stroke="#8898aa" stroke-width="1.3" stroke-linecap="round"/></svg>',
      '        ' + camp.programs + ' College Programs Attending',
      '      </span>',
      '    </div>',
      '  </div>',
      '  <div class="event-card-footer">',
      '    <span class="spots-pill ' + pillClass + '">' + pillText + '</span>',
      '    ' + footerAction,
      '  </div>',
      '</article>'
    ].join('\n');
  }).join('');
}


/* ── CAMP FILTER ────────────────────────────────────────────── */
function initCampFilter() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var grid = document.getElementById('events-grid');
  if (!filterBtns.length || !grid) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      var cards = grid.querySelectorAll('.event-card');
      var anyVisible = false;

      cards.forEach(function (card) {
        if (filter === 'all') {
          card.classList.remove('hidden');
          anyVisible = true;
        } else {
          var groups = card.getAttribute('data-age-groups') || '';
          var match = groups.split(' ').indexOf(filter) !== -1;
          card.classList.toggle('hidden', !match);
          if (match) anyVisible = true;
        }
      });

      // Show "no results" if nothing visible
      var existing = grid.querySelector('.no-camps-msg');
      if (!anyVisible && !existing) {
        var msg = document.createElement('p');
        msg.className = 'no-camps-msg';
        msg.textContent = 'No camps scheduled for ' + filter + ' at this time. Check back soon.';
        grid.appendChild(msg);
      } else if (anyVisible && existing) {
        existing.remove();
      }
    });
  });
}


/* ── COACHES: render cards from data ───────────────────────── */
function renderCoaches() {
  var grid = document.getElementById('coaches-grid');
  if (!grid) return;

  grid.innerHTML = COACHES.map(function (coach) {
    return [
      '<article class="coach-card">',
      '  <div class="coach-avatar" style="background:' + coach.color + '" aria-hidden="true">',
      '    ' + coach.initials,
      '  </div>',
      '  <div class="coach-name">' + coach.name + '</div>',
      '  <div class="coach-title">' + coach.title + ' · ' + coach.program + '</div>',
      '  <div class="coach-school">' + coach.school + '</div>',
      '  <span class="coach-division">' + coach.division + '</span>',
      '</article>'
    ].join('\n');
  }).join('');
}


/* ── FAQ: render items from data ────────────────────────────── */
function renderFAQs() {
  var list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = FAQS.map(function (faq, i) {
    var id = 'faq-answer-' + i;
    return [
      '<div class="faq-item" data-index="' + i + '">',
      '  <button class="faq-question"',
      '    aria-expanded="false"',
      '    aria-controls="' + id + '">',
      '    <span class="faq-question-text">' + faq.q + '</span>',
      '    <span class="faq-icon" aria-hidden="true">',
      '      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">',
      '        <line x1="6" y1="1" x2="6" y2="11"/>',
      '        <line x1="1" y1="6" x2="11" y2="6"/>',
      '      </svg>',
      '    </span>',
      '  </button>',
      '  <div class="faq-answer" id="' + id + '" role="region" hidden>',
      '    <div class="faq-answer-inner">' + faq.a + '</div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }).join('');
}


/* ── FAQ ACCORDION ──────────────────────────────────────────── */
function initFAQAccordion() {
  var list = document.getElementById('faq-list');
  if (!list) return;

  list.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-question');
    if (!btn) return;

    var item = btn.closest('.faq-item');
    var answer = item.querySelector('.faq-answer');
    var isOpen = item.classList.contains('open');

    // Close all others
    list.querySelectorAll('.faq-item.open').forEach(function (openItem) {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        var a = openItem.querySelector('.faq-answer');
        a.hidden = true;
      }
    });

    // Toggle this one
    if (isOpen) {
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      answer.hidden = true;
    } else {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
}


/* ── FORM VALIDATION ────────────────────────────────────────── */
function initFormValidation() {
  var form = document.getElementById('registration-form');
  var successPanel = document.getElementById('form-success');
  if (!form) return;

  // Real-time validation on blur
  form.querySelectorAll('[required]').forEach(function (field) {
    field.addEventListener('blur', function () { validateField(field); });
    field.addEventListener('input', function () {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    form.querySelectorAll('[required]').forEach(function (field) {
      if (!validateField(field)) valid = false;
    });

    if (!valid) {
      var firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission (replace with real fetch/API call)
    var btn = form.querySelector('.form-submit');
    btn.textContent = 'Submitting…';
    btn.disabled = true;

    setTimeout(function () {
      form.hidden = true;
      if (successPanel) successPanel.hidden = false;
    }, 900);
  });
}

function validateField(field) {
  var errorEl = document.getElementById(field.id + '-error');
  var value = field.value.trim();
  var message = '';

  if (!value) {
    message = getFieldLabel(field) + ' is required.';
  } else if (field.type === 'email' && !isValidEmail(value)) {
    message = 'Please enter a valid email address.';
  } else if (field.type === 'tel' && value && !isValidPhone(value)) {
    message = 'Please enter a valid phone number.';
  }

  field.classList.toggle('invalid', !!message);
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (errorEl) errorEl.textContent = message;
  return !message;
}

function getFieldLabel(field) {
  var label = document.querySelector('label[for="' + field.id + '"]');
  if (!label) return 'This field';
  return label.textContent.replace('*', '').trim();
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v) {
  return /^[\d\s\-().+]{7,}$/.test(v);
}


/* ── COUNTER ANIMATION ──────────────────────────────────────── */
function initCounters() {
  var counters = document.querySelectorAll('.js-counter');
  if (!counters.length) return;

  var counted = new Set();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || counted.has(entry.target)) return;
      counted.add(entry.target);
      animateCounter(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
}

function animateCounter(el) {
  /* Preserve any HTML suffix tags (<span>, <em>) by extracting
     the raw digit string and re-inserting the rest as-is. */
  var rawText = el.textContent.replace(/[^0-9]/g, '');
  var target = parseInt(rawText, 10);
  if (!target) return;

  var suffix = el.innerHTML.replace(rawText, '').replace(/,/g, '');

  var start = null;
  var duration = 1200;

  function tick(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    var current = Math.round(ease * target);
    el.innerHTML = current.toLocaleString('en-US') + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
