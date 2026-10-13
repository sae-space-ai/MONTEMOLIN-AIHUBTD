export function Footer() {
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
