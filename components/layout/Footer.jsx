import Link from 'next/link';
import { AtSign } from 'lucide-react';
import { companyProfile } from '@/lib/data/company';

const footerLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/programs', label: 'Programs' },
  { href: '/internships', label: 'Internships' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t py-12 px-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <Link href="/" className="font-bold text-base tracking-tight" style={{ color: '#E1E0CC' }}>
              {companyProfile.name}
            </Link>
            <p className="text-xs mt-1" style={{ color: 'rgba(225,224,204,0.3)' }}>
              CRT. Projects. Internships. Programs.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-opacity hover:opacity-100"
                style={{ color: 'rgba(225,224,204,0.4)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={companyProfile.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-100"
              style={{ color: 'rgba(225,224,204,0.4)' }}
            >
              <AtSign size={12} />
              {companyProfile.contact.instagramHandle}
            </a>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'rgba(225,224,204,0.2)' }}>
            © {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-xs transition-opacity hover:opacity-100"
                style={{ color: 'rgba(225,224,204,0.2)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
