interface CacsLogoProps {
  className?: string;
}

export function CacsLogo({ className = 'h-7 w-auto' }: CacsLogoProps) {
  return (
    <img
      src="/assets/aistudio/isotype__1__847edd7a.png"
      alt="CACS — Commerce Advisors Consulting Solutions"
      referrerPolicy="no-referrer"
      className={`object-contain select-none ${className}`}
    />
  );
}
