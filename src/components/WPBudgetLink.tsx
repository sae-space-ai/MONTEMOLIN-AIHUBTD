import { Link2, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface WPInfo {
  id: string;
  name: string;
  period: string;
  deliverables: string[];
  color: string;
}

const workPackages: WPInfo[] = [
  {
    id: 'WP1',
    name: 'Gestión y coordinación',
    period: 'M1-M30',
    deliverables: ['D1.1 Project Management Plan', 'D1.2 Progress Reports'],
    color: 'bg-blue-500',
  },
  {
    id: 'WP2',
    name: 'Ecosistema interregional y necesidades de pymes',
    period: 'M1-M12',
    deliverables: ['D2.1 SME Needs Report', 'D2.2 Interregional Mapping'],
    color: 'bg-indigo-500',
  },
  {
    id: 'WP3',
    name: 'Evaluación y preparación tecnológica',
    period: 'M4-M15',
    deliverables: ['D3.1 Tech Readiness Report', 'D3.2 IP & Licensing Assessment'],
    color: 'bg-purple-500',
  },
  {
    id: 'WP4',
    name: 'Demostradores empresariales',
    period: 'M10-M27',
    deliverables: ['D4.1 Enterprise Demonstrators', 'D4.2 Performance Evaluation'],
    color: 'bg-green-500',
  },
  {
    id: 'WP5',
    name: 'IA confiable y gobernanza',
    period: 'M3-M27',
    deliverables: ['D5.1 Trustworthy AI Framework', 'D5.2 Governance Controls'],
    color: 'bg-orange-500',
  },
  {
    id: 'WP6',
    name: 'Comercialización y sostenibilidad',
    period: 'M9-M30',
    deliverables: ['D6.1 Exploitation Roadmap', 'D6.2 Investment Pathways'],
    color: 'bg-teal-500',
  },
  {
    id: 'WP7',
    name: 'Comunicación y capacitación',
    period: 'M1-M30',
    deliverables: ['D7.1 Dissemination Plan', 'D7.2 Training Materials'],
    color: 'bg-pink-500',
  },
];

export function WPBudgetLink() {
  const { ref, isVisible } = useInView();

  return (
    <section id="budget" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide mb-4">
            <Link2 className="w-4 h-4" />
            Vinculación
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Memoria ↔ Presupuesto ↔ Entregables
          </h2>
          <p className="text-slate-600">
            Relación entre los siete paquetes de trabajo, sus entregables y la información
            presupuestaria asociada. Los importes no verificados se muestran como{' '}
            <em>Pendiente de validación</em> para evitar confusiones con cifras reales.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 min-w-[140px]">WP</th>
                  <th className="px-4 py-3 min-w-[220px]">Descripción</th>
                  <th className="px-4 py-3 min-w-[100px]">Período</th>
                  <th className="px-4 py-3 min-w-[240px]">Entregables</th>
                  <th className="px-4 py-3 min-w-[160px]">Presupuesto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {workPackages.map((wp) => (
                  <tr key={wp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${wp.color}`} />
                        <span className="font-bold text-slate-900">{wp.id}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-700">{wp.name}</td>
                    <td className="px-4 py-4 text-slate-500 text-xs font-mono">{wp.period}</td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {wp.deliverables.map((d) => (
                          <li key={d} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-slate-400 mt-0.5">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Pendiente de validación
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Total del proyecto
            </div>
            <div className="text-xl font-bold text-slate-900">Pendiente de validación</div>
            <div className="text-xs text-slate-500 mt-1">
              Requiere conciliación con el Anexo 1 I3.
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Financiación solicitada
            </div>
            <div className="text-xl font-bold text-slate-900">Pendiente de validación</div>
            <div className="text-xs text-slate-500 mt-1">
              Confirmar elegibilidad y porcentajes de cofinanciación.
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Aportaciones propias
            </div>
            <div className="text-xl font-bold text-slate-900">Pendiente de validación</div>
            <div className="text-xs text-slate-500 mt-1">
              Verificar compromisos documentados de cada socio.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
          <strong>Principio de integridad:</strong> No se muestran importes en cero ni cifras
          aproximadas. Los valores presupuestarios se incorporarán únicamente tras la validación
          formal del Anexo 1 y la conciliación con la memoria técnica.
        </div>
      </div>
    </section>
  );
}
