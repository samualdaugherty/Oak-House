import Section from './section';

export default function PricingContact() {
  return (
    <Section id="pricing-contact" heading="Pricing & Contact">
      <div className="max-w-3xl">
        <div className="mb-8">
          <p className="text-lg mb-4 text-[var(--color-oak)]">
            {/* Placeholder - Sam to provide pricing baseline */}
            Most projects fall between <strong className="text-[var(--color-sunburst)]">$2,500–$4,000</strong> depending on scope and requirements.
          </p>
          <p className="text-lg text-[var(--color-oak)]">
            {/* Placeholder - Sam to provide maintenance/hosting info if applicable */}
            Optional: Monthly maintenance and hosting available as an add-on.
          </p>
        </div>
        <div className="border-t border-[var(--color-oak)]/20 pt-8">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--color-oak)]">Get in Touch</h3>
          <div className="space-y-4">
            <p className="text-lg text-[var(--color-oak)]">
              Email:{' '}
              <a
                href="mailto:your-email@example.com"
                className="text-[var(--color-sunburst)] hover:underline"
              >
                your-email@example.com
              </a>
            </p>
            <p className="text-lg text-[var(--color-oak)]">
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-sunburst)] hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

