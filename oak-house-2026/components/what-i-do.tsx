export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-16 md:py-24 bg-[var(--color-oak)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 max-w-4xl lg:max-w-5xl">
          {/* Heading with yellow underline */}
          <h2 className="heading-with-underline font-extrabold leading-[1.1] text-[var(--color-birch)] text-4xl md:text-5xl lg:text-[48px]">
            What I Do...
          </h2>

          {/* Text content */}
          <div className="font-light leading-[1.5] text-[var(--color-birch)] text-base">
            <p className="mb-0">I design and build simple, professional websites for small, local businesses. They're well-built, with clean code and unique designs — just enough to tell your story, show what you offer, and make it easy for customers to reach you.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">While I have years of experience designing and building enterprise software tools, e-commerce websites, and native iOS and Android apps in the financial sector, most of my freelance work focuses on smaller, boutique websites. It lets me give each project the attention it deserves.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Each site is custom-designed, built from scratch (no templates or site builders), and optimized for performance. I can also host and maintain your site for a small monthly fee, so you never have to think about updates or tech details. Some clients prefer to simply email me updates whenever they need them — I'm happy to do that too.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

