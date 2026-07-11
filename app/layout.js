import './globals.css';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata = {
  title: 'CrestSow - CRT, Projects, Internships & Training',
  description:
    'CrestSow provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and programs in trending tech and career skills.',
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
        <CustomCursor />
        <div className="relative min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] bg-white rounded-3xl md:rounded-[32px] overflow-hidden shadow-sm border border-[#E5E7EB] flex flex-col">
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
