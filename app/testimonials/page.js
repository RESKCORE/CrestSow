import TestimonialsClient from './TestimonialsClient';

export const metadata = {
  title: 'Testimonials',
  description:
    'Read what students and partners say about CrestSow training programs, internships, and placement support.',
  openGraph: {
    title: 'Testimonials | CrestSow',
    description:
      'Read what students and partners say about CrestSow.',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
