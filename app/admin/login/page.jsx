'use client';

import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import PointerGlowCard from '@/components/ui/PointerGlowCard';

export default function AdminLoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-28 overflow-hidden rounded-t-[32px] bg-[#F5F6F8]">
      <div className="relative z-[2] w-full max-w-md">
        <Link href="/" className="flex items-center justify-center mb-12">
          <span className="font-bold text-2xl tracking-tight text-[#0A0A0A]">
            CrestSow
          </span>
        </Link>

        <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#EAF1FF]">
              <Shield size={20} className="text-[#4C7FFF]" />
            </div>
            <h1 className="text-3xl text-[#0A0A0A] mb-2 tracking-tight">
              Admin Portal
            </h1>
            <p className="text-sm text-[#6B7280]">
              Authorized personnel only
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="admin@crestsow.com"
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

            <button className="btn-primary w-full justify-between mt-2">
              <span>Sign In</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </PointerGlowCard>

        <p className="text-center mt-6">
          <Link
            href="/login"
            className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors"
          >
            ← Student login
          </Link>
        </p>
      </div>
    </section>
  );
}
