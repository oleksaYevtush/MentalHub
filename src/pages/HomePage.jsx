import Hero from '../components/home/Hero';
import SymptomsSection from '../components/home/SymptomsSection';
import WarEffectsSection from '../components/home/WarEffectsSection';
import SilentStoriesSection from '../components/home/SilentStoriesSection';
import BreathingSection from '../components/home/BreathingSection';
import TipsSection from '../components/home/TipsSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SymptomsSection />
      <WarEffectsSection />
      <SilentStoriesSection />
      <BreathingSection />
      <TipsSection />
    </main>
  );
}
