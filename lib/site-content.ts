/** Central content for Intellix marketing site — mirrors plan/pages/*.md */

export const siteMeta = {
  name: "Intellix",
  tagline: "Unlock Your Digital Genius",
  taglineSecondary: "Learn. Create. Lead.",
  description:
    "Practical digital skills for The Gambia — design, video, photo, software development, and Learn AI (fundamentals through creative & dev stacks). Real projects and portfolio outcomes.",
  email: "info@intellix.gm",
  /** E.164 without + ; replace with real number */
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "2201234567",
  addressLine: "Serrekunda / Kanifing area, The Gambia",
  hours: "Mon–Sat · 9:00–18:00 (GMT)",
} as const

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${siteMeta.whatsappPhone.replace(/\D/g, "")}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/why-intellix", label: "Why Intellix" },
  { href: "/courses", label: "Courses" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/enroll", label: "Enroll" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

/** Mega-menu links under header “Courses” (desktop NavigationMenu) */
export const headerCourseLinks = [
  {
    href: "/courses/graphic-design",
    title: "Graphic Design",
    description: "Canva, Photoshop, Illustrator, print & brand",
  },
  {
    href: "/courses/editpro",
    title: "EditPro",
    description: "Motion & video — mobile edit, Premiere, FCP, Resolve, CapCut",
  },
  {
    href: "/courses/lenslab",
    title: "LensLab",
    description: "Photography — mobile shooting + mobile edit, DSLR/mirrorless, Lightroom + desktop",
  },
  {
    href: "/courses/scenecraft",
    title: "SceneCraft",
    description: "Videography — mobile shooting, gimbal, light, audio on set",
  },
  {
    href: "/courses/codecraft",
    title: "CodeCraft",
    description: "Software dev — web, mobile, iOS, DevOps",
  },
  {
    href: "/courses#learn-ai",
    title: "Learn AI",
    description: "Fundamentals, pros, developers & creatives — modular AI stack",
  },
  {
    href: "/courses#extras",
    title: "Creator Lab · Freelance Pro · AI Boost",
    description: "Content strategy, freelancing, AI workflows",
  },
] as const

/** Mega-menu links under header “Portfolio” */
export const headerPortfolioLinks = [
  {
    href: "/portfolio#graphic",
    title: "Graphic & design",
    description: "Campaigns, branding, social assets",
  },
  {
    href: "/portfolio#photo",
    title: "Photography",
    description: "LensLab and stills work",
  },
  {
    href: "/portfolio#video-edit",
    title: "Video & motion",
    description: "EditPro — edits, reels, and motion graphics",
  },
  {
    href: "/portfolio#videography",
    title: "Videography",
    description: "SceneCraft production footage",
  },
  {
    href: "/portfolio#software",
    title: "Software",
    description: "Apps, sites, CodeCraft portfolios",
  },
  {
    href: "/portfolio#content",
    title: "Content & more",
    description: "Creator Lab and cross-discipline work",
  },
] as const

export type ProgramSlug =
  | "graphic-design"
  | "editpro"
  | "lenslab"
  | "scenecraft"
  | "codecraft"

export type ProgramRow = {
  name: string
  focus: string
  deliverables: string
  tools: string
}

export type ProgramDetail = {
  slug: ProgramSlug
  title: string
  shortName: string
  tagline: string
  intro: string
  durationLabel: string
  level: string
  outcomeSummary: string
  rows: ProgramRow[]
  footnotes?: string[]
}

export const programs: Record<ProgramSlug, ProgramDetail> = {
  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    shortName: "Graphic Design",
    tagline: "Canva · Photoshop · Illustrator · print & brand",
    intro:
      "Tool-first tracks you can take one at a time or stack — each ends with portfolio-ready work: social packs, vector systems, print PDFs, and brand kits.",
    durationLabel: "Per track",
    level: "Beginner → Advanced",
    outcomeSummary: "Tool-specific portfolios + cross-tool campaign pieces",
    rows: [
      {
        name: "Canva for graphic design",
        focus: "Templates, brand kits in Canva, fast client-ready social and marketing assets",
        deliverables: "Full content pack for one brand (posts, stories, simple print)",
        tools: "Canva; export specs for web and print PDFs",
      },
      {
        name: "Adobe Photoshop",
        focus: "Compositing, photo retouch, web and ad graphics, mockups, raster workflows",
        deliverables: "Campaign-style image set + layered PSD/PDF handoff",
        tools: "Photoshop; linked smart objects where useful",
      },
      {
        name: "Adobe Illustrator",
        focus: "Logos, icons, vector illustration, typography as shapes, scalable brand marks",
        deliverables: "Logo suite + icon set or infographic in vector",
        tools: "Illustrator; SVG/PDF export",
      },
      {
        name: "Layout, posters & print",
        focus: "Flyers, posters, multi-page brochures, print marks, CMYK/RGB discipline",
        deliverables: "Print-ready PDF + digital companion sizes",
        tools: "InDesign with Photoshop/Illustrator placed art; or print flows from Canva where taught",
      },
      {
        name: "Brand & campaign systems",
        focus: "Color/type rules, templates across tools, simple guidelines doc for clients",
        deliverables: "Mini brand guidelines + matching assets in Canva and Adobe",
        tools: "Illustrator, Photoshop, InDesign, Canva — one coherent system",
      },
    ],
    footnotes: [
      "Adobe Creative Cloud where licensed (Photoshop, Illustrator, InDesign). Canva for speed and SMB-style delivery. Optional Figma module for UI-adjacent layouts.",
      "Optional visual foundations week for absolute beginners before tool tracks.",
    ],
  },
  editpro: {
    slug: "editpro",
    title: "EditPro",
    shortName: "EditPro",
    tagline: "Motion design & video editing",
    intro:
      "Short-form, commercial, and long-form editing on desktop NLEs — plus mobile video editing (CapCut, LumaFusion, phone-first workflows) and motion graphics for titles. Pair with SceneCraft when you need production-first skills.",
    durationLabel: "Per track",
    level: "Beginner → Advanced",
    outcomeSummary: "Cuts and motion pieces matched to platform and client style",
    rows: [
      {
        name: "Mobile video editing",
        focus:
          "End-to-end edit on phone or tablet — cut, transitions, captions, templates, sound from libraries, vertical 9:16 delivery, platform-safe loudness",
        deliverables: "Batch of phone-edited verticals + one slightly longer clip with titles/captions",
        tools: "CapCut (mobile), VN or InShot where taught; optional LumaFusion on iPad/iPhone; no desktop required for this track",
      },
      {
        name: "Short video editing",
        focus: "Reels, Shorts, TikTok — hooks, captions, vertical safe zones, batch pacing (desktop NLEs)",
        deliverables: "Series of short verticals with a consistent look",
        tools: "CapCut desktop or Premiere Pro; CapCut mobile cross-trains with Mobile video editing",
      },
      {
        name: "Commercial video editing",
        focus: "Ads, promos, sponsored spots, revision rounds, loudness and delivery specs",
        deliverables: "30–90s commercial or promo with alt lengths",
        tools: "Premiere Pro, DaVinci Resolve; After Effects for simple motion passes",
      },
      {
        name: "Long-form video editing",
        focus: "YouTube episodes, interviews, docs — structure, B-roll, chapters, retention pacing",
        deliverables: "8–20+ min master with graphics and clean mix",
        tools: "Premiere Pro, Final Cut Pro (Mac), DaVinci Resolve — pick a primary NLE per cohort",
      },
      {
        name: "DaVinci Resolve",
        focus: "Edit page workflow, Fairlight basics, color page for grade and matching",
        deliverables: "Resolved project with balanced grade and mastered export",
        tools: "DaVinci Resolve Studio or free; scopes and delivery presets",
      },
      {
        name: "Motion design for video",
        focus: "Lower thirds, titles, simple logo animation, MOGRT-style packages",
        deliverables: "Motion toolkit for one brand or channel",
        tools: "After Effects; Premiere Pro Essential Graphics where taught",
      },
    ],
    footnotes: [
      "Standardize one primary NLE per learner where possible; CapCut modules for mobile-first creators. Media Encoder or Resolve deliver page for export presets.",
    ],
  },
  lenslab: {
    slug: "lenslab",
    title: "LensLab",
    shortName: "LensLab",
    tagline: "Photography",
    intro:
      "Camera, light, composition, and stills post — on phone or desktop. Mobile photography (shooting on your phone) and mobile photo editing (Snapseed, Lightroom Mobile, Photoshop mobile) sit alongside DSLR/mirrorless and Lightroom Classic. Bridges to EditPro and SceneCraft.",
    durationLabel: "Per track",
    level: "Beginner → Advanced",
    outcomeSummary: "Curated stills portfolio + client-style briefs (desktop or mobile workflow)",
    rows: [
      {
        name: "Foundations",
        focus: "Exposure triangle, RAW, lenses, composition, Lightroom",
        deliverables: "Controlled exercise set + best 10 portfolio",
        tools: "Lightroom Classic, Camera Raw, Photoshop; DSLR/mirrorless or smartphone RAW",
      },
      {
        name: "Mobile photography",
        focus:
          "Shooting stills on a smartphone: native camera modes, exposure/focus lock, HDR and night basics, composition for small sensors, ProRAW/Pro mode where available, simple accessories (tripod, clip-on lens optional)",
        deliverables: "Themed phone-only photo series (e.g. street, portrait, product) + best-of portfolio",
        tools: "iPhone or Android; built-in Camera; optional Lightroom Mobile for quick RAW develop",
      },
      {
        name: "Mobile photo editing",
        focus:
          "Phone-first post: cull, selective edits, curves, healing, local adjustments, export for social — no desktop required",
        deliverables: "Before/after set + themed social grid or client-ready phone edits",
        tools:
          "Google Snapseed, Adobe Lightroom Mobile, Photoshop (mobile) for retouch and composites; optional VSCO or native camera RAW where devices allow",
      },
      {
        name: "Portrait & people",
        focus: "Natural/flash, posing, skin tones, environmental portrait",
        deliverables: "Small portrait series (studio or location)",
        tools: "Lightroom + Photoshop; off-camera flash or LED if available",
      },
      {
        name: "Product & commercial",
        focus: "Tabletop, lighting setups, catalog-style frames",
        deliverables: "Product set for a local brand or spec brief",
        tools: "Tripod, light tent or softboxes, Lightroom/Photoshop",
      },
      {
        name: "Events & lifestyle",
        focus: "Events, candids, storytelling sequences",
        deliverables: "Event or documentary-style mini essay",
        tools: "Fast cards + backup workflow; Lightroom culling",
      },
    ],
    footnotes: [
      "Hardware: school mirrorless/DSLR, lenses, tripods, reflectors, LED/flash as budget allows. State BYOD rules on Enroll.",
      "Mobile tracks: learners bring a smartphone with current camera app updates plus Snapseed / Lightroom Mobile / Photoshop mobile as needed; clarify storage, export quality, and OS version on Enroll.",
      "Crossover: Canva or Photoshop for social crops → Graphic Design.",
    ],
  },
  scenecraft: {
    slug: "scenecraft",
    title: "SceneCraft",
    shortName: "SceneCraft",
    tagline: "Videography (production)",
    intro:
      "From videography basics (composition and cinematography language) through mobile videography, lighting, audio, and full shoots. Image and sound in-camera; EditPro (including mobile video editing) completes the pipeline in post.",
    durationLabel: "Per track",
    level: "Beginner → Advanced",
    outcomeSummary: "Produced footage + small projects (spec / pilot ads)",
    rows: [
      {
        name: "Videography basics",
        focus:
          "Composition for motion: framing, rule of thirds, leading lines, headroom, depth. Cinematography vocabulary — shot sizes (WS/MS/CU), angles, axis & 180° rule, lens feel (wide vs tele), motivated camera movement",
        deliverables: "Shot breakdown + storyboard-style sequence plan + filmed vocabulary reel",
        tools: "Any camera or phone; shot list template; optional gimbal for movement exercises",
      },
      {
        name: "Production foundations",
        focus: "Camera settings for video, shot types, continuity, basic audio",
        deliverables: "Shot-matching exercise + short silent sequence",
        tools: "Mirrorless/DSLR, smartphone; DJI Osmo Pocket 3, DJI Mimo, shot list",
      },
      {
        name: "Mobile videography",
        focus:
          "Video shooting on a smartphone — resolution & frame rate, exposure lock, stabilization, filming vertical vs horizontal, basic movement, capturing clean audio (USB-C / wireless lav into phone), gimbal and handheld discipline",
        deliverables: "Phone-shot B-roll + talking-head or walk-and-talk package ready for mobile or desktop edit",
        tools: "iPhone or Android; native Camera, DJI Mimo, or Filmic-style app where taught; mini tripod or gimbal; phone mic or affordable lav",
      },
      {
        name: "Content creator production",
        focus: "Self-shooting, talking head, B-roll, mobile + mirrorless",
        deliverables: "Creator-style rushes ready for EditPro",
        tools: "Osmo Pocket 3 or phone + gimbal; Rode Wireless-style lav; LED key",
      },
      {
        name: "Commercial & corporate",
        focus: "Interviews, b-roll for business, simple lighting",
        deliverables: "Corporate spec spot footage + shot list",
        tools: "Two-camera interviews; tripod, monopod; three-point lighting",
      },
      {
        name: "Cinematic & storytelling",
        focus: "Scene coverage, mood, movement (gimbal/slider)",
        deliverables: "Short narrative or branded mini-film production",
        tools: "Gimbal, slider, ND filters for outdoor exposure",
      },
    ],
    footnotes: [
      "Publish hardware you actually have: Osmo Pocket 3, mics, LED, tripods, cards & readers.",
      "Software on set: DJI Mimo; optional Filmic-style camera app on phone; optional Blackmagic Camera on dedicated bodies; proxy workflow ties to Premiere/DaVinci.",
    ],
  },
  codecraft: {
    slug: "codecraft",
    title: "CodeCraft",
    shortName: "CodeCraft",
    tagline: "Software development",
    intro:
      "Distinct career paths — each ends with a mandatory portfolio: repos, live demos, or store-ready builds.",
    durationLabel: "Per path (typically 8–14+ weeks)",
    level: "Beginner → Advanced",
    outcomeSummary: "Path-specific portfolio + deployable projects",
    rows: [
      {
        name: "Frontend developer",
        focus: "Web UI, accessibility, performance",
        deliverables: "HTML/CSS/JS, React or Vue → production-style UIs",
        tools: "Cursor or VS Code, Git/GitHub, Chrome DevTools, npm/pnpm",
      },
      {
        name: "Backend developer",
        focus: "APIs, data, auth, server logic",
        deliverables: "Node or Python, REST/GraphQL, SQL/NoSQL → services + docs",
        tools: "Cursor/VS Code, Postman/Insomnia, Docker, PostgreSQL/MongoDB",
      },
      {
        name: "Full-stack developer",
        focus: "End-to-end product delivery",
        deliverables: "2–3 full apps with deployment",
        tools: "Vite/framework CLI; Vercel, Netlify, Railway, or Render",
      },
      {
        name: "Mobile developer",
        focus: "Cross-platform apps",
        deliverables: "Flutter or React Native → installable builds",
        tools: "Android Studio, VS Code/Cursor, emulators + Android device",
      },
      {
        name: "iOS developer",
        focus: "Native Apple platforms",
        deliverables: "Swift, SwiftUI → App Store–quality trajectory",
        tools: "Xcode, Simulator + iPhone, TestFlight (advanced)",
      },
      {
        name: "DevOps",
        focus: "Delivery, reliability, cloud",
        deliverables: "CI/CD, containers, cloud → pipelines + deployed infra",
        tools: "GitHub Actions/GitLab CI, Docker Compose, AWS/GCP/Azure, SSH",
      },
    ],
    footnotes: [
      "Clarify Cursor/VS Code student license vs free tier on Enroll.",
      "Bundles: Frontend + Backend → full-stack discount; Mobile + Backend for API-heavy apps.",
    ],
  },
}

