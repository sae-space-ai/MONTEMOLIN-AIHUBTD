import { useEffect, useRef, useState } from 'react';
import {
  Clock,
  MapPin,
  CheckCircle,
  FlaskConical,
  Building2,
  ClipboardList,
  Code,
  Shield,
  FileText,
  Printer,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

// Intersection Observer hook
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'summary', label: 'Summary' },
    { id: 'relevance', label: 'Relevance' },
    { id: 'quality', label: 'Quality' },
    { id: 'impact', label: 'Impact' },
    { id: 'workplan', label: 'Work Plan' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span
              className={`font-semibold text-lg tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              MONTEMOLIN-AIHUB
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Export PDF
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Export PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <header className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

// Summary Section
function SummarySection() {
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

// Relevance Section
function RelevanceSection() {
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

// Quality Section
function QualitySection() {
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

// Work Plan Section
function WorkPlanSection() {
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

// Impact Section
function ImpactSection() {
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

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">MONTEMOLIN-AIHUB</h4>
            <p className="text-sm">Interregional AI Deployment and Commercialisation Hub.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">
              Coordinator Contact
              <br />
              [VERIFY IN PART A]
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Funding</h4>
            <p className="text-sm">
              EU Grants: Application form (I3)
              <br />
              V4.0 – 01.03.2026
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; 2026 MONTEMOLIN-AIHUB Consortium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navigation />
      <HeroSection />
      <SummarySection />
      <RelevanceSection />
      <QualitySection />
      <WorkPlanSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}
