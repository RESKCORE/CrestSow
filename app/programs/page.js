import ProgramsClient from './ProgramsClient';

export const metadata = {
  title: 'Programs',
  description:
    'Browse CrestSow programs: CRT, projects, internships, workshops, hackathons, placement guidance, and trending tech courses.',
  openGraph: {
    title: 'Programs | CrestSow',
    description:
      'Browse CrestSow programs: CRT, projects, internships, workshops, and more.',
  },
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
