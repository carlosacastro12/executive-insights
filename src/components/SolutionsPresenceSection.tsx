import {
  AQUAI_DATA,
  ASSETS,
  BUILT_TO_LAST,
  CUCURBIT_TRIAL,
  FIELD_SOLUTIONS,
  FIND_YOUR_FIT,
  PARTNER_PRINCIPLES,
  PARTNER_STEPS,
  SOCIAL_IMPACT_AREAS,
  SUSTAINABILITY_PILLARS,
  TWELVE_SOLUTIONS,
} from '../data/reportData';

function getSolutionSvgLines(label: string): string[] {
  const customMap: Record<string, string[]> = {
    'Omni-Channel and Blueprint': ['Omni-Channel', 'and', 'Blueprint'],
    'Strategic Lead Architecture': ['Strategic Lead', 'Architecture'],
    'International Education': ['International', 'Education'],
    'Culinary and Business Design': ['Culinary &', 'Business', 'Design'],
    'Bilingual Interpretation': ['Bilingual', 'Interpretation'],
    'Construction Management': ['Construction', 'Management'],
    'Social Enterprise': ['Social', 'Enterprise'],
    'Sports Management': ['Sports', 'Management'],
  };
  if (customMap[label]) return customMap[label];
  const words = label.split(' ');
  if (words.length <= 1) return [label];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function SolutionsPresenceSection() {
  const radius = 160;
  const center = 210;

  return (
    <>
      {/* PAGE 4: TWELVE GLOBAL SOLUTIONS & FIND YOUR FIT */}
      <section
        id="solutions"
        aria-label="Twelve Global Solutions"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-4 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-2 border-b border-[#E5ECEF]">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Twelve Global Solutions
          </span>
          <span className="font-mono text-[11px] text-[#647984] tabular-nums">
            Page 04 / 08
          </span>
        </div>

        <div className="mt-5 print:mt-2">
          <h2 className="text-2xl sm:text-3xl print:text-xl font-semibold tracking-tight text-[#0D1E27] text-balance">
            Interdisciplinary business challenges, global solutions
          </h2>
          <p className="mt-2 print:mt-0.5 text-sm print:text-[11px] text-[#4E626D] max-w-2xl leading-relaxed print:leading-snug">
            Each solution is its own market offer. You choose the one that fits your business issue, and CACS delivers it as an independent, external consultant.
          </p>
        </div>

        {/* Standalone Enlarged Hub-and-Spoke Vector Diagram + Balanced Media Stack */}
        <div className="mt-5 print:mt-2 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-5 print:gap-3 items-center">
          <div className="md:col-span-7 print:col-span-7 flex items-center justify-center">
            <svg viewBox="0 0 420 420" className="w-full max-w-[420px] print:max-w-[290px] h-auto" role="img" aria-label="Independent Contractor External Consulting 12 Global Solutions Diagram">
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#DCE6EB" strokeDasharray="3 4" />
              {TWELVE_SOLUTIONS.map((sol, idx) => {
                const angle = ((idx * 30 - 90) * Math.PI) / 180;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                const lines = getSolutionSvgLines(sol);
                const startY = y - ((lines.length - 1) * 9.5) / 2 + 2.8;

                return (
                  <g key={sol}>
                    <line
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="#CBD8DF"
                      strokeWidth={1.2}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={39}
                      fill="#E7F2F5"
                      stroke="#B9D7E0"
                      strokeWidth={1.1}
                    />
                    {lines.map((line, lIdx) => (
                      <text
                        key={line}
                        x={x}
                        y={startY + lIdx * 9.5}
                        textAnchor="middle"
                        fill="#0D1E27"
                        fontSize="8.2"
                        fontWeight="600"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}
              <circle cx={center} cy={center} r={56} fill="#2B8A9E" />
              <text x={center} y={center - 11} textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                Independent
              </text>
              <text x={center} y={center + 4} textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                Contractor
              </text>
              <text x={center} y={center + 20} textAnchor="middle" fill="#E7F2F5" fontSize="8.2" fontWeight="500">
                External Consulting
              </text>
            </svg>
          </div>

          <div className="md:col-span-5 print:col-span-5 flex flex-col gap-3 print:gap-2 self-stretch">
            {/* Sports Management Video Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#0D1E27] h-[182px] print:h-[142px]">
              <video
                src={ASSETS.stadiumVideo}
                poster={ASSETS.stadium}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Floodlit stadium football match highlight for CACS Sports Management"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1E27]/85 via-[#0D1E27]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 print:p-2.5">
                <p className="text-base print:text-sm font-semibold text-white">Sports Management</p>
                <p className="mt-0.5 text-xs print:text-[10px] text-white/85">
                  Athletic talent, premier events and sponsorship.
                </p>
              </div>
            </div>

            {/* Culinary Video + Global Events side by side */}
            <div className="grid grid-cols-2 gap-3 print:gap-2 flex-1 min-h-[218px] print:min-h-[138px] print:h-[138px]">
              <div className="relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#0D1E27]">
                <video
                  src={ASSETS.culinaryVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Chef finishing a plated dish for CACS Culinary and Business Design"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1E27]/85 via-[#0D1E27]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 print:p-2">
                  <p className="text-sm print:text-xs font-semibold text-white">Culinary Design</p>
                  <p className="mt-0.5 text-[11px] print:text-[9.5px] text-white/85">
                    Menus &amp; profitable models.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#F3F8FA]">
                <img
                  src={ASSETS.marathonLondon}
                  alt="International marathon runners advancing toward Westminster"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E27]/85 via-[#0D1E27]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 print:p-2">
                  <p className="text-sm print:text-xs font-semibold text-white">Global Events</p>
                  <p className="mt-0.5 text-[11px] print:text-[9.5px] text-white/85">
                    Cross-border programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Your Fit Static Bento Grid */}
        <div className="mt-5 print:mt-2.5">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Find your fit · The right solution for each business issue
          </p>
          <div className="mt-2.5 print:mt-1.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-2.5 print:gap-2">
            {FIND_YOUR_FIT.map((card) => (
              <div
                key={card.audience}
                className="rounded-2xl border border-[#E5ECEF] bg-[#F3F8FA] p-3.5 print:p-2 flex flex-col justify-between"
              >
                <div>
                  <p className="text-[10px] print:text-[9.5px] font-semibold tracking-[0.12em] uppercase text-[#4E626D]">
                    {card.audience}
                  </p>
                  <p className="mt-1 print:mt-0.5 text-xs print:text-[10px] leading-relaxed print:leading-tight text-[#0D1E27]">
                    {card.need}
                  </p>
                </div>
                <p className="mt-2.5 print:mt-1 pt-2 print:pt-1 border-t border-[#D8E5EA] text-xs print:text-[10.5px] font-semibold text-[#2B8A9E]">
                  {card.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diversified Field Photography Grid */}
        <div className="mt-4 print:mt-2.5 grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-3 print:gap-2">
          {FIELD_SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#F3F8FA] aspect-[9/10] print:aspect-auto print:h-[142px]"
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className={`h-full w-full object-cover ${item.objectPosition}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E27]/85 via-[#0D1E27]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 print:p-2">
                <p className="text-xs print:text-[10.5px] font-semibold text-white leading-snug">{item.title}</p>
                <p className="mt-0.5 text-[10px] print:text-[9px] text-white/80 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 5: PARTNER WITH CACS */}
      <section
        id="partner"
        aria-label="Partner with CACS"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-4 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-2 border-b border-[#E5ECEF]">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Partner with CACS
          </span>
          <span className="font-mono text-[11px] text-[#647984] tabular-nums">
            Page 05 / 08
          </span>
        </div>

        <div className="mt-5 print:mt-2.5">
          <h2 className="text-2xl sm:text-3xl print:text-xl font-semibold tracking-tight text-[#0D1E27] text-balance">
            You are one consult away from success
          </h2>
          <p className="mt-2 print:mt-0.5 text-sm print:text-[11px] text-[#4E626D] max-w-2xl leading-relaxed print:leading-snug">
            More than consulting — a collaborative space for everyone, built on the philosophy that human intellect strengthens our smart collectives. Individuals and businesses partner with Commerce Advisors Consulting Solutions through a clear path ⎯ select a solution, consult with an accredited advisor, and receive a strategic blueprint.
          </p>
        </div>

        {/* Audience Bento Cards with Lecture Hall Photo for Individuals */}
        <div className="mt-5 print:mt-2.5 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-4 print:gap-2.5 items-stretch">
          <div className="md:col-span-5 print:col-span-5 rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] overflow-hidden flex flex-col justify-between p-5 print:p-3.5 gap-4 print:gap-2.5">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
                For individuals
              </span>
              <h3 className="mt-1.5 print:mt-1 text-lg print:text-base font-semibold text-[#0D1E27]">
                Students, travelers, leaders and entrepreneurs
              </h3>
              <p className="mt-2 print:mt-1 text-xs print:text-[11px] leading-relaxed text-[#4E626D]">
                Admissions and scholarships · Travel planning · Leadership mentoring · e-Residency · Interpretation and translation
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#E5ECEF] aspect-[4/3] print:aspect-auto print:h-[145px]">
              <img
                src={ASSETS.lectureHall}
                alt="University students raising their hands in an interactive seminar with a professor"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          <div className="md:col-span-7 print:col-span-7 rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] overflow-hidden grid grid-cols-12 gap-3.5 print:gap-2.5 p-5 print:p-3.5 items-center">
            <div className="col-span-6 print:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
                  For businesses &amp; organizations
                </span>
                <h3 className="mt-1.5 print:mt-1 text-lg print:text-base font-semibold text-[#0D1E27]">
                  Companies, non-profits, teams and institutions
                </h3>
                <p className="mt-2.5 print:mt-1 text-xs print:text-[10px] leading-relaxed print:leading-snug text-[#4E626D]">
                  Aligning human insight with AI-engineered research, we ensure our strategic methodologies—and the global leaders we advise—are always growing, innovating, and thriving where technological evolution meets human purpose.
                </p>
              </div>
              <p className="mt-3 print:mt-2 pt-2.5 print:pt-1.5 border-t border-[#E5ECEF] text-[11px] print:text-[10px] font-medium text-[#2B8A9E]">
                Scoped to the solution you choose
              </p>
            </div>
            <div className="col-span-6 print:col-span-5 flex items-center justify-center">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-xl border border-[#E5ECEF] bg-[#F3F8FA]">
                <img
                  src={ASSETS.supplyWarehouse}
                  alt="Supply chain leadership team coordinating warehouse distribution with a digital tablet"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Partner Principle Media Cards */}
        <div className="mt-4 print:mt-2.5 grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2">
          {PARTNER_PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#E5ECEF] bg-white flex flex-col"
            >
              <div className="aspect-[4/3] print:aspect-auto print:h-[94px] overflow-hidden bg-[#F3F8FA]">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={item.alt}
                    className={`h-full w-full object-cover ${item.objectPosition}`}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className={`h-full w-full object-cover ${item.objectPosition}`}
                  />
                )}
              </div>
              <div className="p-3.5 print:p-2">
                <p className="text-xs print:text-[11px] font-semibold text-[#0D1E27]">{item.title}</p>
                <p className="mt-1 print:mt-0.5 text-[11px] print:text-[9.5px] leading-snug text-[#4E626D]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How a Partnership Runs */}
        <div className="mt-4 print:mt-2.5 rounded-2xl border border-[#E5ECEF] bg-white p-4 print:p-2.5">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            How a partnership runs
          </p>
          <div className="mt-3 print:mt-1.5 grid grid-cols-2 sm:grid-cols-5 print:grid-cols-5 gap-2.5 print:gap-2">
            {PARTNER_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#E5ECEF] bg-[#FAFDFE] p-3 print:p-2"
              >
                <span className="font-mono text-[11px] print:text-[10px] font-medium text-[#2B8A9E] tabular-nums">
                  {item.step}
                </span>
                <p className="mt-1 print:mt-0.5 text-sm print:text-xs font-semibold text-[#0D1E27]">{item.title}</p>
                <p className="mt-0.5 text-[11px] print:text-[9.5px] text-[#4E626D]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Partnership Inquiry & Contact Bento */}
        <div className="mt-4 print:mt-2.5 rounded-2xl bg-[#2B8A9E] p-4 sm:p-5 print:p-3 text-white grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-4 print:gap-3 items-center">
          <div className="md:col-span-7 print:col-span-7">
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/80">
              Partnership inquiry · Availability confirmed on review
            </p>
            <p className="mt-1 text-base print:text-sm font-semibold">
              Share your project, idea, and strategic context
            </p>
            <p className="mt-1 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-white/90">
              Individuals and organizations seeking collaboration or global roles are invited to submit their project vision, initiative scope, strategic context, and partnership availability through direct inquiry.
            </p>
          </div>
          <div className="md:col-span-5 print:col-span-5 grid grid-cols-1 gap-2 print:gap-1.5 border-t md:border-t-0 print:border-t-0 md:border-l print:border-l border-white/20 pt-3 md:pt-0 print:pt-0 md:pl-4 print:pl-4 text-xs print:text-[11px]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-white/75">
                Partnerships &amp; global hiring
              </p>
              <p className="font-semibold text-white">commerce@cacs.pro</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.1em] text-white/75">
                CEO &amp; Founder
              </p>
              <p className="font-semibold text-white">carlos@cacs.pro</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] print:text-[10px] text-white/85 font-mono pt-0.5">
              <span className="tabular-nums">+1 (323) 451-1189</span>
              <span aria-hidden="true">·</span>
              <span>cacs.pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 6: OUR PRESENCE & EXPANDED SUSTAINABILITY / SOCIAL IMPACT SPOTLIGHT */}
      <section
        id="presence"
        aria-label="Our Presence and Social Impact"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-4 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-2 border-b border-[#E5ECEF]">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Our Presence &amp; Social Impact
          </span>
          <span className="font-mono text-[11px] text-[#647984] tabular-nums">
            Page 06 / 08
          </span>
        </div>

        <div className="mt-5 print:mt-2.5">
          <h2 className="text-2xl sm:text-3xl print:text-xl font-semibold tracking-tight text-[#0D1E27] text-balance">
            Connected Commerce, Global Solutions
          </h2>
          <p className="mt-1.5 print:mt-0.5 text-sm print:text-[11px] text-[#4E626D] max-w-2xl leading-relaxed print:leading-snug">
            Local roots, global reach ⎯ grounded where we connect, advancing toward where we’re headed. We turn regional insight into global strategic advantage.
          </p>
        </div>

        {/* Presence Bento Grid */}
        <div className="mt-4 print:mt-2 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-3.5 print:gap-2.5 items-stretch">
          <div className="md:col-span-4 print:col-span-4 rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-4 print:p-2 flex flex-col items-center justify-center">
            <svg viewBox="0 0 260 225" className="w-full max-w-[190px] print:max-w-[115px] h-auto" role="img" aria-label="CACS Hub Network connecting USA Prime Hub, Monterrey Mexico, and Tegucigalpa Honduras">
              <path
                d="M115 62 Q155 96 148 128 Q142 162 120 188"
                fill="none"
                stroke="#2B8A9E"
                strokeWidth="1.6"
                strokeDasharray="4 4"
              />
              <circle cx="110" cy="58" r="42" fill="#E7F2F5" />
              <circle cx="110" cy="58" r="28" fill="#2B8A9E" />
              <text x="110" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="600">
                USA
              </text>
              <text x="110" y="69" textAnchor="middle" fill="#E7F2F5" fontSize="7.5">
                Prime Hub
              </text>

              <circle cx="152" cy="130" r="26" fill="#FFFFFF" stroke="#2B8A9E" strokeWidth="1.4" strokeDasharray="3 3" />
              <text x="152" y="128" textAnchor="middle" fill="#0D1E27" fontSize="8.5" fontWeight="600">
                Monterrey
              </text>
              <text x="152" y="139" textAnchor="middle" fill="#4E626D" fontSize="6.8">
                Mexico
              </text>

              <circle cx="116" cy="190" r="26" fill="#FFFFFF" stroke="#2B8A9E" strokeWidth="1.4" strokeDasharray="3 3" />
              <text x="116" y="188" textAnchor="middle" fill="#0D1E27" fontSize="8" fontWeight="600">
                Tegucigalpa
              </text>
              <text x="116" y="199" textAnchor="middle" fill="#4E626D" fontSize="6.8">
                Honduras
              </text>
            </svg>
            <p className="mt-1 text-[11px] print:text-[10px] text-[#647984] text-center">
              Presence with purpose, wherever we grow.
            </p>
          </div>

          <div className="md:col-span-8 print:col-span-8 flex flex-col gap-3 print:gap-2">
            <div className="rounded-2xl bg-[#2B8A9E] p-4 print:p-2.5 text-white">
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/80">
                Prime Hub · North America ↗
              </p>
              <h3 className="mt-1 print:mt-0.5 text-lg print:text-base font-semibold">United States of America</h3>
              <p className="mt-1 print:mt-0.5 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-white/90">
                Integrated across global commerce, sports, travel, international education and more, it is a premier destination for strategic trade, commercial enterprise and market expansion.
              </p>
              <p className="mt-2 print:mt-1 text-xs print:text-[10.5px] font-semibold">
                commerce@cacs.pro · +1 (323) 451-1189
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 print:gap-2 flex-1">
              <div className="rounded-2xl border border-[#E5ECEF] bg-white p-3.5 print:p-2.5">
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                  Coming soon
                </p>
                <h4 className="mt-1 print:mt-0.5 text-sm print:text-xs font-semibold text-[#0D1E27]">
                  Tegucigalpa, Honduras
                </h4>
                <p className="mt-1 print:mt-0.5 text-xs print:text-[10px] leading-relaxed print:leading-snug text-[#4E626D]">
                  Geopolitical hub immersed in regional organizations and trade channels across Central America and the Caribbean.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5ECEF] bg-white p-3.5 print:p-2.5">
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                  Coming soon
                </p>
                <h4 className="mt-1 print:mt-0.5 text-sm print:text-xs font-semibold text-[#0D1E27]">
                  Monterrey, Mexico
                </h4>
                <p className="mt-1 print:mt-0.5 text-xs print:text-[10px] leading-relaxed print:leading-snug text-[#4E626D]">
                  Fast-evolving business metropolis at a commercial crossroads linking North and Latin American markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability & Social Impact Spotlight */}
        <div id="impact" className="mt-6 print:mt-3 pt-5 print:pt-2.5 border-t border-[#E5ECEF]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
                Community Development · More than a consulting company
              </p>
              <h3 className="mt-1 print:mt-0.5 text-xl sm:text-2xl print:text-lg font-semibold text-[#0D1E27]">
                Sustainability &amp; Social Impact
              </h3>
            </div>
            <p className="text-xs print:text-[11px] font-semibold text-[#2B8A9E]">
              3 Cs ⎯ Connect, Collaborate and Create
            </p>
          </div>
          <p className="mt-1.5 print:mt-0.5 text-xs sm:text-[13px] print:text-[10px] leading-relaxed print:leading-snug text-[#4E626D] max-w-3xl">
            We are a digital ecosystem built on our 3 Cs ⎯ Connect, Collaborate and Create. Under the executive direction of Carlos Castro, our highest priority is to achieve and secure high-impact, long-term international business positioning paired with measurable social and environmental value.
          </p>

          {/* 3 Impact Pillars Row Above Smart Collectives Media */}
          <div className="mt-4 print:mt-2 grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-2.5 print:gap-2">
            {SUSTAINABILITY_PILLARS.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-[#E5ECEF] bg-[#FAFDFE] px-4 py-3 print:px-2.5 print:py-1.5">
                <p className="text-xs print:text-[11px] font-semibold text-[#0D1E27]">{pillar.title}</p>
                <p className="mt-0.5 text-[11px] print:text-[9.5px] leading-snug text-[#4E626D]">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Enlarged Full-Width Smart Collectives Photo Spotlight */}
          <div className="mt-3 print:mt-2 relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#F3F8FA] h-[310px] sm:h-[355px] print:h-[220px]">
            <img
              src={ASSETS.smartCollectivePhoto}
              alt="Diverse group of smiling partners and friends gathered outdoors together"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-[center_48%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1E27]/85 via-[#0D1E27]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 print:p-3">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/80">
                Smart collectives
              </p>
              <p className="mt-0.5 text-sm sm:text-base print:text-xs font-semibold text-white">
                Progress is synergical — human intellect strengthens technology
              </p>
            </div>
          </div>

          {/* Highlighted Flagship Social & Sustainability Initiatives */}
          <div className="mt-3.5 print:mt-2.5 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3.5 print:gap-2.5">
            <div className="rounded-2xl bg-[#E7F2F5] border border-[#D4E6EC] p-4 print:p-2.5">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                Global Health &amp; Education · Partner Foundation
              </p>
              <p className="mt-1 print:mt-0.5 text-sm print:text-xs font-semibold text-[#0D1E27]">
                The Mérito &amp; Milestone Foundation
              </p>
              <p className="mt-1 print:mt-0.5 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-[#0D1E27]">
                The Mérito &amp; Milestone Foundation is improving access to quality education worldwide while advancing HIV scientific research.
              </p>
            </div>
            <div className="rounded-2xl bg-[#E7F2F5] border border-[#D4E6EC] p-4 print:p-2.5">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                In-Development Project · Water, Energy &amp; Sanitation
              </p>
              <p className="mt-1 print:mt-0.5 text-sm print:text-xs font-semibold text-[#0D1E27]">
                Aqu.ai Resource Conservation
              </p>
              <p className="mt-1 print:mt-0.5 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-[#0D1E27]">
                Aqu.ai is an in-development project designed to improve sanitation and agricultural sustainability by saving water and energy through two-level gravity hydraulics, bio-char filtration, and solar-powered recirculation.
              </p>
            </div>
          </div>

          <div className="mt-3.5 print:mt-2.5 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-3.5 print:gap-2.5 items-stretch">
            <div className="md:col-span-5 print:col-span-5 rounded-2xl border border-[#E5ECEF] bg-white p-4 print:p-2.5">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                Sustainability · Built to last
              </p>
              <ul className="mt-2 print:mt-1 space-y-1.5 print:space-y-1 text-xs print:text-[10.5px] text-[#0D1E27]">
                {BUILT_TO_LAST.map((line) => (
                  <li key={line} className="pb-1.5 print:pb-1 border-b border-[#E5ECEF] last:border-b-0 last:pb-0">
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-7 print:col-span-7 rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-4 print:p-2.5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
                  Social impact in action
                </p>
                <p className="mt-2 print:mt-1 text-xs print:text-[10.5px] leading-[1.85] print:leading-relaxed text-[#0D1E27]">
                  {SOCIAL_IMPACT_AREAS.join(' · ')}
                </p>
              </div>
              <p className="mt-2.5 print:mt-1.5 pt-2.5 print:pt-1.5 border-t border-[#E5ECEF] text-[11px] print:text-[10px] text-[#4E626D]">
                Connecting non-profits, bilingual education, rural watershed tools, sanitation and energy-saving innovation across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 7: IN DEVELOPMENT — PARTNERSHIPS, SOCIAL IMPACT & RESEARCH */}
      <section
        id="research"
        aria-label="Partnerships and Development Research"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-4 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-2 border-b border-[#E5ECEF]">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            In Development · Partnerships, Impact &amp; Research
          </span>
          <span className="font-mono text-[11px] text-[#647984] tabular-nums">
            Page 07 / 08
          </span>
        </div>

        <div className="mt-5 print:mt-2.5">
          <h2 className="text-2xl sm:text-3xl print:text-xl font-semibold tracking-tight text-[#0D1E27] text-balance">
            Partnerships and research with social impact
          </h2>
          <p className="mt-1.5 print:mt-0.5 text-sm print:text-[11px] text-[#4E626D] max-w-2xl leading-relaxed print:leading-snug">
            Public-benefit partnerships and sustainability-driven development research CACS is building. Findings and open blueprints are shared as they mature.
          </p>
        </div>

        {/* Highlighted Social Impact Partner Organization Card (One Sentence) */}
        <div className="mt-4 print:mt-2 rounded-2xl bg-[#2B8A9E] p-5 print:p-3 text-white flex flex-col sm:flex-row print:flex-row sm:items-center print:items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/80">
              Social impact partner organization
            </p>
            <h3 className="mt-1 text-lg print:text-base font-semibold">
              The Mérito &amp; Milestone Foundation
            </h3>
            <p className="mt-1 text-xs print:text-[11px] leading-relaxed text-white/95 max-w-xl">
              The Mérito &amp; Milestone Foundation is improving access to quality education worldwide while advancing critical HIV scientific research.
            </p>
          </div>
          <p className="text-[11px] print:text-[10px] font-medium text-white/90 sm:text-right print:text-right shrink-0">
            Non-profit · HIV research · Global education
          </p>
        </div>

        {/* Aqu.ai Full Bento */}
        <div className="mt-4 print:mt-2 rounded-2xl border border-[#E5ECEF] bg-white p-5 print:p-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
                In-Development Project · Sustainability, Sanitation, Water &amp; Energy · Aqu.ai
              </p>
              <h3 className="mt-1 print:mt-0.5 text-lg print:text-base font-semibold text-[#0D1E27]">
                A two-level hydraulic and edge-AI farming system
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#2B8A9E]">New Mexico &amp; Louisiana</span>
          </div>
          <p className="mt-2 print:mt-1 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-[#4E626D]">
            Aqu.ai is an in-development project and prototype for low-income rural farms in drought-hit New Mexico and runoff-heavy Louisiana—improving sanitation while saving water and energy as soil and mineral runoff percolates through natural bio-char filtration and solar recirculation.
          </p>

          <div className="mt-4 print:mt-2 grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-2.5 print:gap-1.5">
            {AQUAI_DATA.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-[#E5ECEF] bg-[#FAFDFE] p-3 print:p-2">
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#4E626D]">
                  {m.label}
                </p>
                <p className="mt-1 print:mt-0.5 text-xl print:text-base font-semibold text-[#0D1E27] tabular-nums">{m.value}</p>
                <p className="mt-0.5 text-[10px] text-[#647984]">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 print:mt-1.5 grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-2.5 print:gap-1.5">
            {AQUAI_DATA.subsystems.map((s) => (
              <div key={s.index} className="rounded-xl border border-[#E5ECEF] bg-[#FAFDFE] p-3 print:p-2">
                <p className="text-[10px] font-semibold text-[#2B8A9E]">{s.index}</p>
                <p className="mt-0.5 text-xs print:text-[11px] font-semibold text-[#0D1E27]">{s.title}</p>
                <p className="mt-1 print:mt-0.5 text-[11px] print:text-[9.5px] leading-snug text-[#4E626D]">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 print:mt-1.5 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-2.5 print:gap-1.5">
            {AQUAI_DATA.regions.map((reg) => (
              <div key={reg.name} className="rounded-xl border border-[#E5ECEF] bg-white p-3 print:p-2">
                <p className="text-xs print:text-[11px] font-semibold text-[#0D1E27]">{reg.name}</p>
                <p className="mt-1 print:mt-0.5 text-[11px] print:text-[9.5px] leading-snug text-[#4E626D]">{reg.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 print:mt-1.5 pt-3 print:pt-1.5 border-t border-[#E5ECEF] text-[11px] print:text-[10px] text-[#4E626D]">
            <span className="font-semibold text-[#2B8A9E]">Sanitation, water &amp; energy impact ⎯</span>{' '}
            {AQUAI_DATA.publicBenefit.join(' · ')}
          </p>
        </div>

        {/* Cucurbit Research Paper Bento — Highlighting One-of-its-Kind Cross-Pollination */}
        <div className="mt-4 print:mt-2 rounded-2xl border border-[#2B8A9E]/35 bg-[#FAFDFE] p-4 sm:p-5 print:p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
                Development research paper · One-of-its-kind cross-pollination
              </p>
              <h3 className="mt-1 print:mt-0.5 text-base print:text-sm font-semibold text-[#0D1E27]">
                Interspecific hybridization of zucchini (♂) and orange pumpkin (♀)
              </h3>
            </div>
            <span className="font-mono text-[11px] font-medium text-[#2B8A9E]">
              Unique seed &amp; fruit · Oct 16, 2026
            </span>
          </div>

          <div className="mt-2.5 print:mt-1.5 rounded-xl border border-[#D4E6EC] bg-[#E7F2F5] px-3.5 py-2.5 print:py-1.5 text-xs print:text-[10.5px] text-[#0D1E27]">
            <span className="font-semibold text-[#2B8A9E]">Breakthrough milestone ⎯ </span>
            A one-of-its-kind interspecific cross-pollination producing a unique seed and fruit from{' '}
            <span className="italic">Cucurbita pepo</span> (♂) ×{' '}
            <span className="italic">Cucurbita maxima</span> (♀), a cross widely documented as exceptionally difficult within the genus.
          </div>

          <p className="mt-2 print:mt-1 text-xs print:text-[10.5px] leading-relaxed print:leading-snug text-[#4E626D]">
            By Carlos Castro. This single-flower trial confirms fruit set and documents the distinct morphology of the resulting fruit and seeds compared to the pumpkin maternal line.
          </p>

          <div className="mt-3 print:mt-1.5 grid grid-cols-2 sm:grid-cols-5 print:grid-cols-5 gap-2 print:gap-1.5 text-[11px] print:text-[9.5px]">
            <div className="rounded-lg border border-[#E5ECEF] bg-white p-2.5 print:p-1.5">
              <p className="font-semibold text-[#0D1E27]">♂ Zucchini</p>
              <p className="text-[#4E626D]">C. pepo, one male</p>
            </div>
            <div className="rounded-lg border border-[#E5ECEF] bg-white p-2.5 print:p-1.5">
              <p className="font-semibold text-[#0D1E27]">♀ Pumpkin</p>
              <p className="text-[#4E626D]">C. maxima, one female</p>
            </div>
            <div className="rounded-lg border border-[#E5ECEF] bg-white p-2.5 print:p-1.5">
              <p className="font-semibold text-[#2B8A9E]">Unique fruit set</p>
              <p className="text-[#4E626D]">Oct 16, 2026</p>
            </div>
            <div className="rounded-lg border border-[#E5ECEF] bg-white p-2.5 print:p-1.5">
              <p className="font-semibold text-[#0D1E27]">Unique seeds</p>
              <p className="text-[#4E626D]">Evaluation next</p>
            </div>
            <div className="rounded-lg border border-[#E5ECEF] bg-white p-2.5 print:p-1.5 col-span-2 sm:col-span-1 print:col-span-1">
              <p className="font-semibold text-[#0D1E27]">F1 generation</p>
              <p className="text-[#4E626D]">Confirms hybrid</p>
            </div>
          </div>

          <div className="mt-3 print:mt-1.5 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-2 print:gap-1.5 text-xs print:text-[10px]">
            {CUCURBIT_TRIAL.map((row) => (
              <div key={row.trait} className="rounded-xl bg-white border border-[#E5ECEF] px-3 py-2 print:py-1">
                <span className="font-semibold text-[#0D1E27]">{row.trait} ⎯ </span>
                <span className="text-[#4E626D]">{row.outcome}</span>
              </div>
            ))}
          </div>

          <p className="mt-2.5 print:mt-1.5 text-[11px] print:text-[9.5px] text-[#4E626D]">
            <span className="font-semibold text-[#0D1E27]">Status ⎯</span> Unique fruit set and seed harvest documented. Seed counts, germination and the first filial generation will be added as the paper is updated.
          </p>
        </div>
      </section>
    </>
  );
}