export const codeLanguages = [
  { name: "HTML & CSS", paths: "Frontend, Full-stack" },
  { name: "JavaScript", paths: "Frontend, Full-stack; Backend (Node)" },
  { name: "TypeScript", paths: "Frontend / Full-stack (if taught)" },
  { name: "Python", paths: "Backend, Full-stack" },
  { name: "SQL", paths: "Backend, Full-stack" },
  { name: "Bash / shell", paths: "DevOps" },
  { name: "YAML", paths: "DevOps (CI, infra)" },
  { name: "Docker", paths: "DevOps, Backend" },
  { name: "Git", paths: "All paths" },
  { name: "Swift", paths: "iOS" },
  { name: "Kotlin", paths: "Android native (if added)" },
  { name: "Dart", paths: "Flutter (if emphasized)" },
] as const

export const creativeStack =
  "Photoshop · Illustrator · InDesign · Canva · Premiere Pro · Final Cut Pro · DaVinci Resolve · CapCut (desktop & mobile) · LumaFusion · Lightroom (Classic & mobile) · Snapseed · Photoshop mobile · DJI Mimo · phone camera apps"

export const subjectsToPrograms: { subject: string; program: string; href?: string }[] = [
  { subject: "AI & productivity", program: "Learn AI + AI Boost", href: "/courses#learn-ai" },
  { subject: "AI agents & agentic AI", program: "Learn AI", href: "/courses#learn-ai" },
  { subject: "Prompt engineering & LLMs", program: "Learn AI", href: "/courses#learn-ai" },
  { subject: "Generative AI (text, image, video)", program: "Learn AI", href: "/courses#learn-ai" },
  { subject: "AI coding assistants (Cursor, Claude Code)", program: "Learn AI + CodeCraft", href: "/courses#learn-ai" },
  { subject: "AI for creative production", program: "Learn AI", href: "/courses#learn-ai" },
  { subject: "Cloud & infrastructure", program: "CodeCraft (DevOps)", href: "/courses/codecraft" },
  { subject: "Computer / digital foundations", program: "Essential computer skills (add-on)" },
  { subject: "Content & social strategy", program: "Creator Lab", href: "/courses#extras" },
  { subject: "Cybersecurity", program: "Future track" },
  { subject: "Data (analytics / science / viz)", program: "Future / tools TBD" },
  { subject: "Design & brand", program: "Graphic Design", href: "/courses/graphic-design" },
  { subject: "Developer tools & workflows", program: "CodeCraft (all paths)", href: "/courses/codecraft" },
  { subject: "DevOps", program: "CodeCraft → DevOps", href: "/courses/codecraft" },
  { subject: "Freelancing & business", program: "Freelance Pro", href: "/courses#extras" },
  { subject: "Game development", program: "Future" },
  { subject: "Graphic & print design", program: "Graphic Design", href: "/courses/graphic-design" },
  { subject: "IT essentials", program: "Essential computer skills" },
  { subject: "Marketing & ads", program: "Digital marketing + Creator Lab", href: "/courses#extras" },
  { subject: "Mobile development", program: "CodeCraft → Mobile + iOS", href: "/courses/codecraft" },
  { subject: "Photography", program: "LensLab", href: "/courses/lenslab" },
  { subject: "Mobile photography", program: "LensLab (mobile track)", href: "/courses/lenslab" },
  { subject: "Mobile photo editing", program: "LensLab (mobile track)", href: "/courses/lenslab" },
  { subject: "Video editing", program: "EditPro", href: "/courses/editpro" },
  { subject: "Mobile video editing", program: "EditPro (mobile track)", href: "/courses/editpro" },
  {
    subject: "Videography basics (composition & cinematography)",
    program: "SceneCraft",
    href: "/courses/scenecraft",
  },
  { subject: "Mobile videography (shooting on phone)", program: "SceneCraft", href: "/courses/scenecraft" },
  { subject: "Videography & production", program: "SceneCraft", href: "/courses/scenecraft" },
  { subject: "Web design (visual + UI)", program: "Graphic Design + CodeCraft Frontend", href: "/courses/graphic-design" },
  { subject: "Web development", program: "CodeCraft", href: "/courses/codecraft" },
]

