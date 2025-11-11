import Image from 'next/image';

type LogoProps = {
  className?: string;
  variant?: 'black-white' | 'white-yellow';
};

export default function Logo({ className = '', variant = 'black-white' }: LogoProps) {
  // For now, using the same logo for both variants. If you have a separate white-yellow variant, add it here.
  const logoSrc = variant === 'white-yellow' ? '/logos/nav-logo.svg' : '/logos/nav-logo.svg';
  
  return (
    <div className={`relative ${className}`}>
      <Image
        src={logoSrc}
        alt="Oak House Co."
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

