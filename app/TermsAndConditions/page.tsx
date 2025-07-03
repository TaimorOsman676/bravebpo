// import SectionTitle from "../Common/SectionTitle";

const TermsAndConditions = () => {
  return (
    <section id="terms" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          {/* <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionTitle
              title="Terms and Conditions"
              paragraph="Please read these Terms and Conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms."
              mb="44px"
            />
          </div> */}

          <div className="prose dark:prose-invert max-w-4xl mx-auto">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing Brave BPO's website or using our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              Our services are intended for lawful use only. You agree not to use our services for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction while using the platform.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content provided on our website, including text, graphics, logos, and images, is the property of Brave BPO and is protected by copyright laws. You may not copy, reproduce, or distribute our content without prior written consent.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
            </p>

            <h2>5. Modifications</h2>
            <p>
              We reserve the right to modify or replace these Terms and Conditions at any time. We will provide notice of any changes by updating the date at the top of the terms page.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at support@bravebpo.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
