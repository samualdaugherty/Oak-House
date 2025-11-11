import Section from './section';

export default function EasyProcess() {
  const steps = [
    { number: '1', title: 'Step One', description: 'Brief description' },
    { number: '2', title: 'Step Two', description: 'Brief description' },
    { number: '3', title: 'Step Three', description: 'Brief description' },
    { number: '4', title: 'Step Four', description: 'Brief description' },
  ];

  return (
    <Section heading="Easy Process">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 bg-[var(--color-sunburst)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[var(--color-oak)]">{step.number}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-oak)]">{step.title}</h3>
            <p className="text-[var(--color-oak)]">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

