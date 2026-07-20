export const metadata = {
  title: 'Privacy Policy',
  description: 'CrestSow privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="relative z-10 bg-[#FFFFFF]">
      <section className="pt-32 pb-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#0A0A0A] mb-8">Privacy Policy</h1>
        <p className="text-sm text-[#6B7280] mb-8">Last updated: July 2026</p>

        <div className="space-y-8 text-[#4B5563] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">1. Information We Collect</h2>
            <p className="text-sm">
              When you contact us through our website form, we collect your name, email address, subject, and message.
              We do not collect personal information automatically through cookies or tracking technologies beyond what
              is required for basic website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">2. How We Use Your Information</h2>
            <p className="text-sm">
              We use your contact information solely to respond to your inquiry. We do not sell, trade, or share your
              personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">3. Data Security</h2>
            <p className="text-sm">
              We implement reasonable security measures to protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">4. Third-Party Services</h2>
            <p className="text-sm">
              Our website is hosted on Vercel. We use Gmail for email delivery. These services have their own privacy
              policies governing how they handle data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">5. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated
              revision date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">6. Contact Us</h2>
            <p className="text-sm">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:crestsow@gmail.com" className="text-[#4C7FFF] hover:underline">crestsow@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
