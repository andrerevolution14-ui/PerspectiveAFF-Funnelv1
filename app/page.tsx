import HeroSection from '../components/HeroSection';
import Calculator from '../components/Calculator';
import PainEducation from '../components/PainEducation';
import VSLSection from '../components/VSLSection';
import SolutionReveal from '../components/SolutionReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* 1. Identify & Amplify with the tool */}
      <Calculator />

      {/* 2. Education on why (including AI) */}
      <PainEducation />

      {/* 3. VSL Showing the Solution */}
      <VSLSection />

      {/* 4. Comparison & Special Offer with CTA */}
      <SolutionReveal />

      {/* Footer */}
      <footer className="border-t border-muted py-12 px-4 bg-card/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Built to prove that traditional websites are dead. Mobile-first funnels are the future.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Perspective Bridge • Powered by{' '}
            <a
              href="https://try.perspective.co/g6bkxte2qkzh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              Perspective Funnels
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
