import { CheckCircle, FlaskConical } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function RelevanceSection() {
  const { ref, isVisible } = useInView();

  const stages = [
    { num: '01', title: 'Governance & Mapping', desc: 'Establish governance structures and map enterprise needs.' },
    { num: '02', title: 'Tech Screening', desc: 'Screen candidate technologies for maturity, IP, and data reqs.' },
    { num: '03', title: 'Matchmaking', desc: 'Match partners, enterprises, and investment opportunities.' },
    { num: '04', title: 'Demonstration', desc: 'Prepare, implement, and monitor enterprise-led demos.' },
    { num: '05', title: 'Evaluation', desc: 'Evaluate technical performance, outcomes, and AI safeguards.' },
    { num: '06', title: 'Exploitation', desc: 'Prepare exploitation, investment, and sustainability roadmaps.' },
  ];

  return (
    <section id="relevance" className="py-20 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Relevance & Methodology</h2>
          <p className="text-slate-600">
            Addressing the gap between AI capability and effective deployment through a structured,
            evidence-led approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Needs Analysis
            </h3>
            <p className="text-slate-600">
              SMEs face limited integration capacity, uncertain returns, and governance
              requirements. Our needs assessment is evidence-led, using enterprise interviews,
              use-case screening, and baseline process measures.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-blue-600" />
              European Added Value
            </h3>
            <p className="text-slate-600">
              Complementing existing regional programs by combining interregional matchmaking,
              readiness-based AI selection, and commercial exploitation. Transferability is pursued
              through replicable deployment protocols.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Six-Stage Implementation Methodology
        </h3>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="relative bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 z-10 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-slate-200 absolute -top-4 -right-2">
                  {stage.num}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{stage.title}</h4>
                <p className="text-xs text-slate-500">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
