import Image from 'next/image';

const imgHeroSection = '/images/header-bg.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[696px] md:h-[700px] lg:h-[800px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imgHeroSection}
          alt=""
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-[72px] px-4 md:px-6 lg:px-8 pt-[196px] max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 max-w-2xl lg:max-w-3xl">
          <h1 className="font-extrabold leading-[1.1] text-[var(--color-birch)] text-4xl md:text-5xl lg:text-[76px]">
            <span className="block">Welcome to the</span>
            <span className="block">Oak House Co.</span>
          </h1>
          <div className="font-light leading-[1.5] text-[var(--color-birch)] text-lg md:text-xl">
            <p className="mb-0">
              Oak House is a small design studio run by me, Sam Daugherty. I built this studio around a simple idea: small businesses deserve great websites too.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              I design and build custom sites that fit your business, your goals, and your budget. No templates. No gimmicks. Just clean, professional design that works right every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

