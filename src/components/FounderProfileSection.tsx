import { ASSETS, FOUNDER_PROFILE } from '../data/reportData';

export function FounderProfileSection() {
  return (
    <section
      id="founder"
      aria-label="Executive Direction — Carlos Castro"
      className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-5 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-2.5 border-b border-[#E5ECEF]">
        <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
          Executive Direction · Founder Profile
        </span>
        <span className="font-mono text-[11px] text-[#647984] tabular-nums">
          Page 03 / 08
        </span>
      </div>

      {/* Main Founder Bento Column: 3 Clean Boxes Stacked Vertically */}
      <div className="mt-6 print:mt-3.5 flex flex-col gap-5 print:gap-3.5">
        {/* Box 1: Clean White Minimalistic CEO Profile Block with Medium Circular Photo */}
        <div className="rounded-2xl border border-[#E5ECEF] bg-white p-7 sm:p-8 print:p-5 flex flex-col items-center justify-center text-center">
          <div className="h-32 w-32 sm:h-36 sm:w-36 print:h-28 print:w-28 overflow-hidden rounded-full border border-[#DCE6EB] bg-[#F3F8FA] shadow-xs">
            <img
              src={ASSETS.ceoPortrait}
              alt="Carlos Castro, CEO and Founder of CACS"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <h2 className="mt-4 print:mt-3 text-xl sm:text-2xl print:text-xl font-semibold tracking-tight text-[#0D1E27]">
            {FOUNDER_PROFILE.name}
          </h2>
          <p className="mt-0.5 text-xs font-semibold tracking-[0.08em] uppercase text-[#2B8A9E]">
            {FOUNDER_PROFILE.role}
          </p>
          <p className="mt-3 print:mt-2 text-xs sm:text-sm print:text-xs leading-relaxed text-[#4E626D] max-w-lg">
            {FOUNDER_PROFILE.subtitle}
          </p>

          <div className="mt-5 print:mt-3.5 w-full max-w-sm pt-4 print:pt-3 border-t border-[#E5ECEF]">
            <p className="text-2xl sm:text-3xl print:text-2xl font-semibold text-[#0D1E27] tabular-nums">
              {FOUNDER_PROFILE.yearsLabel}
            </p>
            <p className="mt-0.5 text-[11px] text-[#4E626D]">
              {FOUNDER_PROFILE.yearsCaption}
            </p>
          </div>
        </div>

        {/* Box 2: Executive Profile */}
        <div className="rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-6 sm:p-7 print:p-4">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
            Executive Profile
          </p>
          <p className="mt-2.5 print:mt-1.5 text-sm sm:text-base print:text-sm leading-relaxed text-[#0D1E27]">
            {FOUNDER_PROFILE.summary}
          </p>
        </div>

        {/* Box 3: Professional Competencies */}
        <div className="rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-7 print:p-4 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
              Professional Competencies
            </p>
            <div className="mt-3.5 print:mt-2.5 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-2.5 print:gap-y-2 text-xs sm:text-[13px] print:text-xs text-[#0D1E27]">
              {FOUNDER_PROFILE.competencies.map((comp) => (
                <p key={comp} className="pb-1.5 print:pb-1 border-b border-[#E5ECEF]/70">
                  {comp}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-5 print:mt-3.5 pt-3.5 print:pt-2.5 border-t border-[#E5ECEF] text-[11px] text-[#4E626D]">
            Independent, globally external advisory.
          </p>
        </div>
      </div>
    </section>
  );
}