export const courseCatalogRows = [
  {
    area: "Graphic design",
    name: "Graphic Design",
    duration: "Per track",
    outcome: "Canva, Photoshop, Illustrator, print & brand portfolios",
    level: "Beginner → Advanced",
    href: "/courses/graphic-design" as const,
  },
  {
    area: "Motion & video editing",
    name: "EditPro",
    duration: "Per track",
    outcome: "Mobile + desktop edits — short, commercial, long-form, motion",
    level: "Beginner → Advanced",
    href: "/courses/editpro" as const,
  },
  {
    area: "Photography",
    name: "LensLab",
    duration: "Per track",
    outcome: "Stills portfolio — desktop or mobile edit (Snapseed, Lightroom Mobile, Photoshop)",
    level: "Beginner → Advanced",
    href: "/courses/lenslab" as const,
  },
  {
    area: "Videography",
    name: "SceneCraft",
    duration: "Per track",
    outcome: "Produced footage + small projects",
    level: "Beginner → Advanced",
    href: "/courses/scenecraft" as const,
  },
  {
    area: "Software development",
    name: "CodeCraft",
    duration: "Per path",
    outcome: "Path-specific portfolio + deployable projects",
    level: "Beginner → Advanced",
    href: "/courses/codecraft" as const,
  },
  {
    area: "AI & future skills",
    name: "Learn AI",
    duration: "Per module",
    outcome: "Fundamentals, workplace AI, dev agents, generative creative pipelines",
    level: "Beginner → Advanced",
    href: "/courses#learn-ai" as const,
  },
  {
    area: "Content creation",
    name: "Creator Lab",
    duration: "8 weeks",
    outcome: "Social content portfolio",
    level: "Beginner → Advanced",
    href: "/courses#extras" as const,
  },
  {
    area: "Freelancing",
    name: "Freelance Pro",
    duration: "4 weeks",
    outcome: "Profiles, proposals, first-client playbook",
    level: "Beginner → Advanced",
    href: "/courses#extras" as const,
  },
  {
    area: "AI tools",
    name: "AI Boost",
    duration: "4 weeks",
    outcome: "Automation & AI-assisted content",
    level: "Beginner → Advanced",
    href: "/courses#extras" as const,
  },
]

