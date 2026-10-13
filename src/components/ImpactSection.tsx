import { CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function ImpactSection() {
  const { ref, isVisible } = useInView();

  const impacts = [
    'Short-term: Assessed needs, candidate technologies, deployment plans.',
    'Medium-term: Operational demonstrations, measurable performance evidence.',
    'Long-term: Commercial adoption and stronger interregional value chains.',
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact & Ambition</h2>
            <p className="text-slate-600 mb-6">
              Target groups include SMEs adopting AI, technology providers, and regional innovation
              actors.
            </p>
            <ul className="space-y-4 mb-8">
              {impacts.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Sustainability Strategy</h3>
            <p className="text-slate-600 mb-6 text-sm">
              The project will prepare a post-grant operating and exploitation roadmap identifying
              result ownership, maintenance needs, and revenue options.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">SO5</div>
                <div className="text-xs text-slate-500 uppercase mt-1">
                  Commercialisation Pathways
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">SO6</div>
                <div className="text-xs text-slate-500 uppercase mt-1">Knowledge Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
