import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description:
    'Learn about CrestSow — our mission, values, leadership, and the technology stack powering our training programs.',
  openGraph: {
    title: 'About | CrestSow',
    description:
      'Learn about CrestSow — our mission, values, leadership, and technology.',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
