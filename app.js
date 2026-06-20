/* ==========================================================================
   Renderer — turns window.PORTFOLIO (from data.js) into the page.
   You shouldn't need to edit this to update content; use data.js.
   Edit here only to change markup structure or add a new section type.
   ========================================================================== */
(function () {
  "use strict";

  var data = window.PORTFOLIO || {};
  var cfg = data.config || {};

  /* ---- Social icon SVGs (keyed by `type` in data.js) ------------------ */
  var ICONS = {
    email:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-10 6L2 8V6l10 6 10-6z"/></svg>',
    github:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    twitter:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    linkedin: '<svg width="19" height="19" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>',
    scholar:  '<svg width="19" height="19" viewBox="0 0 24 24" fill="#fff"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.547 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
    medium:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/></svg>'
  };

  var LABELS = {
    email: "Email", github: "GitHub", twitter: "Twitter",
    linkedin: "LinkedIn", scholar: "Google Scholar", medium: "Medium"
  };

  // Open-source card icons, keyed by `icon` in data.js (default = grid).
  var OSS_ICONS = {
    "": '<svg width="18" height="18" viewBox="0 0 24 24" fill="#71717a"><path d="M2 2h9v9H2V2zm11 0h9v9h-9V2zM2 13h9v9H2v-9zm11 0h9v9h-9v-9z"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#71717a"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    huggingface: '<span class="hf-emoji" aria-hidden="true">🤗</span>'
  };
  function ossIcon(kind) { return OSS_ICONS[kind] || OSS_ICONS[""]; }

  /* ---- Abstract cover generator ---------------------------------------
     When a blog has no `cover` image, we draw a deterministic abstract SVG
     so each card looks intentional. Same title => same artwork every load.
  ---------------------------------------------------------------------- */
  var COVER_PALETTES = [
    { bg: ["#1e3a8a", "#3b82f6"], blobs: ["#60a5fa", "#93c5fd", "#bfdbfe"] }, // blue
    { bg: ["#0f766e", "#14b8a6"], blobs: ["#5eead4", "#99f6e4", "#2dd4bf"] }, // teal
    { bg: ["#5b21b6", "#8b5cf6"], blobs: ["#c4b5fd", "#a78bfa", "#ddd6fe"] }, // violet
    { bg: ["#9d174d", "#ec4899"], blobs: ["#f9a8d4", "#fbcfe8", "#f472b6"] }, // rose
    { bg: ["#b45309", "#f59e0b"], blobs: ["#fcd34d", "#fde68a", "#fbbf24"] }, // amber
    { bg: ["#1e293b", "#475569"], blobs: ["#94a3b8", "#cbd5e1", "#64748b"] }, // slate
    { bg: ["#065f46", "#10b981"], blobs: ["#6ee7b7", "#a7f3d0", "#34d399"] }, // green
    { bg: ["#3730a3", "#6366f1"], blobs: ["#a5b4fc", "#818cf8", "#c7d2fe"] }  // indigo
  ];

  function hashStr(s) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function abstractCover(seed) {
    var H = hashStr(String(seed));
    var rnd = mulberry32(H);
    var pal = COVER_PALETTES[H % COVER_PALETTES.length];
    var W = 320, Hh = 180;

    var blobs = "";
    var n = 3 + Math.floor(rnd() * 2); // 3–4 soft blobs
    for (var i = 0; i < n; i++) {
      var cx = Math.round(rnd() * W);
      var cy = Math.round(rnd() * Hh);
      var r = Math.round(46 + rnd() * 70);
      var fill = pal.blobs[i % pal.blobs.length];
      blobs += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '"/>';
    }
    var dots = "";
    for (var j = 0; j < 7; j++) {
      dots += '<circle cx="' + Math.round(rnd() * W) + '" cy="' + Math.round(rnd() * Hh) +
              '" r="' + (1 + Math.round(rnd() * 1.5)) + '" fill="#ffffff" opacity="0.5"/>';
    }

    return '<svg class="cover-svg" viewBox="0 0 ' + W + ' ' + Hh + '" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract cover">' +
      '<defs>' +
        '<linearGradient id="cg' + H + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="' + pal.bg[0] + '"/>' +
          '<stop offset="1" stop-color="' + pal.bg[1] + '"/>' +
        '</linearGradient>' +
        '<filter id="cb' + H + '" x="-30%" y="-30%" width="160%" height="160%">' +
          '<feGaussianBlur stdDeviation="22"/>' +
        '</filter>' +
      '</defs>' +
      '<rect width="' + W + '" height="' + Hh + '" fill="url(#cg' + H + ')"/>' +
      '<g filter="url(#cb' + H + ')" opacity="0.6">' + blobs + '</g>' +
      dots +
    '</svg>';
  }

  /* ---- Tiny DOM helpers ----------------------------------------------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---- Email (assembled at runtime from split parts) ------------------ */
  var EMAIL = "";
  if (data.email && data.email.user && data.email.domain) {
    // join with "@" via char code so the full address isn't a literal string
    EMAIL = data.email.user + String.fromCharCode(64) + data.email.domain;
  }

  /* ---- Apply config --------------------------------------------------- */
  if (cfg.accent) document.documentElement.style.setProperty("--accent", cfg.accent);
  if (cfg.pageTitle) document.title = cfg.pageTitle;

  /* ---- Header --------------------------------------------------------- */
  function renderHeader() {
    var p = data.profile || {};
    $("#name").textContent = p.name || "";
    $("#tagline").textContent = p.tagline || "";

    var av = $("#avatar");
    if (p.photo) {
      av.innerHTML = '<img src="' + esc(p.photo) + '" alt="' + esc(p.name || "Profile photo") + '">';
    } else {
      av.innerHTML = '<span class="placeholder">your photo</span>';
    }

    var socials = $("#socials");
    (data.socials || []).forEach(function (s) {
      // email href is built from the obfuscated parts; others use their href
      var href = s.type === "email" ? (EMAIL ? "mailto:" + EMAIL : "") : s.href;
      if (!href || !ICONS[s.type]) return;
      var a = el("a", {
        "class": "soc",
        href: href,
        "aria-label": LABELS[s.type] || s.type,
        rel: "noopener"
      }, ICONS[s.type]);
      if (s.type !== "email") a.setAttribute("target", "_blank");
      socials.appendChild(a);
    });
  }

  /* ---- Bio ------------------------------------------------------------ */
  function renderBio() {
    if (data.bio) $("#bio-text").innerHTML = data.bio;
  }

  /* ---- Career --------------------------------------------------------- */
  function renderCareer() {
    var tl = $("#timeline");
    (data.career || []).forEach(function (c) {
      var item = el("div", { "class": "tl-item" });

      // Logo: prefer an image (logoImg); otherwise fall back to the text letter.
      var logoInner;
      if (c.logoImg) {
        var fit = c.logoFit === "cover" ? "cover" : "contain";
        logoInner = '<img class="tl-logo-img ' + fit + '" src="' + esc(c.logoImg) + '" alt="' + esc((c.title || "").replace(/<[^>]*>/g, "")) + ' logo">';
      } else {
        logoInner = esc(c.logo);
      }
      var small = (!c.logoImg && (c.logo || "").length > 2) ? " small" : "";

      item.innerHTML =
        '<div class="tl-period">' + esc(c.period) + '</div>' +
        '<div class="tl-dot-col"><div class="tl-dot' + (c.current ? " current" : "") + '"></div></div>' +
        '<div class="tl-logo' + small + '" style="background:' + esc(c.logoBg) + ';color:' + esc(c.logoColor) + '">' + logoInner + '</div>' +
        '<div class="tl-body rich"><h3>' + (c.title || "") + '</h3><p>' + (c.body || "") + '</p></div>';
      tl.appendChild(item);
    });
  }

  /* ---- Blogs ---------------------------------------------------------- */
  function renderBlogs() {
    if (data.blogsIntro) $("#blogs-intro").innerHTML = data.blogsIntro;
    var scroller = $("#blog-scroll");
    (data.blogs || []).forEach(function (b, i) {
      var cover = b.cover
        ? '<img src="' + esc(b.cover) + '" alt="">'
        : abstractCover(b.title || b.source || ("post-" + i));
      var a = el("a", {
        "class": "blog-card card-lift",
        href: b.href || "#",
        rel: "noopener",
        target: (b.href && b.href !== "#") ? "_blank" : null
      },
        '<div class="blog-cover">' + cover + '</div>' +
        '<div class="blog-card-body">' +
          '<div class="blog-source">' + esc(b.source) + '</div>' +
          '<h3>' + esc(b.title) + '</h3>' +
          '<p>' + esc(b.excerpt) + '</p>' +
        '</div>');
      scroller.appendChild(a);
    });

    // arrow buttons
    function scrollBy(dir) {
      var amount = Math.max(312, scroller.clientWidth * 0.8);
      scroller.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
    $("#blog-left").addEventListener("click", function () { scrollBy(-1); });
    $("#blog-right").addEventListener("click", function () { scrollBy(1); });
  }

  /* ---- Publications --------------------------------------------------- */
  function renderPublications() {
    var list = $("#pub-list");
    (data.publications || []).forEach(function (p) {
      var badge = p.badge ? '<span class="pub-badge">' + esc(p.badge) + '</span>' : "";
      var item = el("div", { "class": "pub" },
        '<div class="pub-year">' + esc(p.year) + '</div>' +
        '<div class="pub-body">' +
          '<a class="acc pub-title" href="' + esc(p.href || "#") + '"' +
            ((p.href && p.href !== "#") ? ' target="_blank" rel="noopener"' : '') + '>' +
            esc(p.title) + '</a>' +
          '<div class="pub-venue">' + badge + esc(p.venue) + '</div>' +
        '</div>');
      list.appendChild(item);
    });
  }

  /* ---- Open source ---------------------------------------------------- */
  function renderOpenSource() {
    var section = $("#oss");
    if (cfg.showOpenSource === false) { section.remove(); return; }

    if (data.openSourceIntro) $("#oss-intro").innerHTML = esc(data.openSourceIntro);
    var grid = $("#oss-grid");
    (data.openSource || []).forEach(function (o) {
      var stars = (cfg.showStars !== false && o.stars)
        ? '<span>' + esc(o.stars) + '</span>' : "";
      var langHtml = o.lang
        ? '<span class="oss-lang"><span class="oss-lang-dot" style="background:' + esc(o.langDot) + '"></span>' + esc(o.lang) + '</span>'
        : "";
      var a = el("a", {
        "class": "oss-card card-lift",
        href: o.href || "#",
        rel: "noopener",
        target: (o.href && o.href !== "#") ? "_blank" : null
      },
        '<div class="oss-card-head">' + ossIcon(o.icon) +
          '<span class="oss-name">' + esc(o.name) + '</span></div>' +
        '<p>' + esc(o.desc) + '</p>' +
        '<div class="oss-meta">' +
          langHtml +
          stars +
          (o.meta ? '<span>' + esc(o.meta) + '</span>' : '') +
        '</div>');
      grid.appendChild(a);
    });
  }

  /* ---- Footer --------------------------------------------------------- */
  function renderFooter() {
    if (!data.footer) return;
    var emailLink = EMAIL
      ? '<a class="acc" href="mailto:' + EMAIL + '">' + EMAIL + '</a>'
      : "";
    $("#footer-text").innerHTML = data.footer.replace(/\{\{\s*email\s*\}\}/g, emailLink);
  }

  /* ---- Go ------------------------------------------------------------- */
  renderHeader();
  renderBio();
  renderCareer();
  renderBlogs();
  renderPublications();
  renderOpenSource();
  renderFooter();
})();
