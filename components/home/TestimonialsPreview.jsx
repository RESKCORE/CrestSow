import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import TestimonialCard from '@/components/shared/TestimonialCard';
import SectionHeader from '@/components/shared/SectionHeader';

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Hear from graduates who transformed their careers with CrestSow."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:text-[#6D28D9] transition-colors"
          >
            View All Testimonials
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
