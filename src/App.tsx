import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SummarySection } from './components/SummarySection';
import { RelevanceSection } from './components/RelevanceSection';
import { QualitySection } from './components/QualitySection';
import { WorkPlanSection } from './components/WorkPlanSection';
import { ImpactSection } from './components/ImpactSection';
import { DocumentationCenter } from './components/DocumentationCenter';
import { ValidationPanel } from './components/ValidationPanel';
import { WPBudgetLink } from './components/WPBudgetLink';
import { AccessControl } from './components/AccessControl';
import { Footer } from './components/Footer';

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
      <DocumentationCenter />
      <ValidationPanel />
      <WPBudgetLink />
      <AccessControl />
      <Footer />
    </div>
  );
}
