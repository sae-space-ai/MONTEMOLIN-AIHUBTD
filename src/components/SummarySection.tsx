import { useInView } from '../hooks/useInView';

export function SummarySection() {
  const { ref, isVisible } = useInView();

  const objectives = [
    'Establish eligible interregional cooperation framework',
    'Assess maturity & deployment rights of AI tech',
    'Implement enterprise-led demonstrations',
    'Establish trustworthy-AI governance controls',
    'Prepare commercialisation & investment pathways',
  ];

  return (
    <section id="summary" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Summary</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              MONTEMOLIN-AIHUB addresses the practical barriers European SMEs face in adopting AI:
              limited integration capacity, uncertain returns, and fragmented expertise. Rather than
              open-ended research, we propose an{' '}
              <strong>interregional investment and implementation framework</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The project connects enterprise-defined needs with demonstrably mature technologies,
              evaluates deployments against baselines, and prepares sustainable exploitation
              pathways. Results include documented SME needs, readiness assessments, enterprise
              demonstrations, responsible-AI governance, and commercialisation plans.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Objectives</h3>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-slate-600 text-sm">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
