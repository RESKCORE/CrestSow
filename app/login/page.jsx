import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PointerGlowCard from '@/components/ui/PointerGlowCard';

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-28 overflow-hidden rounded-t-[32px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#F5F6F8]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4C7FFF]/10 via-[#F5F6F8] to-[#F5F6F8]" />
      </div>

      <div className="relative z-[2] w-full max-w-4xl">
        {/* Bento Split Block */}
        <div className="grid md:grid-cols-[1.2fr_1fr] rounded-3xl overflow-hidden shadow-sm border border-[#E5E7EB]">
          {/* Left Tile — Brand */}
          <PointerGlowCard className="relative bg-gradient-to-br from-[#EAF1FF] via-[#FFFFFF] to-[#4C7FFF]/10 p-10 md:p-14 flex flex-col justify-between min-h-[320px]">
            {/* Blue glow accent */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#4C7FFF]/15 rounded-full blur-3xl" />



            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] leading-tight mb-3">
                Welcome<br /><span className="italic">back.</span>
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
                Sign in to access your programs, track progress, and connect with mentors.
              </p>
            </div>
          </PointerGlowCard>

          {/* Right Tile — Form */}
          <PointerGlowCard className="bg-white p-8 md:p-10 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h1 className="text-4xl text-[#0A0A0A] mb-1 tracking-tight">
                Sign In
              </h1>
              <p className="text-sm text-[#6B7280]">
                Enter your credentials
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#E5E7EB] rounded-xl text-[#0A0A0A] outline-none transition-colors focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B5563] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#E5E7EB] rounded-xl text-[#0A0A0A] outline-none transition-colors focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#E5E7EB] text-[#0A0A0A] focus:ring-[#0A0A0A]" />
                  <span className="text-sm text-[#6B7280]">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#0A0A0A] font-medium hover:underline">
                  Forgot?
                </a>
              </div>

              <button className="btn-primary w-full justify-between mt-2">
                <span>Sign In</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="text-center text-sm text-[#6B7280] mt-6">
              Don&apos;t have an account?{' '}
              <a href="/contact" className="text-[#0A0A0A] font-bold hover:underline">
                Apply to enroll
              </a>
            </p>
          </PointerGlowCard>
        </div>

        {/* Admin link — quiet, below the bento block */}
        <p className="text-center mt-8">
          <Link
            href="/admin/login"
            className="text-sm text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
          >
            Admin login →
          </Link>
        </p>
      </div>
    </section>
  );
}
