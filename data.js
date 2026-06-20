/* ==========================================================================
   PORTFOLIO CONTENT  —  edit everything here
   --------------------------------------------------------------------------
   This is the ONLY file you need to touch to update your site's content.
   Nothing here is layout or styling — just your data. Save the file and
   refresh the page (or push to GitHub) to see changes.

   Tips:
   - Text fields accept plain text. A few fields (marked "HTML ok") also
     accept inline links like:  <a href="https://...">label</a>
   - To hide a whole section, set its `show` flag to false in `config`.
   - To remove an item, delete its { ... } block. To add one, copy a block.
   ========================================================================== */

window.PORTFOLIO = {

  /* ---- Global settings ------------------------------------------------- */
  config: {
    accent: "#2563eb",        // accent color used for links, dots, highlights
    showOpenSource: true,     // show/hide the "open source" section
    showStars: true,          // show/hide the ★ star counts on open-source cards
    pageTitle: "Souvik Mandal — Portfolio"  // browser tab title
  },

  /* ---- Header ---------------------------------------------------------- */
  profile: {
    name: "Souvik Mandal",
    tagline: "I train vision-language models to read the world's documents.",
    // Drop a square photo into assets/ and put its path here, e.g.
    //   photo: "assets/me.jpg"
    // Leave it empty ("") to show the "your photo" placeholder.
    photo: "assets/profile.jpg"
  },

  /* ---- Social / contact links -----------------------------------------
     type controls which icon is shown. Supported types:
       email, github, twitter, linkedin, scholar, medium
     Set href to "" or delete a block to hide that icon.
     (For email, add an `email: { user, domain }` field and a { type: "email" }
      entry — it's assembled at runtime to dodge spam scrapers.)
  ---------------------------------------------------------------------- */
  socials: [
    { type: "linkedin", href: "https://www.linkedin.com/in/mandalsouvik/" },
    { type: "twitter",  href: "https://x.com/mandalsouvik4" },
    { type: "github",   href: "https://github.com/souvik3333" },
    { type: "scholar",  href: "" },
    { type: "medium",   href: "https://medium.com/@mandalsouvik" }
  ],

  /* ---- Bio ------------------------------------------------------------- */
  // HTML ok (inline links allowed)
  bio: "Souvik Mandal is a deep learning engineer and researcher working at the intersection of computer vision and language. He leads R&amp;D of the Nanonets-OCR vision-language model series — open models with over a million downloads on Hugging Face — and previously built medical imaging models at Qure.ai and self-supervised learning systems at Fractal Analytics. He open-sources much of his work and writes regularly about deep learning research.",

  /* ---- Career timeline -------------------------------------------------
     Each entry:
       period   : the years shown on the left
       logoImg  : path to a logo image (used if present). Put files in
                  assets/logos/. Leave out to fall back to the text `logo`.
       logoFit  : "contain" (centered mark with padding, default) or
                  "cover" (full-bleed square icon, e.g. a favicon-style tile)
       logo      : fallback text shown if there's no logoImg (e.g. "N", "IIT")
       logoBg   : background color of the square (behind the logo)
       logoColor: text color (only used for the fallback text logo)
       current  : true makes the timeline dot use your accent color
       title     : role + org (HTML ok — link the org name if you like)
       body      : description (HTML ok)
  ---------------------------------------------------------------------- */
  career: [
    {
      period: "2024 — Now",
      logoImg: "assets/logos/nanonets.svg",
      logoFit: "contain",
      logo: "N",
      logoBg: "#eef2ff",
      logoColor: "#3b4ce0",
      current: true,
      title: 'Senior Deep Learning Engineer · <a href="#">Nanonets</a>',
      body: 'Lead R&amp;D of the <a href="https://huggingface.co/nanonets">Nanonets-OCR VLM series</a> (OCR-s, OCR2, OCR3) — open models with 1M+ downloads on Hugging Face, and closed models processing millions of customer documents. Trained these VLMs on 10M+ dense documents for image-to-markdown, table extraction, and multilingual VQA, reaching SOTA on OlmOCR and OmniDocBench using LoRA, full finetuning, GRPO, and model merging. Also built an on-prem agentic RAG for 1000+ page documents and designed the <a href="https://www.idp-leaderboard.org">IDP Leaderboard</a>.'
    },
    {
      period: "2022 — 2023",
      logoImg: "assets/logos/qure.png",
      logoFit: "cover",
      logo: "Q",
      logoBg: "#ff6d61",
      logoColor: "#0f9d77",
      current: false,
      title: 'Senior AI Scientist · <a href="#">Qure.ai</a>',
      body: "Built lung-nodule segmentation and characteristics-classification models for qCT that passed rigorous CE study clearance, including context-based models that improved segmentation accuracy and networks designed to run efficiently on both CPU and GPU. Managed the data annotation for segmentation and characteristics. Also developed medical foundation models, adapting the MAE and SAM papers for volumetric CT scans, including MAE-based self-supervised pretraining of a ViT-Large."
    },
    {
      period: "2020 — 2022",
      logoImg: "assets/logos/fractal.svg",
      logoFit: "contain",
      logo: "F",
      logoBg: "#ffffff",
      logoColor: "#d6455e",
      current: false,
      title: 'Data Scientist, AI@SCALE · <a href="#">Fractal Analytics</a>',
      body: "Developed semi-supervised and self-supervised learning algorithms that reduced the labeled data needed for supervised training, and built object detection and tracking systems for drone video streams."
    },
    {
      period: "2016 — 2020",
      logoImg: "assets/logos/iit-indore.png",
      logoFit: "contain",
      logo: "IIT",
      logoBg: "#ffffff",
      logoColor: "#9a7b2e",
      current: false,
      title: "B.Tech, Computer Science &amp; Engineering · IIT Indore",
      body: 'B.Tech thesis project (BTP), <em>“Developing an Object and Event Detection and Recognition Module for Autonomous Vehicles Using Simulators,”</em> advised by Dr. Gourinath Banda.'
    }
  ],

  /* ---- Blogs ----------------------------------------------------------
     Horizontal scrolling cards. Each entry:
       source : small label above the title (e.g. "Medium", "Nanonets Blog")
       title  : post title
       excerpt: one-line description
       href   : link to the post
       cover  : optional image path (e.g. "assets/post1.jpg").
                Leave "" and a unique abstract cover is generated automatically.
  ---------------------------------------------------------------------- */
  blogsIntro: 'I write about deep learning, vision-language models, and document AI — model releases on the Nanonets research blog and paper deep-dives on Medium.',
  blogs: [
    {
      source: "Nanonets Research",
      title: "Introducing Nanonets-OCR3",
      excerpt: "A Mixture-of-Experts OCR model with native confidence scores, bounding boxes, and visual question answering for document parsing.",
      href: "https://nanonets.com/research/nanonets-ocr-3",
      cover: ""
    },
    {
      source: "Nanonets Research",
      title: "Nanonets-OCR2",
      excerpt: "An OCR model suite that turns documents into structured markdown and recognizes signatures, equations, and more via VQA.",
      href: "https://nanonets.com/research/nanonets-ocr-2/",
      cover: ""
    },
    {
      source: "Nanonets Research",
      title: "Nanonets-OCR-s",
      excerpt: "A compact image-to-markdown model that goes beyond text extraction to capture structure, tables, equations, and signatures.",
      href: "https://nanonets.com/research/nanonets-ocr-s/",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "Attention Is All You Need",
      excerpt: "A walk through the Transformer architecture and the self-attention mechanism that replaced recurrence in sequence modeling.",
      href: "https://itnext.io/attention-is-all-you-need-e8109d2693e",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "CLIP: Learning Transferable Visual Models from Natural Language Supervision",
      excerpt: "How CLIP learns transferable visual representations by training on image–text pairs with natural-language supervision.",
      href: "https://itnext.io/clip-learning-transferable-visual-models-from-natural-language-supervision-29f2817f317f",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "LLM Compression Techniques",
      excerpt: "An overview of quantization, pruning, and distillation methods for shrinking large language models without losing quality.",
      href: "https://itnext.io/llm-compression-techniques-49865356fa70",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "TokenLearner",
      excerpt: "How TokenLearner adaptively reduces the number of visual tokens to make vision transformers far more efficient.",
      href: "https://itnext.io/tokenlearner-60bf14248611",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "DETR: End-to-End Object Detection with Transformers (Part 1)",
      excerpt: "Set-based prediction and bipartite matching that remove hand-crafted components from the object-detection pipeline.",
      href: "https://itnext.io/detr-end-to-end-object-detection-with-transformers-part-1-4a7ec4e386f7",
      cover: ""
    },
    {
      source: "Medium Article",
      title: "Masked Autoencoders Are Scalable Vision Learners",
      excerpt: "Why masking most of an image and reconstructing it makes MAE a simple, scalable self-supervised vision learner.",
      href: "https://itnext.io/masked-autoencoders-are-scalable-vision-learners-122a75b54470",
      cover: ""
    }
  ],

  /* ---- Publications ---------------------------------------------------
     Each entry:
       year  : year shown on the left
       title : publication title
       venue : journal / conference + year
       href  : link to the paper
       badge : optional small tag, e.g. "PATENT". Leave "" for none.
  ---------------------------------------------------------------------- */
  publications: [
    {
      year: "2025",
      title: "Nanonets-OCR2: Transforming Documents into Structured Markdown with Intelligent Content Recognition and Semantic Tagging",
      venue: "Hugging Face · 2025",
      href: "https://huggingface.co/nanonets",
      badge: ""
    },
    {
      year: "2024",
      title: "Validation of a Commercially Available CAD System for Lung Nodule Detection and Characterization Using CT Scans",
      venue: "European Radiology · 2024",
      href: "#",
      badge: ""
    },
    {
      year: "2023",
      title: "Using an AI Algorithm to Improve Radiologists' Performance in Detecting Pulmonary Nodules in Chest-CT — A Multi-Reader Multi-Case Study",
      venue: "ECR · 2023",
      href: "#",
      badge: ""
    },
    {
      year: "2022",
      title: "Needle in a Haystack: Opportunistic Screening of Lung Nodules Amidst Covid-19 Using Deep Learning",
      venue: "CHEST · 2022",
      href: "#",
      badge: ""
    },
    {
      year: "2022",
      title: "System and Methods for Efficient Machine Learning",
      venue: "2022",
      href: "#",
      badge: "PATENT"
    },
    {
      year: "2020",
      title: "Developing an Object and Event Detection and Recognition Module for Autonomous Vehicles Using Simulators",
      venue: "ICSCSP · 2020",
      href: "#",
      badge: ""
    },
    {
      year: "2019",
      title: "Linear Approximation and Differential Attacks on Logic Locking Techniques",
      venue: "VLSID · 2019",
      href: "#",
      badge: ""
    }
  ],

  /* ---- Open source -----------------------------------------------------
     Each entry:
       name   : project name
       icon   : "github" (octocat), "huggingface" (🤗), or "" (default grid)
       desc   : short description
       lang   : language label
       langDot: color of the small language dot
       stars  : star count text (only shown if config.showStars is true).
                Leave "" for models where downloads matter more than stars.
       meta   : extra label on the right (e.g. "161k downloads / mo")
       href   : link to the project
  ---------------------------------------------------------------------- */
  openSourceIntro: "Models and tools I've built and released to the community.",
  openSource: [
    {
      name: "Nanonets-OCR2-3B",
      icon: "huggingface",
      desc: "A state-of-the-art image-to-markdown OCR model with LaTeX equation recognition, image descriptions, signature detection, table extraction, and multilingual support.",
      stars: "",
      meta: "1M+ total downloads",
      href: "https://huggingface.co/nanonets/Nanonets-OCR2-3B"
    },
    {
      name: "Nanonets-OCR-s",
      icon: "huggingface",
      desc: "A compact image-to-markdown OCR model that turns documents into structured markdown — equations, signatures, watermarks, checkboxes, and complex tables included.",
      stars: "",
      meta: "1M+ total downloads",
      href: "https://huggingface.co/nanonets/Nanonets-OCR-s"
    },
    {
      name: "docext",
      icon: "github",
      desc: "An on-premises, OCR-free toolkit for unstructured data extraction, markdown conversion, and benchmarking.",
      lang: "Python",
      langDot: "#3b4ce0",
      stars: "★ 2k",
      meta: "GitHub",
      href: "https://github.com/NanoNets/docext"
    },
    {
      name: "IDP Leaderboard",
      desc: "The most comprehensive intelligent-document-processing benchmark — evaluating models end-to-end across extraction, layout, and QA.",
      lang: "Jupyter",
      langDot: "#e0a23b",
      stars: "",
      meta: "benchmark",
      href: "https://www.idp-leaderboard.org"
    }
  ],

  /* ---- Footer ----------------------------------------------------------
     HTML ok. (If you add an `email` field, the {{email}} token here is
     replaced at runtime with a clickable, spam-resistant mailto link.)
  ---------------------------------------------------------------------- */
  footer: 'Souvik Mandal · Bengaluru, India'
};
