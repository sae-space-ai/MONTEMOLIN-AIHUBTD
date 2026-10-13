import { useState } from 'react';
import { ShieldCheck, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type ValidationStatus = 'Pendiente' | 'En revisión' | 'Validado' | 'Incidencia';

interface ControlItem {
  id: string;
  title: string;
  description: string;
}

const controls: ControlItem[] = [
  {
    id: 'c1',
    title: 'Elegibilidad del consorcio interregional',
    description: 'Verificación de socios de al menos dos regiones elegibles conforme a las reglas I3.',
  },
  {
    id: 'c2',
    title: 'Identificación jurídica de participantes',
    description: 'Comprobación de personalidad legal, NIF/VAT y capacidad contractual.',
  },
  {
    id: 'c3',
    title: 'Correspondencia entre Parte A y Parte B',
    description: 'Coherencia entre el formulario administrativo (A) y la memoria técnica (B).',
  },
  {
    id: 'c4',
    title: 'Conciliación del presupuesto con el Anexo 1',
    description: 'Cuadre entre costes declarados en la memoria y el anexo presupuestario oficial.',
  },
  {
    id: 'c5',
    title: 'Indicadores, líneas de base y metas',
    description: 'Definición de indicadores SMART con valores de referencia y objetivos cuantificables.',
  },
  {
    id: 'c6',
    title: 'Madurez tecnológica y propiedad intelectual',
    description: 'Evaluación de TRL, derechos de explotación y licencias de las tecnologías candidatas.',
  },
  {
    id: 'c7',
    title: 'Entregables e hitos',
    description: 'Listado de entregables por paquete de trabajo con fechas y criterios de aceptación.',
  },
  {
    id: 'c8',
    title: 'Declaraciones de doble financiación',
    description: 'Ausencia de solapamientos con otros programas europeos, nacionales o regionales.',
  },
  {
    id: 'c9',
    title: 'Comprobación de anexos',
    description: 'Presencia y completitud de todos los anexos requeridos por el formulario I3.',
  },
  {
    id: 'c10',
    title: 'Revisión del PDF final',
    description: 'Lectura integral del PDF generado para detectar errores de formato, paginación o contenido.',
  },
];

const statusConfig: Record<ValidationStatus, { label: string; bg: string; text: string; border: string; icon: React.ReactNode }> = {
  'Pendiente': {
    label: 'Pendiente',
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-300',
    icon: <Clock className="w-3.5 h-3.5" />,
  },
  'En revisión': {
    label: 'En revisión',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-300',
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
  'Validado': {
    label: 'Validado',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
  'Incidencia': {
    label: 'Incidencia',
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-300',
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
};

const allStatuses: ValidationStatus[] = ['Pendiente', 'En revisión', 'Validado', 'Incidencia'];

export function ValidationPanel() {
  const { ref, isVisible } = useInView();
  const [statuses, setStatuses] = useState<Record<string, ValidationStatus>>(
    Object.fromEntries(controls.map((c) => [c.id, 'Pendiente' as ValidationStatus]))
  );

  const updateStatus = (id: string, status: ValidationStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  };

  const counts = allStatuses.reduce(
    (acc, s) => {
      acc[s] = Object.values(statuses).filter((v) => v === s).length;
      return acc;
    },
    {} as Record<ValidationStatus, number>
  );

  return (
    <section id="validation" className="py-20 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-4">
            <ShieldCheck className="w-4 h-4" />
            Panel de Control
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Panel de Validación Europea</h2>
          <p className="text-slate-600">
            Lista de comprobación interna para la candidatura. Ningún control se marca como
            validado sin evidencia documental que lo respalde.
          </p>
        </div>

        {/* Summary bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {allStatuses.map((s) => {
            const cfg = statusConfig[s];
            return (
              <div key={s} className={`${cfg.bg} border ${cfg.border} rounded-lg p-4 text-center`}>
                <div className={`text-2xl font-bold ${cfg.text}`}>{counts[s]}</div>
                <div className={`text-xs font-semibold ${cfg.text} uppercase tracking-wide`}>
                  {cfg.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls list */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {controls.map((control, idx) => {
              const current = statuses[control.id];
              const cfg = statusConfig[current];
              return (
                <div key={control.id} className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 text-sm">{control.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{control.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 md:ml-4">
                      {allStatuses.map((s) => {
                        const sCfg = statusConfig[s];
                        const active = current === s;
                        return (
                          <button
                            key={s}
                            onClick={() => updateStatus(control.id, s)}
                            title={s}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${
                              active
                                ? `${sCfg.bg} ${sCfg.text} ${sCfg.border} shadow-sm`
                                : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300 hover:text-slate-600'
                            }`}
                          >
                            {sCfg.icon}
                            <span className="hidden sm:inline">{sCfg.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
          <strong>Estado inicial:</strong> Todos los controles comienzan en <em>Pendiente</em>. Los
          cambios de estado son locales a esta sesión y no constituyen validación oficial.
        </div>
      </div>
    </section>
  );
}
