'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FlipFadeText } from '@/components/ui/flip-fade-text';
import { CreepyButton } from '@/components/ui/creepy-button';
import { companyProfile } from '@/lib/data/company';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#0d0d0d] to-[#08080f]" />

        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-12 items-end gap-4 md:gap-6">
            <div className="col-span-12 lg:col-span-8 select-none">
              <FlipFadeText
                words={[companyProfile.name]}
                className="!min-h-0 !justify-start"
                textClassName="!text-[clamp(3rem,11vw,13rem)] !font-medium !tracking-[-0.07em] !normal-case !leading-none"
              />
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-6">
              <motion.p
                className="text-xs sm:text-sm md:text-base leading-[1.3]"
                style={{ color: 'rgba(255,255,255,0.88)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {companyProfile.name} provides CRT, projects, internships, workshops, hackathons,
                placement guidance, resume building, and company-specific trainings across AIML, AI,
                embedded systems, IoT, Python, C, Java, full stack, aptitude, soft skills, and verbal.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <CreepyButton
                  onClick={() => router.push('/programs')}
                  className="h-14 w-[220px] sm:w-[240px]"
                  coverClassName="bg-white text-black"
                >
                  Explore Programs
                </CreepyButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
