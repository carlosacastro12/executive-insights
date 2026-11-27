import { CacsLogo } from './CacsLogo';
import {
  ASSETS,
  COVER_TILES,
  CREDENTIALS,
  EXECUTIVE_KPIS,
  EXECUTIVE_PILLARS,
  HOW_WE_WORK,
  TOC_ITEMS,
} from '../data/reportData';

interface CoverBentoProps {
  onNavigate: (id: string) => void;
}

export function CoverBento({ onNavigate }: CoverBentoProps) {
  return (
    <>
      {/* PAGE 1: VERTICAL PDF COVER BENTO SHEET */}
      <section
        id="cover"
        aria-label="CACS Company Overview Cover"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-5 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        {/* Top White Editorial Title Bento Block */}
        <div className="rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-8 print:p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <CacsLogo className="h-14 sm:h-[68px] print:h-12 w-auto" />
          </div>

          <div className="mt-7 sm:mt-8 print:mt-3.5">
            <h1 className="text-4xl sm:text-[46px] print:text-[36px] font-semibold tracking-tight text-[#2B8A9E] leading-[1.08] text-balance">
              Executive Insights
            </h1>
            <p className="mt-2 print:mt-1 text-lg sm:text-xl print:text-base font-medium text-[#68B0BF]">
              August — November 2026
            </p>
            <p className="mt-2.5 print:mt-1.5 text-[11px] font-medium tracking-[0.2em] text-[#4E626D] uppercase">
              Commerce Advisors Consulting Solutions
            </p>
          </div>

          <div className="mt-6 print:mt-3.5 pt-4 print:pt-2.5 border-t border-[#E5ECEF] flex flex-wrap items-center justify-between gap-3 text-xs text-[#647984]">
            <span>Augmented Intelligence Consulting</span>
            <span className="font-mono text-[#2B8A9E]">cacs.pro</span>
          </div>
        </div>

        {/* Plain Minimalistic Photo Bento Grid (6 cols x 4 rows = 24 units) */}
        <div className="mt-3 print:mt-2 grid grid-cols-6 auto-rows-[130px] sm:auto-rows-[148px] print:auto-rows-[132px] gap-3 print:gap-2">
          {COVER_TILES.map((tile) => (
            <div
              key={tile.id}
              className={`overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#F3F8FA] ${tile.spanClass} print:col-span-2`}
            >
              <img
                src={tile.image}
                alt={tile.alt}
                referrerPolicy="no-referrer"
                className={`h-full w-full object-cover ${tile.objectPosition}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 print:mt-3 flex items-center justify-between text-[11px] text-[#647984]">
          <span>Augmented Intelligence Consulting</span>
          <span className="font-mono tabular-nums">01</span>
        </div>
      </section>

      {/* PAGE 2: CONTENTS & EXECUTIVE SUMMARY SHEET */}
      <section
        id="summary"
        aria-label="Contents and Executive Summary"
        className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-6 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-3 border-b border-[#E5ECEF]">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Contents &amp; Executive Summary
          </span>
          <span className="font-mono text-[11px] text-[#647984] tabular-nums">
            Page 02 / 08
          </span>
        </div>

        {/* Public Contents Bento Directory (8 Sections) */}
        <div className="mt-5 print:mt-3">
          <p className="text-xs text-[#647984] print:hidden">
            Select a section tile to jump directly.
          </p>
          <div className="mt-3 print:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-2.5 print:gap-2">
            {TOC_ITEMS.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => onNavigate(item.targetId)}
                className="group flex flex-col justify-between rounded-xl border border-[#E5ECEF] bg-[#FAFDFE] p-3 print:p-2.5 text-left transition-colors duration-150 hover:border-[#2B8A9E]/50 hover:bg-[#F3F8FA] focus-visible:outline-2 focus-visible:outline-[#2B8A9E]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#2B8A9E]">
                    {item.kicker}
                  </span>
                  <span className="font-mono text-[10px] text-[#647984] tabular-nums">
                    {item.pageNumber}
                  </span>
                </div>
                <p className="mt-1.5 print:mt-1 text-sm print:text-xs font-semibold text-[#0D1E27] group-hover:text-[#2B8A9E] transition-colors">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px] print:text-[10px] leading-snug text-[#4E626D]">
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Executive Summary Statement */}
        <div className="mt-7 print:mt-4">
          <h2 className="text-2xl sm:text-3xl print:text-2xl font-semibold tracking-tight text-[#0D1E27] leading-tight text-balance">
            More than consulting. A collaborative space for everyone.
          </h2>
          <p className="mt-2.5 print:mt-1.5 text-sm sm:text-[15px] print:text-xs leading-relaxed text-[#4E626D] max-w-2xl">
            CACS is an Augmented Intelligence Consulting company working at the intersection of{' '}
            <span className="font-medium text-[#2B8A9E]">business, education and social impact</span>,
            built on the philosophy that human intellect strengthens our smart collectives.
          </p>
        </div>

        {/* Summary KPI Bento Grid */}
        <div className="mt-5 print:mt-3.5 grid grid-cols-1 sm:grid-cols-12 print:grid-cols-12 gap-3 print:gap-2.5 items-stretch">
          <div className="sm:col-span-4 print:col-span-4 relative overflow-hidden rounded-2xl border border-[#E5ECEF] bg-[#0D1E27] min-h-[210px] print:min-h-[145px]">
            <video
              src={ASSETS.csrTeamVideo}
              poster={ASSETS.csrTeamPoster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Diverse international leadership team collaborating around a hexagonal table"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1E27]/80 via-[#0D1E27]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 print:p-3">
              <p className="text-xs font-semibold text-white">Purposefully executed</p>
              <p className="mt-0.5 text-[11px] text-white/85">
                Intentional from day one, delivered with discipline.
              </p>
            </div>
          </div>

          <div className="sm:col-span-8 print:col-span-8 grid grid-cols-2 gap-3 print:gap-2.5">
            {EXECUTIVE_KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className={`rounded-2xl p-4 sm:p-5 print:p-3.5 flex flex-col justify-between ${
                  kpi.accent
                    ? 'bg-[#2B8A9E] text-white'
                    : 'border border-[#E5ECEF] bg-white text-[#0D1E27]'
                }`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-[0.14em] uppercase ${
                    kpi.accent ? 'text-white/85' : 'text-[#4E626D]'
                  }`}
                >
                  {kpi.label}
                </span>
                <p
                  className={`mt-2 print:mt-1 font-semibold tracking-tight tabular-nums leading-tight ${
                    kpi.value.length > 10
                      ? 'text-xl sm:text-2xl print:text-lg'
                      : 'text-3xl sm:text-[34px] print:text-2xl leading-none'
                  }`}
                >
                  {kpi.value}
                </p>
                <p
                  className={`mt-2 print:mt-1 text-xs print:text-[11px] leading-snug ${
                    kpi.accent ? 'text-white/90' : 'text-[#4E626D]'
                  }`}
                >
                  {kpi.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Executive Pillars */}
        <div className="mt-5 print:mt-3.5 grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2.5">
          {EXECUTIVE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-4 print:p-3"
            >
              <h3 className="text-sm print:text-xs font-semibold text-[#0D1E27]">{pillar.title}</h3>
              <p className="mt-1.5 print:mt-1 text-xs print:text-[11px] leading-relaxed text-[#4E626D]">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* How We Work & Accreditations */}
        <div className="mt-5 print:mt-3.5 grid grid-cols-1 sm:grid-cols-12 print:grid-cols-12 gap-3 print:gap-2.5">
          <div className="sm:col-span-5 print:col-span-5 rounded-2xl border border-[#E5ECEF] bg-white p-4 print:p-3">
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
              How we connect
            </p>
            <p className="mt-2 print:mt-1 text-xs print:text-[11px] leading-relaxed text-[#0D1E27]">
              {HOW_WE_WORK.join(' · ')}
            </p>
          </div>
          <div className="sm:col-span-7 print:col-span-7 rounded-2xl border border-[#E5ECEF] bg-white p-4 print:p-3">
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
              Distinguished by accreditations and mentorship
            </p>
            <p className="mt-2 print:mt-1 text-xs print:text-[11px] leading-relaxed text-[#4E626D]">
              {CREDENTIALS.join(' · ')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