export const extraProgramTools = [
  {
    name: "Creator Lab",
    tools:
      "YouTube Studio, Meta Business Suite, TikTok/Instagram tools, Canva, Notion/Google Docs, CapCut or Premiere, GA4 or platform analytics.",
  },
  {
    name: "Freelance Pro",
    tools:
      "Upwork, Fiverr, LinkedIn, Google Docs/Slides, Trello/Notion/Sheets, PayPal & local payouts, optional FreshBooks/Wave.",
  },
  {
    name: "AI Boost",
    tools:
      "Complements Learn AI — automation sprints: Zapier/Make, Perplexity, Firefly/Canva Magic, Midjourney/Leonardo as licensed; pairs with CodeCraft for Cursor depth.",
  },
] as const

/** Anchor on `/courses#learn-ai` — same cards as home “Learn AI” tab. */
export const learnAiHref = "/courses#learn-ai" as const

export const learnAiIntro =
  "Modular AI literacy for The Gambia — stack fundamentals, workplace copilots, developer agents, and generative creative tools. Vendors change fast; we refresh labs as ChatGPT, Claude, Gemini, Cursor, and video models evolve."

export const learnAiTracks: {
  id: string
  title: string
  blurb: string
  tools: string
}[] = [
  {
    id: "fundamentals",
    title: "AI fundamentals",
    blurb:
      "Prompt engineering, how LLMs reason, generative AI patterns, safety and limits — plus AI agents and agentic workflows (chaining tools, planners, and guardrails).",
    tools: "Hands-on with major chat models; notebooks / no-code agent builders where taught",
  },
  {
    id: "profession",
    title: "AI for professionals",
    blurb:
      "ChatGPT, Claude (projects, workspace, Cowork-style collaboration), Google Gemini — docs, email, research, slides — plus AI video generation (e.g. Veo-class, Kling-class tools) for marketing and social.",
    tools: "ChatGPT, Claude, Gemini; AI video tools as licensed (Veo 3, Kling, etc.)",
  },
  {
    id: "developers",
    title: "AI for developers",
    blurb:
      "Ship faster with Cursor, Claude Code, and Copilot-class assistants — prompting for refactors, tests, reviews, and terminal workflows without outsourcing your judgment.",
    tools: "Cursor, Claude Code, Git + GitHub, repos you control",
  },
  {
    id: "creatives",
    title: "AI for creatives",
    blurb:
      "Generative image and video for pitches and campaigns — Nano Banana, Veo 3, Kling, and similar suites from storyboard → draft asset (always with brand and rights awareness).",
    tools: "Nano Banana, Google Veo 3, Kling; optional Firefly / Midjourney-class as licensed",
  },
]

