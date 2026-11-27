import { ASSETS } from '../data/reportData';
import { CacsLogo } from './CacsLogo';

export function AnalyticsStrategySection() {
  return (
    <section
      id="strategies"
      aria-label="Three Strategies and Acknowledgements"
      className="pdf-sheet mx-auto w-full max-w-[850px] rounded-2xl border border-[#E5ECEF] bg-white p-6 sm:p-9 print:p-5 shadow-[0_2px_24px_rgba(13,30,39,0.04)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 print:pb-3 border-b border-[#E5ECEF]">
        <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
          Three Strategies &amp; Acknowledgements
        </span>
        <span className="font-mono text-[11px] text-[#647984] tabular-nums">
          Page 08 / 08
        </span>
      </div>

      {/* Three Strategies Header */}
      <div className="mt-6 print:mt-3.5">
        <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2B8A9E]">
          Executive summary · Three strategies by Carlos Castro
        </p>
        <h2 className="mt-1 text-2xl sm:text-3xl print:text-2xl font-semibold tracking-tight text-[#0D1E27] text-balance">
          Technology as an accelerator, human intellect first
        </h2>
        <p className="mt-2 print:mt-1 text-sm print:text-xs text-[#4E626D] max-w-2xl leading-relaxed">
          Emerging digital systems accelerate execution across Commerce Advisors, while human judgment, strategic accountability, and domain expertise remain central.
        </p>
      </div>

      {/* Three Public Strategies Bento */}
      <div className="mt-5 print:mt-3.5 grid grid-cols-1 gap-3.5 print:gap-2.5">
        <div className="rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-5 print:p-3.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
              Strategy 1
            </span>
            <span className="text-[11px] print:text-[10px] font-medium text-[#647984]">
              Gemini · Google AI Experiments · IBM Mentorship · GitHub · Augmented Intelligence
            </span>
          </div>
          <h3 className="mt-1.5 print:mt-1 text-base print:text-sm font-semibold text-[#0D1E27]">
            Applied AI engineering and market research
          </h3>
          <p className="mt-1.5 print:mt-1 text-xs sm:text-[13px] print:text-[11px] leading-relaxed text-[#4E626D]">
            Operating alongside rapidly advancing AI systems and early-access experimental tools from Google, Carlos Castro applies augmented intelligence principles developed through IBM mentorship to unify software engineering and executive consulting. This discipline underpins the custom architecture of cacs.pro—spanning front-end design, structured research workflows, and precision market outreach—converging technology and advisory into a singular operating model.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-5 print:p-3.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
              Strategy 2
            </span>
            <span className="text-[11px] print:text-[10px] font-medium text-[#647984]">
              Editorial Architecture · Issue-to-Solution Publishing · Cross-Border Reach
            </span>
          </div>
          <h3 className="mt-1.5 print:mt-1 text-base print:text-sm font-semibold text-[#0D1E27]">
            Digital channels as the strategic gateway
          </h3>
          <p className="mt-1.5 print:mt-1 text-xs sm:text-[13px] print:text-[11px] leading-relaxed text-[#4E626D]">
            Prospective partners and institutions engage with every CACS offering exclusively through curated digital channels. Each capability is introduced via a disciplined two-part editorial sequence ⎯ an analytical briefing that defines a critical structural challenge, followed by a dedicated publication outlining the corresponding advisory blueprint.
          </p>
          <div className="mt-3 print:mt-2 grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-2.5 print:gap-2 text-xs print:text-[11px]">
            <div className="rounded-xl border border-[#E5ECEF] bg-white px-3.5 py-2.5 print:py-1.5">
              <span className="font-semibold text-[#0D1E27]">Market challenge ⎯ </span>
              <span className="text-[#4E626D]">Analytical briefing defines operational friction</span>
            </div>
            <div className="rounded-xl border border-[#E5ECEF] bg-white px-3.5 py-2.5 print:py-1.5">
              <span className="font-semibold text-[#2B8A9E]">Advisory blueprint ⎯ </span>
              <span className="text-[#4E626D]">Dedicated publication details the CACS framework</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5ECEF] bg-[#FAFDFE] p-5 print:p-3.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2B8A9E]">
              Strategy 3
            </span>
            <span className="text-[11px] print:text-[10px] font-medium text-[#647984]">
              NATO-Aligned Standards · Swiss Privacy Governance · sharkgon.pro
            </span>
          </div>
          <h3 className="mt-1.5 print:mt-1 text-base print:text-sm font-semibold text-[#0D1E27]">
            SHARKGON cybersecurity enforcement
          </h3>
          <p className="mt-1.5 print:mt-1 text-xs sm:text-[13px] print:text-[11px] leading-relaxed text-[#4E626D]">
            Commerce Advisors pioneers the enterprise deployment of SHARKGON, an advanced cybersecurity enforcement architecture engineered to NATO-aligned standards and governed under stringent Swiss privacy frameworks to protect institutional operations and proprietary intelligence.
          </p>
        </div>
      </div>

      {/* Acknowledgements */}
      <div className="mt-6 print:mt-3.5 rounded-2xl border border-[#E5ECEF] bg-white p-5 sm:p-6 print:p-4">
        <h3 className="text-lg print:text-base font-semibold text-[#0D1E27]">
          Acknowledgements
        </h3>

        <p className="mt-3 print:mt-1.5 text-xs sm:text-[13px] print:text-[11px] leading-relaxed text-[#4E626D]">
          “To GitHub, Google AI team behind Gemini and its experimental tools, and IBM mentors- together you made possible the code, research and design thinking behind cacs.pro and SHARKGON. GitHub gave a founder-led consultancy the tools of a full engineering team. Gemini became a daily partner in our code, research and ad creative, and being among the first to try Google’s AI experiments shaped how we connect ⎯ fast, curious and with human judgment in charge. IBM’s mentorship in augmented intelligence set the principle we live by, that technology amplifies people and never replaces them. With gratitude for creating, collaborating and connecting.”
        </p>

        <div className="mt-4 print:mt-2.5 flex flex-wrap items-center gap-5">
          <p className="text-xs sm:text-sm font-semibold text-[#0D1E27]">
            — Carlos Castro, CEO and Founder
          </p>
          <img
            src={ASSETS.ceoSignature}
            alt="Signature of Carlos Castro, CEO and Founder"
            referrerPolicy="no-referrer"
            className="h-24 sm:h-28 print:h-20 w-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Official Public Legal Footer with Attached Logo */}
      <footer className="mt-6 print:mt-4 pt-5 print:pt-3.5 border-t border-[#E5ECEF] flex flex-col gap-4 print:gap-2.5">
        <div className="flex flex-col sm:flex-row print:flex-row sm:items-center print:items-center justify-between gap-4">
          <CacsLogo className="h-6 print:h-5 w-auto" />
          <div className="flex flex-wrap items-center gap-4 text-xs print:text-[11px] font-medium text-[#0D1E27]">
            <span className="font-mono tabular-nums">+1 (323) 451-1189</span>
            <span aria-hidden="true" className="text-[#CBD6DC]">·</span>
            <span className="text-[#2B8A9E]">commerce@cacs.pro</span>
            <span aria-hidden="true" className="text-[#CBD6DC]">·</span>
            <a
              href="https://cacs.pro"
              target="_blank"
              rel="noreferrer"
              className="text-[#2B8A9E] hover:underline"
            >
              cacs.pro
            </a>
          </div>
        </div>

        <div className="text-[11px] print:text-[10px] leading-relaxed text-[#647984] space-y-1.5 print:space-y-1">
          <p className="font-medium text-[#0D1E27]">
            Copyright © 2026 CACS - Management and Consulting - All Rights Reserved.
          </p>
          <p>
            At CACS, genuine human intellect, leadership, and expertise comes first, leveraging technology solely as a strategic accelerator. CACS is a recognized digital corporation operating in full legal compliance within the jurisdiction of the United States of America. Protected by cyber-security enforcement governed under strict Swiss privacy laws.
          </p>
        </div>
      </footer>
    </section>
  );
}
