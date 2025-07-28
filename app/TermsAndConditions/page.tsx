const TermsAndConditions = () => {
  return (
    <section
      id="terms"
      className="pt-16 md:pt-20 lg:pt-28 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Terms and Conditions
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Please read these Terms and Conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        <div className="prose dark:prose-invert prose-headings:text-white prose-p:text-gray-300 max-w-4xl mx-auto">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Brave BPO's website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not accept them, you must not use our services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            Our services may only be used for lawful purposes. You agree not to misuse the platform or engage in activities that violate local, national, or international laws.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this site—including text, graphics, logos, and images—is owned by Brave BPO and protected by intellectual property laws. No part may be reused without written permission.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information. Any activity under your account is your responsibility.
          </p>

          <h2>5. Modifications to Terms</h2>
          <p>
            We may update these Terms and Conditions at any time. Updates will be posted on this page, and continued use of our services means you accept the changes.
          </p>

          <h2>6. Contact Information</h2>
          <p>
            For any questions or concerns regarding these Terms and Conditions, please contact us at{" "}
            <a href="mailto:support@bravebpo.com" className="text-cyan-400 underline">
              support@bravebpo.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
