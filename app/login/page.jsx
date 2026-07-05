import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadingVideo from '@/components/shared/FadingVideo';
import { CreepyButton } from '@/components/ui/creepy-button';

const PAGE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4';

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-28 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo src={PAGE_VIDEO} className="!fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
      </div>

      <div className="relative z-[2] w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-12">
          <span className="font-bold text-xl tracking-tight" style={{ color: '#E1E0CC' }}>
            CrestSow
          </span>
        </Link>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light mb-2" style={{ color: '#E1E0CC' }}>
              Welcome back
            </h1>
            <p className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>
              Sign in to your student account
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                className="block text-xs mb-1.5"
                style={{ color: 'rgba(225,224,204,0.45)' }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: '#212121',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#E1E0CC',
                }}
              />
            </div>

            <div>
              <label
                className="block text-xs mb-1.5"
                style={{ color: 'rgba(225,224,204,0.45)' }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: '#212121',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#E1E0CC',
                }}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: 'rgba(225,224,204,0.45)' }}
              >
                Forgot password?
              </a>
            </div>

            <CreepyButton className="w-full mt-2" simple>
              <span>Sign In</span>
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <ArrowRight size={14} />
              </span>
            </CreepyButton>
          </div>

          <p className="text-center text-xs mt-6" style={{ color: 'rgba(225,224,204,0.25)' }}>
            Don't have an account?{' '}
            <a
              href="#"
              className="transition-opacity hover:opacity-70"
              style={{ color: 'rgba(225,224,204,0.5)' }}
            >
              Sign up
            </a>
          </p>
        </div>

        <p className="text-center mt-6">
          <Link
            href="/admin/login"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: 'rgba(225,224,204,0.2)' }}
          >
            Admin login →
          </Link>
        </p>
      </div>
    </section>
  );
}
