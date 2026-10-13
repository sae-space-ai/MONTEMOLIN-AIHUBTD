import { ClipboardList, Code, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function QualitySection() {
  const { ref, isVisible } = useInView();

  const risks = [
    {
      id: 'R1',
      title: 'Consortium Eligibility',
      impact: 'High Impact',
      color: 'red',
      mitigation: 'Verify eligible partners, countries, legal status and documented roles before submission.',
    },
    {
      id: 'R2',
      title: 'Tech Maturity Rights',
      impact: 'Med Impact',
      color: 'yellow',
      mitigation: 'Readiness, IP and legal screening; alternative selection before pilot commitment.',
    },
    {
      id: 'R3',
      title: 'Host Commitments',
      impact: 'Med Impact',
      color: 'yellow',
      mitigation: 'Obtain documented host commitments and stage-gate readiness approvals.',
    },
  ];

  const roles = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: 'Coordinator',
      desc: 'Contractual management, steering, grant reporting, and financial oversight.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Beneficiaries',
      desc: 'Lead readiness screening, architecture reviews, and pilot integration.',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Enterprise Partners',
      desc: 'Recruit and support SMEs, manage baseline evaluations.',
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Consortium & Management</h2>
            <p className="text-slate-600 mb-6">
              The proposed consortium model comprises a legally eligible coordinator, complementary
              interregional beneficiaries, SME deployment hosts, and technology specialists.
            </p>

            <div className="space-y-6">
              {roles.map((role, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    {role.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{role.title}</h4>
                    <p className="text-sm text-slate-500">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">
              Risk Management Strategy
            </h3>
            <div className="space-y-4">
              {risks.map((risk) => (
                <div
                  key={risk.id}
                  className={`bg-slate-800 p-4 rounded-lg border-l-4 ${
                    risk.color === 'red' ? 'border-red-500' : 'border-yellow-500'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">
                      {risk.id}: {risk.title}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        risk.color === 'red'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}
                    >
                      {risk.impact}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Mitigation: {risk.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
