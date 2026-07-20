export const metadata = {
  title: 'Terms of Service',
  description: 'CrestSow terms of service — the rules governing use of our website and services.',
};

export default function TermsPage() {
  return (
    <div className="relative z-10 bg-[#FFFFFF]">
      <section className="pt-32 pb-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#0A0A0A] mb-8">Terms of Service</h1>
        <p className="text-sm text-[#6B7280] mb-8">Last updated: July 2026</p>

        <div className="space-y-8 text-[#4B5563] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm">
              By accessing or using the CrestSow website, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">2. Use of Website</h2>
            <p className="text-sm">
              You may use our website for lawful purposes only. You agree not to use the site in any way
              that could damage, disable, or impair the site or interfere with any other party&apos;s use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">3. Programs and Services</h2>
            <p className="text-sm">
              Information about CrestSow programs, internships, and services is provided for general informational
              purposes. Specific program details, pricing, and availability are subject to change and will be
              confirmed at the time of enrollment or engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">4. Intellectual Property</h2>
            <p className="text-sm">
              All content on this website, including text, graphics, logos, and software, is the property of
              CrestSow and is protected by applicable intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">5. Limitation of Liability</h2>
            <p className="text-sm">
              CrestSow shall not be liable for any indirect, incidental, special, or consequential damages
              arising from your use of the website or any services obtained through the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">6. Contact</h2>
            <p className="text-sm">
              For questions about these terms, contact us at{' '}
              <a href="mailto:crestsow@gmail.com" className="text-[#4C7FFF] hover:underline">crestsow@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
