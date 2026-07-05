import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CoursesSection from '@/components/home/CoursesSection';
import CorporateSection from '@/components/home/CorporateSection';
import InternshipsSection from '@/components/home/InternshipsSection';

export const metadata = {
  title: 'CrestSow - CRT, Projects, Internships & Training',
  description:
    'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in AIML, AI, embedded systems, IoT, Python, C, Java, DSA, full stack, aptitude, soft skills, and verbal.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <CorporateSection />
      <InternshipsSection />
    </>
  );
}
