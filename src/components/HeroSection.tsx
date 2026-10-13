import { Clock, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <header className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wide mb-6">
            Interregional AI Deployment Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Bridging the Gap Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI Innovation
            </span>{' '}
            and SME Adoption
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            A 30-month investment-oriented initiative to assess and deploy mature, trustworthy
            artificial intelligence solutions in European SMEs, centered in Montemolín, Extremadura.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Duration: 30 Months
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              Focal Point: Montemolín, Spain
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
