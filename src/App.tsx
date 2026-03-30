import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="landing">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
