import HeroSection from '@/components/home/HeroSection';
import BuiltForSection from '@/components/home/BuiltForSection';
import CoursesSection from '@/components/home/CoursesSection';

import TestimonialsSection from '@/components/home/TestimonialsSection';

export const metadata = {
  title: 'CrestSow - CRT, Projects, Internships & Training',
  description:
    'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in AIML, AI, embedded systems, IoT, Python, C, Java, DSA, full stack, aptitude, soft skills, and verbal.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BuiltForSection />

      <CoursesSection />
      <TestimonialsSection />
    </>
  );
}
