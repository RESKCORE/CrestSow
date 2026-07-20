import './globals.css';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/ui/CustomCursor';

const siteUrl = 'https://crestsow-rho.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CrestSow - CRT, Projects, Internships & Training',
    template: '%s | CrestSow',
  },
  description:
    'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in trending tech and career skills.',
  openGraph: {
    title: 'CrestSow - CRT, Projects, Internships & Training',
    description:
      'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in trending tech and career skills.',
    url: siteUrl,
    siteName: 'CrestSow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrestSow - CRT, Projects, Internships & Training',
    description:
      'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in trending tech and career skills.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#EFEFF1] text-[#0A0A0A] p-2 md:p-4 lg:p-6 transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#0A0A0A] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <div className="relative min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] bg-white rounded-3xl md:rounded-[32px] overflow-hidden shadow-sm border border-[#E5E7EB] flex flex-col">
          <Navbar />
          <main id="main-content" className="flex-1 relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
