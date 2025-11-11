export default function Section({ 
  id, 
  heading, 
  children, 
  className = '' 
}: { 
  id?: string;
  heading?: string;
  headingLevel?: 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}) {
  const HeadingTag = heading ? 'h2' : undefined;
  
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {heading && HeadingTag && (
          <HeadingTag className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-oak)]">
            {heading}
          </HeadingTag>
        )}
        {children}
      </div>
    </section>
  );
}

