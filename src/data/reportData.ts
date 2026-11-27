export interface CoverTile {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  objectPosition: string;
  spanClass: string;
  targetId: string;
}

export interface TocItem {
  kicker: string;
  title: string;
  description: string;
  targetId: string;
  pageNumber: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface FitCard {
  audience: string;
  need: string;
  solution: string;
}

export interface FieldSolution {
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition: string;
}

export interface PartnerPrinciple {
  title: string;
  description: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  objectPosition: string;
}

export const ASSETS = {
  logo: '/assets/aistudio/isotype__1__847edd7a.png',
  ceoPortrait: '/assets/aistudio/CACS_CEO_Portrait_18130bbc.jpg',
  builderVertical: '/assets/aistudio/commerce_advisors_20261125_202537_0000_3fa7ba1e.png',
  advisorsField: '/assets/aistudio/cacs.pro__2__7c554b6d.png',
  marathonLondon: '/assets/aistudio/cacs.pro_b661e4db.png',
  engineersTablet: '/assets/aistudio/pexels-mikael-blomkvist-8961157_74818da0.jpg',
  tennisServe: '/assets/aistudio/Screenshot_20261125_170431_Drive_d112010c.jpg',
  bellhopHospitality: '/assets/aistudio/Screenshot_20261125_155858_Drive_7b060970.jpg',
  eduLibrary: '/assets/aistudio/edu1_d3bffe23.jpg',
  lectureHall: '/assets/aistudio/pexels-yankrukov-8199159_6e16b8b5.jpg',
  supplyWarehouse: '/assets/aistudio/sc1_16728edd.jpg',
  datesLineNew: '/assets/aistudio/sc4_9d0850ec.jpg',
  omniCounter: '/assets/aistudio/Omni2_855557ac.jpg',
  stadiumVideo: '/assets/aistudio/17099310_3840_2160_25fps_0e6f1f1e.mp4',
  remoteMeetingVideo: '/assets/aistudio/leadership1_d1260892.mp4',
  strategyCallVideo: '/assets/aistudio/leadership3_98035148.mp4',
  culinaryVideo: '/assets/aistudio/culinary9_5fcf354d.mp4',
  csrTeamVideo: '/assets/aistudio/csr1_ee0bf8a9.mp4',
  csrTeamPoster: '/assets/aistudio/csr1_poster.jpg',
  sportsCyclingVideo: '/assets/aistudio/sports4_2581b9ef.mp4',
  residencyVideo: '/assets/aistudio/residency_0d72c347.mp4',
  residencyShipVideo: '/assets/aistudio/residency.1_366da5bd.mp4',
  ceoSignature: '/assets/aistudio/Screenshot_2026-11-26_13.46.24_88ad228a.png',
  cruiseShip: '/assets/aistudio/Screenshot_20261125_155646_Drive_bd238d86.jpg',
  coastalResort: '/assets/aistudio/Screenshot_20261125_170327_Drive_b606a583.jpg',
  datesProduction: '/assets/aistudio/Screenshot_20261125_170402_Drive_ac0fd60b.jpg',
  stadium: '/assets/aistudio/Screenshot_20261125_155947_Drive_f95669d9.jpg',
  rebarSite: '/assets/aistudio/c6__1__5a910b5b.jpg',
  studentsCampus: '/assets/aistudio/edu4_2f7da5fb.jpg',
  pharmaPacks: '/assets/aistudio/pharma7__1__e5457799.jpg',
  architectBlueprint: '/assets/aistudio/c2_e31a88bf.jpg',
  builtAroundYouPhoto: '/assets/aistudio/pexels-amandaazanata-39231285_2e7dcc7c.jpg',
  smartCollectivePhoto: '/assets/aistudio/pexels-silverkblack-36729904_742fec7b.jpg',
} as const;

export const COVER_TILES: CoverTile[] = [
  {
    id: 'advisors',
    title: 'Independent Advisory',
    category: 'Purposefully Executed',
    image: ASSETS.tennisServe,
    alt: 'Aerial view of a tennis player serving with precision on a green and blue court',
    objectPosition: 'object-center',
    spanClass: 'col-span-6 sm:col-span-2 row-span-2',
    targetId: 'partner',
  },
  {
    id: 'construction',
    title: 'Construction Management',
    category: 'Planning to Delivery',
    image: ASSETS.builderVertical,
    alt: 'Construction professional in hard hat and safety vest pointing upward over blueprints',
    objectPosition: 'object-top',
    spanClass: 'col-span-6 sm:col-span-2 row-span-3',
    targetId: 'solutions',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    category: 'Elevated Experiences',
    image: ASSETS.bellhopHospitality,
    alt: 'Hotel bellhop in red uniform welcoming guests beside a decorated holiday tree',
    objectPosition: 'object-[center_20%]',
    spanClass: 'col-span-6 sm:col-span-2 row-span-2',
    targetId: 'solutions',
  },
  {
    id: 'global-events',
    title: 'Global Presence & Sports',
    category: 'International Reach',
    image: ASSETS.marathonLondon,
    alt: 'Runners participating in an international city marathon near Westminster',
    objectPosition: 'object-center',
    spanClass: 'col-span-6 sm:col-span-2 row-span-2',
    targetId: 'presence',
  },
  {
    id: 'omni-channel',
    title: 'Omni-Channel and Blueprint',
    category: 'Digital Transformation',
    image: ASSETS.omniCounter,
    alt: 'Business owner and customer reviewing an interactive tablet point-of-sale system',
    objectPosition: 'object-[center_25%]',
    spanClass: 'col-span-6 sm:col-span-2 row-span-1',
    targetId: 'solutions',
  },
  {
    id: 'travel',
    title: 'Global Travel',
    category: 'Curated Gateways',
    image: ASSETS.cruiseShip,
    alt: 'Aerial view of a cruise ship sailing across deep blue open water',
    objectPosition: 'object-center',
    spanClass: 'col-span-6 sm:col-span-2 row-span-1',
    targetId: 'solutions',
  },
  {
    id: 'supply-chain',
    title: 'Strategic Lead Architecture',
    category: 'Production to Market',
    image: ASSETS.datesLineNew,
    alt: 'Quality supervisor overseeing packed fresh Medjool dates on a production line',
    objectPosition: 'object-center',
    spanClass: 'col-span-6 sm:col-span-2 row-span-1',
    targetId: 'solutions',
  },
];

export const TOC_ITEMS: TocItem[] = [
  { kicker: 'Overview', title: 'Executive summary', description: 'Three pillars and credentials', targetId: 'summary', pageNumber: '02' },
  { kicker: 'Leadership', title: 'Executive direction', description: 'Carlos Castro, CEO and Founder', targetId: 'founder', pageNumber: '03' },
  { kicker: 'Offer', title: 'Twelve global solutions', description: 'Interdisciplinary business challenges, global solutions', targetId: 'solutions', pageNumber: '04' },
  { kicker: 'Partner', title: 'Connect with CACS', description: 'For individuals and businesses', targetId: 'partner', pageNumber: '05' },
  { kicker: 'Presence', title: 'Our presence', description: 'Connected commerce, global solutions', targetId: 'presence', pageNumber: '06' },
  { kicker: 'Purpose', title: 'Community development', description: 'Our 3 Cs and three pillars', targetId: 'impact', pageNumber: '06' },
  { kicker: 'In development', title: 'Partnerships & research', description: 'Aqu.ai and cucurbit research', targetId: 'research', pageNumber: '07' },
  { kicker: 'Strategy & Gratitude', title: 'Three strategies & thanks', description: 'AI code, social channels, SHARKGON', targetId: 'strategies', pageNumber: '08' },
];

export const EXECUTIVE_KPIS = [
  { label: 'Operating since', value: 'May 2026', detail: 'Commerce Advisors Consulting Solutions.', accent: false },
  { label: 'Global solutions', value: '12', detail: 'Delivered by multilingual teams of independent contractors, organizations and businesses.', accent: true },
  { label: 'Engagement model', value: 'External', detail: 'Independent consulting — we join your project as an outside advisor.', accent: false },
  { label: 'Working languages', value: 'English - Español', detail: 'Bilingual and cross-cultural from the first consult.', accent: false },
];

export const EXECUTIVE_PILLARS: PillarItem[] = [
  {
    title: 'Community Driven',
    description: 'Progress is collective. Strategies built on shared goals and localized impact, so every outcome resonates in the smart collectives it serves.',
  },
  {
    title: 'Culturally Rooted',
    description: 'Intelligence is incomplete without context. We read global markets through cultural nuance and turn diversity into competitive advantage.',
  },
  {
    title: 'Purposefully Executed',
    description: 'Intentional from day one, delivered with discipline. A clear blueprint aligns strategy, timing and resources.',
  },
];

export const HOW_WE_WORK = [
  'Multilingual independent contractors, organizations & business teams',
  'Cross-cultural expertise',
  'End-to-end, strategy to execution',
  'Measurable results, success tracking',
  'Digital-first and remote',
];

export const CREDENTIALS = [
  'IBM',
  'New York University',
  'University for Peace',
  'Universidad Jesús de Nazareth',
  'U.S. Dept. of State',
  'Honduran Government',
  'McKinsey & Co.',
  'LVMH',
  'Olympics',
  'Skanska',
  'AECOM Global Programs',
  'STV Group',
  'Vertex',
  'Crossroad Advisory',
  'Construction Law Partners, Dentons',
  'Pär Åhlström',
];

export const FOUNDER_PROFILE = {
  name: 'Carlos Castro',
  role: 'CEO & Founder',
  subtitle: 'Business broker and strategic advisor across markets. He connects you with the right partner for high-advancement business success and positioning.',
  summary:
    'Entrepreneur and project manager with a record of success in education, non-profit management, digital marketing and strategic business development.',
  yearsLabel: '10+',
  yearsCaption: 'Years building cross-sector partnerships.',
  competencies: [
    'AI consulting and research',
    'Sports advisory',
    'Construction management',
    'Global program management',
    'Strategic partnerships',
    'Digital marketing',
    'International education',
    'Non-profit management',
    'Bilingual interpretation',
    'Public relations and media',
    'Cultural diplomacy',
    'Travel advisory',
    'Design thinking',
    'Creative direction',
    'Talent acquisition',
    'Expertise advisory across North, Latin American and the Caribbean markets',
  ],
};

export const TWELVE_SOLUTIONS = [
  'Omni-Channel and Blueprint',
  'Social Enterprise',
  'Strategic Lead Architecture',
  'International Education',
  'Culinary and Business Design',
  'Sports Management',
  'Travel',
  'Leadership',
  'e-Residency',
  'Bilingual Interpretation',
  'Construction Management',
  'AI Advisory',
];

export const FIND_YOUR_FIT: FitCard[] = [
  {
    audience: 'A non-profit',
    need: 'Building a bilingual program for a tribe in the Amazon, with multilateral continuity in investigation and mitigation.',
    solution: 'Social Enterprise',
  },
  {
    audience: 'A small business owner',
    need: 'Looking for digital transformation and paths to optimize the business.',
    solution: 'Omni-Channel and Blueprint',
  },
  {
    audience: 'A contractor or supplier',
    need: 'Seeking high-value projects in construction, supply chain or pharmaceuticals.',
    solution: 'Strategic Lead Architecture',
  },
  {
    audience: 'A student',
    need: 'Aiming for prestigious programs, scholarships and training abroad.',
    solution: 'International Education',
  },
  {
    audience: 'A chef or restaurateur',
    need: 'With a concept that needs menu, kitchen flow and a profitable model.',
    solution: 'Culinary and Business Design',
  },
  {
    audience: 'A team or athlete',
    need: 'Who wants stronger contracts, events and sponsorships.',
    solution: 'Sports Management',
  },
];

export const FIELD_SOLUTIONS: FieldSolution[] = [
  {
    title: 'Omni-Channel and Blueprint',
    description: 'Digital transformation and retail point-of-sale blueprints for small businesses.',
    image: ASSETS.omniCounter,
    alt: 'Business owner and customer using a digital tablet point-of-sale',
    objectPosition: 'object-[center_25%]',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Luxury gateways, coastal retreats and elevated guest experiences.',
    image: ASSETS.coastalResort,
    alt: 'Aerial view of a seaside resort and turquoise bay',
    objectPosition: 'object-center',
  },
  {
    title: 'Construction Management',
    description: 'From architectural planning and rebar execution to disciplined project delivery.',
    image: ASSETS.rebarSite,
    alt: 'Construction workers on a rebar foundation site',
    objectPosition: 'object-center',
  },
  {
    title: 'Pharmaceutical Projects',
    description: 'Dedicated lead architecture for regulated pharmaceutical sector programs.',
    image: ASSETS.pharmaPacks,
    alt: 'Pharmaceutical blister packs arranged in clean rows',
    objectPosition: 'object-center',
  },
];

export const PARTNER_PRINCIPLES: PartnerPrinciple[] = [
  {
    title: 'Independent and external',
    description: 'An outside view on your project, scoped cleanly to the solution you choose.',
    type: 'video',
    src: ASSETS.strategyCallVideo,
    poster: ASSETS.architectBlueprint,
    alt: 'Independent strategy advisor presenting business plans over a remote call',
    objectPosition: 'object-center',
  },
  {
    title: 'Remote-first',
    description: 'Digital-first meetings and multilingual coordination wherever you are.',
    type: 'video',
    src: ASSETS.remoteMeetingVideo,
    poster: ASSETS.eduLibrary,
    alt: 'Consultant speaking remotely over a laptop video conference at a meeting table',
    objectPosition: 'object-center',
  },
  {
    title: 'Built around you',
    description: 'Practical blueprints tailored for real businesses, teams and institutions.',
    type: 'image',
    src: ASSETS.builtAroundYouPhoto,
    alt: 'Candid moment of warm connection and joyful conversation among people',
    objectPosition: 'object-[center_22%]',
  },
];

export const PARTNER_STEPS = [
  { step: '01', title: 'Consult', detail: 'With an accredited advisor' },
  { step: '02', title: 'Match', detail: 'Pick the best-fit solution' },
  { step: '03', title: 'Blueprint', detail: 'Strategy, timing, resources' },
  { step: '04', title: 'Execution', detail: 'Delivered with discipline' },
  { step: '05', title: 'Results', detail: 'Success tracking' },
];

export const SUSTAINABILITY_PILLARS: PillarItem[] = [
  { title: 'Community driven', description: 'Shared goals and localized impact across rural, educational and civic ecosystems.' },
  { title: 'Culturally rooted', description: 'Global markets read through cultural nuance, bilingual access and regional context.' },
  { title: 'Purposefully executed', description: 'A clear blueprint and consistent excellence measured in durable community benefit.' },
];

export const SOCIAL_IMPACT_AREAS = [
  'Social Enterprise',
  'Water, energy & sanitation stewardship',
  'HIV research and quality education',
  'Scholarships and admissions',
  'Bilingual access',
  'Leadership mentoring',
  'Cultural diplomacy',
];

export const BUILT_TO_LAST = [
  'Digital-first and remote operations',
  'Saves water and energy via gravity hydraulics',
  'Improves sanitation with natural bio-filtration',
  'Technology as an accelerator, people first',
];

export const AQUAI_DATA = {
  metrics: [
    { label: 'Growing units', value: '6,000', detail: '60 × 50 buckets on each of two levels' },
    { label: 'Local AI model', value: '<4B', detail: 'Parameters, running offline on the farm' },
    { label: 'Target regions', value: '2', detail: 'New Mexico and Louisiana' },
    { label: 'Connectivity needed', value: 'None', detail: 'No broadband, no cloud subscription' },
  ],
  subsystems: [
    {
      index: 'Subsystem 1',
      title: 'Two-level gravity hydraulic array',
      detail: 'Captures percolating soil and mineral leachate between levels and tests flow rates and root-zone hydration.',
    },
    {
      index: 'Subsystem 2',
      title: 'Off-grid green infrastructure',
      detail: 'Solar-DC micro-pumping with bio-char, sand and gravel filtration, built from low-embodied-energy parts.',
    },
    {
      index: 'Subsystem 3',
      title: 'Offline-first edge AI co-pilot',
      detail: 'Turns water and soil telemetry into plain-language decisions that the farmer controls.',
    },
  ],
  regions: [
    {
      name: 'New Mexico',
      detail: 'Megadroughts, depleted aquifers and Acequia water-sharing limits make closed-loop reuse and nutrient retention essential.',
    },
    {
      name: 'Louisiana',
      detail: 'Intense rain, nutrient leaching and runoff make on-site water capture, mineral retention and natural filtration vital.',
    },
  ],
  publicBenefit: [
    'Protects water resources',
    'Circular water tools for rural farms and watershed communities',
    'Open blueprints',
    'Grower-owned data',
    'Right-sized local compute',
  ],
};

export const CUCURBIT_TRIAL = [
  { trait: 'Rind', outcome: 'Orange → green with a sharply bounded yellow ground spot' },
  { trait: 'Shape', outcome: 'Flattened, wider than tall → round to slightly tall' },
  { trait: 'Ribbing', outcome: 'Deep, defined ribs → faint ribbing' },
  { trait: 'Stem', outcome: 'Thick, ridged, retained → cut flush, round corky scar' },
];