export const pricingBands = [
  "Shorter / basic modules: roughly GMD 3,000–8,000",
  "Deeper / advanced tracks: roughly GMD 10,000–25,000",
  "Optional monthly access: GMD 1,000+ if offered",
  "Payment plans and student discounts — see Enroll",
] as const

export const addOns = [
  "Digital marketing — Meta Ads Manager, Google Ads intro, GA, Canva, Mailchimp or similar",
  "Essential computer skills — onboarding into Graphic Design, LensLab, Creator Lab, CodeCraft foundations",
  "Bundles: Digital Pro Pack (Graphic Design + EditPro), Creator Studio Pack (SceneCraft + EditPro + Creator Lab), Tech Master Pack (CodeCraft + Learn AI)",
  "Corporate training — train your team",
] as const

export type TopProgramTabId = "design" | "video" | "photo" | "software" | "ai" | "creator"

export const topProgramTabs: {
  id: TopProgramTabId
  label: string
  items: { title: string; blurb: string; href: string; badge?: string; thumbnailSrc?: string }[]
}[] = [
  {
    id: "design",
    label: "Graphic design",
    items: [
      {
        title: "Canva for graphic design",
        blurb: "Brand kits, templates, and fast social or print-ready packs for real clients.",
        href: "/courses/graphic-design",
        badge: "Popular",
      },
      {
        title: "Adobe Photoshop",
        blurb: "Compositing, retouch, ads, mockups, and raster workflows with portfolio-ready exports.",
        href: "/courses/graphic-design",
      },
      {
        title: "Adobe Illustrator",
        blurb: "Logos, icons, vector illustration, and scalable marks for brand work.",
        href: "/courses/graphic-design",
      },
      {
        title: "Print & layout",
        blurb: "Posters, flyers, and multi-page pieces — InDesign and print-safe PDFs.",
        href: "/courses/graphic-design",
      },
      {
        title: "Brand & campaigns",
        blurb: "Guidelines and assets across Canva + Adobe so everything stays on-brand.",
        href: "/courses/graphic-design",
      },
    ],
  },
  {
    id: "video",
    label: "Motion & video",
    items: [
      {
        title: "Mobile video editing",
        blurb: "CapCut, VN, LumaFusion on phone or tablet — vertical cuts, captions, templates, no desktop required.",
        href: "/courses/editpro",
        badge: "Popular",
      },
      {
        title: "Short video editing",
        blurb: "CapCut and Premiere — reels, Shorts, hooks, captions, and vertical delivery.",
        href: "/courses/editpro",
      },
      {
        title: "Commercial video editing",
        blurb: "Premiere Pro and DaVinci Resolve — ads, promos, revisions, and delivery specs.",
        href: "/courses/editpro",
      },
      {
        title: "Long-form editing",
        blurb: "Premiere, Final Cut Pro, and Resolve — YouTube, interviews, and doc-style pacing.",
        href: "/courses/editpro",
      },
      {
        title: "DaVinci Resolve",
        blurb: "Edit, Fairlight, and color — grades, scopes, and mastered exports in one NLE.",
        href: "/courses/editpro",
      },
      {
        title: "Motion design for video",
        blurb: "After Effects and Essential Graphics — titles, lower thirds, and simple motion packages.",
        href: "/courses/editpro",
      },
      {
        title: "SceneCraft",
        blurb: "Shoot, light, and capture audio on set — pairs with EditPro in post.",
        href: "/courses/scenecraft",
      },
    ],
  },
  {
    id: "photo",
    label: "Photo & film",
    items: [
      {
        title: "Photography foundations",
        blurb: "Exposure, RAW, lenses, composition, Lightroom — exercise set plus a tight portfolio edit.",
        href: "/courses/lenslab",
        badge: "Popular",
      },
      {
        title: "Mobile photography",
        blurb: "Shoot great stills on your phone — camera modes, exposure lock, HDR, composition, ProRAW/Pro mode where available.",
        href: "/courses/lenslab",
      },
      {
        title: "Mobile photo editing",
        blurb: "Snapseed, Lightroom Mobile, and Photoshop on your phone — healing, curves, and social-ready export.",
        href: "/courses/lenslab",
      },
      {
        title: "Portrait & people",
        blurb: "Natural and flash, posing, skin tones, environmental portraits — small coherent series.",
        href: "/courses/lenslab",
      },
      {
        title: "Product & commercial stills",
        blurb: "Tabletop lighting, catalog-style frames, spec or local-brand product sets.",
        href: "/courses/lenslab",
      },
      {
        title: "Events & lifestyle",
        blurb: "Candids, events, and storytelling sequences — fast cards, culling, and a mini essay.",
        href: "/courses/lenslab",
      },
      {
        title: "Videography basics",
        blurb:
          "Composition for video, shot sizes, angles, axis and 180° rule, lens choice, and cinematography language — before you roll on bigger projects.",
        href: "/courses/scenecraft",
      },
      {
        title: "Mobile videography",
        blurb: "Record video on your phone — fps & resolution, stabilization, vertical vs horizontal, gimbal, and clean audio into the device.",
        href: "/courses/scenecraft",
      },
      {
        title: "Videography on set (SceneCraft)",
        blurb: "Shoot, light, and record sound for video — rushes ready for EditPro in post.",
        href: "/courses/scenecraft",
      },
    ],
  },
  {
    id: "software",
    label: "Software development",
    items: [
      {
        title: "Frontend developer",
        blurb: "Web UI, accessibility, and performance — HTML/CSS/JS, React or Vue, Git, and production-style interfaces.",
        href: "/courses/codecraft",
        badge: "Popular",
      },
      {
        title: "Backend developer",
        blurb: "APIs, data, auth, and server logic — Node or Python, REST/GraphQL, SQL/NoSQL, Docker.",
        href: "/courses/codecraft",
      },
      {
        title: "Full-stack developer",
        blurb: "End-to-end apps — 2–3 deployable projects with Vite or framework CLI and real hosting.",
        href: "/courses/codecraft",
      },
      {
        title: "Mobile developer",
        blurb: "Cross-platform apps — Flutter or React Native to installable builds, Android Studio, devices.",
        href: "/courses/codecraft",
      },
      {
        title: "iOS developer",
        blurb: "Native Apple apps — Swift, SwiftUI, Xcode, Simulator, trajectory toward App Store quality.",
        href: "/courses/codecraft",
      },
      {
        title: "DevOps",
        blurb: "Delivery and reliability — CI/CD, Docker Compose, cloud (AWS/GCP/Azure), SSH, pipelines.",
        href: "/courses/codecraft",
      },
    ],
  },
  {
    id: "ai",
    label: "Learn AI",
    items: [
      {
        title: "AI fundamentals",
        blurb:
          "Prompt engineering, LLMs, generative AI, and agentic AI — agents, tool use, and safe workflows before you specialize.",
        href: learnAiHref,
        badge: "Popular",
      },
      {
        title: "AI for professionals",
        blurb:
          "ChatGPT, Claude (projects & Cowork-style teamwork), Gemini for work — plus AI video generation for campaigns and social.",
        href: learnAiHref,
      },
      {
        title: "AI for developers",
        blurb: "Cursor, Claude Code, and coding agents — refactors, tests, and shipping from your repo.",
        href: learnAiHref,
      },
      {
        title: "AI for creatives",
        blurb: "Nano Banana, Veo 3, Kling, and generative image/video pipelines for concepts → assets.",
        href: learnAiHref,
      },
    ],
  },
  {
    id: "creator",
    label: "Creator & career",
    items: [
      {
        title: "Creator Lab",
        blurb: "Platforms, calendars, and content strategy that pairs with design and video.",
        href: "/courses#extras",
      },
      {
        title: "Freelance Pro",
        blurb: "Upwork, Fiverr, proposals, and your first-client playbook.",
        href: "/courses#extras",
      },
      {
        title: "AI Boost",
        blurb: "Automation and AI-assisted workflows — pairs with Learn AI for depth.",
        href: "/courses#extras",
      },
    ],
  },
]

