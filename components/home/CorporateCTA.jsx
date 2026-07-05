import { Building, Users, TrendingUp } from 'lucide-react';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const benefits = [
  { icon: Building, text: 'Customized curricula for your team' },
  { icon: Users, text: 'Live workshops & hands-on labs' },
  { icon: TrendingUp, text: 'Measurable ROI & skill tracking' },
];

export default function CorporateCTA() {
  return (
    <section className="video-section bg-black py-24 md:py-36 px-4">
      <video className="section-bg" src={AMBIENT_VIDEO} autoPlay loop muted playsInline />
      <div className="section-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5" style={{ color: 'rgba(222,219,200,0.35)' }}>
              For Organizations
            </p>
            <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ color: '#E1E0CC' }}>
              Upskill Your Workforce with
              <br />
              <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
                Corporate Training
              </span>
            </h2>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: 'rgba(225,224,204,0.55)' }}>
              Equip your team with the skills they need to drive innovation and stay competitive
              in a rapidly evolving digital landscape.
            </p>

            <div className="space-y-4 mt-8">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.text} className="flex items-center gap-3" style={{ color: 'rgba(225,224,204,0.65)' }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Icon size={16} style={{ color: '#DEDBC8' }} />
                    </div>
                    <span className="text-sm">{b.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="inline-block mt-8">
              <CreepyButton href="/programs" simple>
                Explore Programs
              </CreepyButton>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="glass-card w-72 h-80 rounded-3xl flex items-center justify-center p-8">
              <div className="text-center">
                <Building size={64} style={{ color: 'rgba(222,219,200,0.3)' }} className="mx-auto mb-4" />
                <p className="text-sm" style={{ color: 'rgba(225,224,204,0.5)' }}>150+ Corporate Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
