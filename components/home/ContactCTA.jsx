import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

export default function ContactCTA() {
  return (
    <section className="video-section bg-black py-24 md:py-36 px-4">
      <video className="section-bg" src={AMBIENT_VIDEO} autoPlay loop muted playsInline />
      <div className="section-overlay" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ color: '#E1E0CC' }}>
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-sm mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(225,224,204,0.55)' }}>
          Whether you are looking to start a new career, upskill your team, or explore our
          programs, we are here to help you take the next step.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <CreepyButton href="/contact" simple>
            Get in Touch
          </CreepyButton>
          <CreepyButton href="/programs" simple>
            Browse Programs
          </CreepyButton>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm" style={{ color: 'rgba(225,224,204,0.35)' }}>
          <span className="flex items-center gap-2">
            <Mail size={16} style={{ color: '#DEDBC8' }} />
            hello@crestsow.academy
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} style={{ color: '#DEDBC8' }} />
            +1 (555) 123-4567
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} style={{ color: '#DEDBC8' }} />
            San Francisco, CA
          </span>
        </div>
      </div>
    </section>
  );
}
