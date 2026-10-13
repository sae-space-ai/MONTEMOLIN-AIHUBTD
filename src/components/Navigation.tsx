import { useEffect, useState } from 'react';
import { Printer, Menu, X } from 'lucide-react';

export function Navigation() {
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
    { id: 'workplan', label: 'Work Plan' },
    { id: 'impact', label: 'Impact' },
    { id: 'documentation', label: 'Documents' },
    { id: 'validation', label: 'Validation' },
    { id: 'budget', label: 'Budget' },
    { id: 'access', label: 'Access' },
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
          <div className="hidden lg:flex space-x-5 text-sm font-medium">
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
              Print
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
          <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
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
                Print / Export
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
