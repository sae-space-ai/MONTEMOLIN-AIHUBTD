import { useState } from 'react';
import { Lock, Unlock, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function AccessControl() {
  const { ref, isVisible } = useInView();
  const [privateMode, setPrivateMode] = useState(false);

  return (
    <section id="access" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Área Pública y Área Privada</h2>
          <p className="text-slate-600">
            La plataforma distingue entre información divulgativa (pública) y documentación sensible
            del consorcio (restringida). La conmutación visual no constituye autenticación: el área
            privada requiere un mecanismo seguro de autorización que no está disponible en esta
            versión.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-slate-100 rounded-full p-1">
            <button
              onClick={() => setPrivateMode(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                !privateMode
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Unlock className="w-4 h-4" />
              Área Pública
            </button>
            <button
              onClick={() => setPrivateMode(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                privateMode
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Lock className="w-4 h-4" />
              Área Privada
            </button>
          </div>
        </div>

        {/* Public Area */}
        {!privateMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Presentación institucional', desc: 'Descripción general, objetivos y visión del proyecto.' },
              { title: 'Objetivos y metodología', desc: 'Las cinco prioridades y la metodología de seis etapas.' },
              { title: 'Cronograma general', desc: 'Plan de trabajo de 30 meses con paquetes WP1-WP7.' },
              { title: 'Impacto esperado', desc: 'Resultados a corto, medio y largo plazo para las pymes.' },
              { title: 'Consortio (resumen)', desc: 'Roles del coordinador y beneficiarios técnicos.' },
              { title: 'Información no confidencial', desc: 'Datos divulgativos sobre el hub de Montemolín.' },
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600">{item.desc}</p>
                <div className="mt-3 text-xs font-semibold text-emerald-700">Acceso: Público</div>
              </div>
            ))}
          </div>
        )}

        {/* Private Area */}
        {privateMode && (
          <div>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Área restringida</h3>
                <p className="text-sm text-amber-800">
                  Esta zona contiene información sensible del consorcio: documentos financieros,
                  presupuesto, versiones editables y control interno de validación. Las descargas
                  están deshabilitadas hasta disponer de un mecanismo de autenticación y
                  autorización real.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Documentos financieros', desc: 'Libro financiero y registros contables del proyecto.' },
                { title: 'Anexo presupuestario I3', desc: 'Desglose de costes por paquete de trabajo y beneficiario.' },
                { title: 'Versiones editables', desc: 'Borradores DOCX de la memoria técnica.' },
                { title: 'Información sensible del consorcio', desc: 'Datos jurídicos, fiscales y de contacto de los socios.' },
                { title: 'Control interno de validación', desc: 'Panel de validación europea con estados de revisión.' },
                { title: 'Declaraciones de doble financiación', desc: 'Registros de compatibilidad con otros programas.' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-xl opacity-75">
                  <div className="flex items-center gap-2 mb-2">
                    <EyeOff className="w-4 h-4 text-slate-500" />
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{item.desc}</p>
                  <button
                    disabled
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-200 text-slate-500 cursor-not-allowed"
                    title="Descarga deshabilitada: se requiere autenticación autorizada"
                  >
                    <Lock className="w-3 h-3" />
                    Descarga deshabilitada
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