export const whyPillars = [
  {
    title: "Project-based curriculum",
    body: "Real assignments and a mandatory portfolio — not slides-only.",
  },
  {
    title: "Career & income paths",
    body: "Freelancing (Upwork, Fiverr), employable skills, optional placement as partnerships grow.",
  },
  {
    title: "Modern tools",
    body: "Adobe, DaVinci, Premiere, CapCut (phone + desktop), LumaFusion, Lightroom (desktop + mobile), Snapseed, Photoshop mobile, phone videography, DJI Osmo Pocket 3, Cursor, Claude Code, ChatGPT / Claude / Gemini, Learn AI modules, Git, cloud — what employers expect.",
  },
  {
    title: "Human scale",
    body: "Small cohorts where possible with instructor access.",
  },
  {
    title: "Reliable environment",
    body: "Strong internet and backup power — we respect your time.",
  },
] as const

export const footerColumns: {
  title: string
  links: { label: string; href: string }[]
}[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Why Intellix", href: "/why-intellix" },
      { label: "Contact", href: "/contact" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Student projects", href: "/portfolio" },
      { label: "Free intro", href: "/enroll" },
      { label: "All courses", href: "/courses" },
    ],
  },
  {
    title: "Plans",
    links: [
      { label: "Enroll", href: "/enroll" },
      { label: "For students", href: "/enroll" },
      { label: "Corporate training", href: "/contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Graphic Design", href: "/courses/graphic-design" },
      { label: "EditPro", href: "/courses/editpro" },
      { label: "LensLab", href: "/courses/lenslab" },
      { label: "SceneCraft", href: "/courses/scenecraft" },
      { label: "CodeCraft", href: "/courses/codecraft" },
      { label: "Learn AI", href: "/courses#learn-ai" },
    ],
  },
  {
    title: "Career",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Freelance Pro", href: "/courses#extras" },
      { label: "Enroll", href: "/enroll" },
    ],
  },
]

export const enrollProgramOptions = [
  { value: "", label: "Select a program" },
  { value: "graphic-design", label: "Graphic Design (Canva, Photoshop, Illustrator…)" },
  { value: "editpro", label: "EditPro (Motion & video — mobile + desktop)" },
  { value: "lenslab", label: "LensLab (Photo — mobile shoot & edit + DSLR)" },
  { value: "scenecraft", label: "SceneCraft (Videography — mobile + pro cameras)" },
  { value: "codecraft", label: "CodeCraft (Software development)" },
  { value: "learn-ai", label: "Learn AI (fundamentals, pro, dev, creative)" },
  { value: "creator-lab", label: "Creator Lab" },
  { value: "freelance-pro", label: "Freelance Pro" },
  { value: "ai-boost", label: "AI Boost" },
  { value: "digital-marketing", label: "Digital marketing (add-on)" },
  { value: "essential-skills", label: "Essential computer skills" },
  { value: "bundle", label: "Bundle / not sure — advise me" },
] as const
