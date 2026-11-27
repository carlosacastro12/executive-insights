import { Printer } from 'lucide-react';
import { AnalyticsStrategySection } from './components/AnalyticsStrategySection';
import { CacsLogo } from './components/CacsLogo';
import { CoverBento } from './components/CoverBento';
import { FounderProfileSection } from './components/FounderProfileSection';
import { SolutionsPresenceSection } from './components/SolutionsPresenceSection';

const NAV_LINKS = [
  { id: 'cover', label: 'Cover' },
  { id: 'summary', label: 'Overview' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'partner', label: 'Partnerships' },
  { id: 'strategies', label: 'Strategy' },
];

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFB] text-[#0D1E27] print:min-h-0 print:bg-white">
      {/* Sticky 3-Zone Top Bar (hidden when exporting to PDF) */}
      <header className="no-print sticky top-0 z-30 border-b border-[#E5ECEF] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1040px] items-center justify-between gap-8 px-6 py-3.5">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#cover"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('cover');
            }}
            className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#2B8A9E]"
            aria-label="CACS Executive Insights Top"
          >
            <CacsLogo className="h-5 sm:h-6 w-auto" />
          </a>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Report sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4E626D]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#2B8A9E] focus-visible:outline-2 focus-visible:outline-[#2B8A9E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2B8A9E] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#216E7E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B8A9E]"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Vertical Portrait PDF Document Stack */}
      <main className="px-4 py-6 sm:px-6 sm:py-10 space-y-6 sm:space-y-8 print:block print:p-0 print:space-y-0">
        <CoverBento onNavigate={scrollToSection} />
        <FounderProfileSection />
        <SolutionsPresenceSection />
        <AnalyticsStrategySection />
      </main>
    </div>
  );
}
