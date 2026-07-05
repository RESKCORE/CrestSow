import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import FadingVideo from '@/components/shared/FadingVideo';

export default function AdminLoginPage() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 py-28 overflow-hidden">
      {/* Fading video background */}
      <FadingVideo />
      {/* Dark overlay so form stays readable */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="relative z-[2] w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-12">
          <span className="font-bold text-xl tracking-tight" style={{ color: '#E1E0CC' }}>
            CrestSow
          </span>
        </Link>

        {/* Card */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: '#101010',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="text-center mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: '#212121' }}
            >
              <Shield size={20} style={{ color: 'rgba(222,219,200,0.5)' }} />
            </div>
            <h1 className="text-2xl font-light mb-2" style={{ color: '#E1E0CC' }}>
              Admin Portal
            </h1>
            <p className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>
              Authorized personnel only
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                className="block text-xs mb-1.5"
                style={{ color: 'rgba(225,224,204,0.45)' }}
              >
                Admin Email
              </label>
              {/* Email field intentionally left without validation wiring — 
                  admin email will be configured in Phase 5 as per spec */}
              <input
                type="email"
                placeholder="admin@crestsow.com"
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

            <button className="group w-full inline-flex items-center justify-between bg-[#DEDBC8] rounded-full pl-5 pr-1.5 py-1.5 mt-2 transition-all duration-300">
              <span className="text-black font-medium text-sm">Sign In</span>
              <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={14} style={{ color: '#E1E0CC' }} />
              </span>
            </button>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link
            href="/login"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: 'rgba(225,224,204,0.2)' }}
          >
            ← Student login
          </Link>
        </p>
      </div>
    </section>
  );
}
