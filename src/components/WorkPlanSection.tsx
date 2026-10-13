import { useInView } from '../hooks/useInView';

export function WorkPlanSection() {
  const { ref, isVisible } = useInView();

  const workPackages = [
    {
      name: 'WP1: Management & QA',
      period: 'M1-M30',
      color: 'bg-blue-500',
      bars: [true, true, true, true, true],
    },
    {
      name: 'WP2: Ecosystem & Needs',
      period: 'M1-M12',
      color: 'bg-indigo-500',
      bars: [true, true, false, false, false],
    },
    {
      name: 'WP3: Tech Readiness',
      period: 'M4-M15',
      color: 'bg-purple-500',
      bars: ['half', true, 'quarter', false, false],
    },
    {
      name: 'WP4: Demonstrations',
      period: 'M10-M27',
      color: 'bg-green-500',
      bars: [false, 'third', true, true, 'third'],
    },
    {
      name: 'WP5: Trustworthy AI',
      period: 'M3-M27',
      color: 'bg-orange-500',
      bars: ['quarter', true, true, true, 'quarter'],
    },
    {
      name: 'WP6: Commercialisation',
      period: 'M9-M30',
      color: 'bg-teal-500',
      bars: [false, 'quarter', true, true, true],
    },
    {
      name: 'WP7: Communication',
      period: 'M1-M30',
      color: 'bg-pink-500',
      bars: [true, true, true, true, true],
    },
  ];

  const deliverables = [
    { month: 'Month 3', title: 'D1.1 Project Management Plan', desc: 'Scope, quality controls, and confidentiality agreed.' },
    { month: 'Month 12', title: 'D3.1 Tech Readiness Report', desc: 'Assessment of candidate AI systems and supporting evidence.' },
    { month: 'Month 24', title: 'D4.1 Enterprise Demonstrators', desc: 'Deployment of selected AI solutions in agreed settings.' },
  ];

  const renderBar = (bar: string | boolean, color: string) => {
    if (bar === false) return null;
    if (bar === true) return <div className={`h-2 ${color} rounded-full w-full`} />;
    if (bar === 'half') return <div className={`h-2 ${color} rounded-full w-1/2 ml-auto`} />;
    if (bar === 'quarter') return <div className={`h-2 ${color} rounded-full w-1/4`} />;
    if (bar === 'third') return <div className={`h-2 ${color} rounded-full w-1/3 ml-auto`} />;
    return null;
  };

  return (
    <section id="workplan" className="py-20 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Work Plan & Timing (30 Months)
        </h2>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 min-w-[200px]">Work Package</th>
                  <th className="px-4 py-4 text-center">M1-6</th>
                  <th className="px-4 py-4 text-center">M7-12</th>
                  <th className="px-4 py-4 text-center">M13-18</th>
                  <th className="px-4 py-4 text-center">M19-24</th>
                  <th className="px-4 py-4 text-center">M25-30</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {workPackages.map((wp, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {wp.name}
                      <div className="text-xs text-slate-500 font-normal">{wp.period}</div>
                    </td>
                    {wp.bars.map((bar, j) => (
                      <td key={j} className="px-4 py-4">
                        {renderBar(bar, wp.color)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-bold text-blue-600 uppercase mb-2">{d.month}</div>
              <h4 className="font-bold text-slate-900">{d.title}</h4>
              <p className="text-sm text-slate-500 mt-1">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
