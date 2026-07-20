import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact',
  description:
    'Reach out to CrestSow for programs, partnerships, internships, or any inquiries. We help companies, students, and faculties.',
  openGraph: {
    title: 'Contact | CrestSow',
    description:
      'Reach out to CrestSow for programs, partnerships, internships, or any inquiries.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
