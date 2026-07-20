import Link from 'next/link';
import { companyProfile } from '@/lib/data/company';

const footerLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
  { href: '/testimonials', label: 'Testimonials' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg mb-3">{companyProfile.name}</p>
            <p className="text-sm text-white/60 leading-relaxed">
              CRT, projects, internships, workshops, hackathons, and placement guidance across trending tech skills.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Navigate</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${companyProfile.contact.email}`} className="hover:text-white transition-colors">
                  {companyProfile.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyProfile.contact.phone}`} className="hover:text-white transition-colors">
                  {companyProfile.contact.phone}
                </a>
              </li>
              <li>
                <a href={companyProfile.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Legal</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
