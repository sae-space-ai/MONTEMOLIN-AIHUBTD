import { FileText, FileSpreadsheet, BookOpen, File } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type DocStatus = 'Pendiente' | 'En revisión' | 'Validado' | 'Incidencia';
type DocAccess = 'Público' | 'Restringido';
type DocFormat = 'PDF' | 'DOCX' | 'XLSX';

interface Document {
  id: string;
  name: string;
  format: DocFormat;
  version: string;
  status: DocStatus;
  access: DocAccess;
  description: string;
}

const documents: Document[] = [
  {
    id: 'partb-pdf',
    name: 'Parte B — Memoria técnica (PDF)',
    format: 'PDF',
    version: 'v1.0 — Borrador interno',
    status: 'Pendiente',
    access: 'Público',
    description: 'Descripción técnica completa de la candidatura MONTEMOLIN-AIHUB.',
  },
  {
    id: 'partb-docx',
    name: 'Parte B — Documento Word editable',
    format: 'DOCX',
    version: 'v1.0 — Borrador interno',
    status: 'Pendiente',
    access: 'Restringido',
    description: 'Versión editable de la memoria técnica para revisión del consorcio.',
  },
  {
    id: 'annex1',
    name: 'Anexo 1 — Presupuesto oficial I3',
    format: 'XLSX',
    version: 'Pendiente de consolidación',
    status: 'Pendiente',
    access: 'Restringido',
    description: 'Anexo presupuestario del formulario I3. Importes no validados.',
  },
  {
    id: 'financial-book',
    name: 'Libro financiero MONTEMOLIN-AIHUB',
    format: 'PDF',
    version: 'Pendiente de emisión',
    status: 'Pendiente',
    access: 'Restringido',
    description: 'Registro financiero completo del proyecto. No disponible públicamente.',
  },
];

const statusStyles: Record<DocStatus, string> = {
  'Pendiente': 'bg-slate-100 text-slate-700 border-slate-300',
  'En revisión': 'bg-amber-50 text-amber-700 border-amber-300',
  'Validado': 'bg-emerald-50 text-emerald-700 border-emerald-300',
  'Incidencia': 'bg-rose-50 text-rose-700 border-rose-300',
};

const formatIcons: Record<DocFormat, React.ReactNode> = {
  PDF: <FileText className="w-5 h-5 text-rose-600" />,
  DOCX: <File className="w-5 h-5 text-blue-600" />,
  XLSX: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
};

export function DocumentationCenter() {
  const { ref, isVisible } = useInView();

  return (
    <section id="documentation" className="py-20 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-4">
            <BookOpen className="w-4 h-4" />
            Centro Documental
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Documentación Oficial y Financiera
          </h2>
          <p className="text-slate-600">
            Registro de los documentos que conforman el expediente de la candidatura. Los estados
            reflejan la fase interna de revisión; ningún documento se considera aprobado hasta su
            validación formal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                  {formatIcons[doc.format]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{doc.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border whitespace-nowrap ${statusStyles[doc.status]}`}>
                      {doc.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{doc.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Formato: {doc.format}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Versión: {doc.version}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded ${
                        doc.access === 'Restringido'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {doc.access === 'Restringido' ? (
                        <>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          {doc.access}
                        </>
                      ) : (
                        doc.access
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
          <strong>Nota de transparencia:</strong> Los importes presupuestarios y los estados de
          validación se actualizarán conforme avance la revisión interna del consorcio. No se
          muestran cifras hasta su verificación documental.
        </div>
      </div>
    </section>
  );
}
