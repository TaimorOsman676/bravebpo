const PrivacyPolicy = () => {
  return (
    <section
      id="privacy-policy"
      className="pt-16 md:pt-20 lg:pt-28 px-4 md:px-8 lg:px-20 text-gray-100 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] min-h-screen"
    >
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text mb-6 font-bold text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 text-center mb-8">Last updated: July 28, 2025</p>

        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
          and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the
          help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Privacy Policy Generator</a>.
        </p>

        <h2 className="text-2xl font-semibold text-purple-400 mt-10 mb-3">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Interpretation</h3>
        <p className="mb-4">
          The words with the initial letter capitalized have meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless of whether they appear in singular or plural.
        </p>

        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Definitions</h3>
        <p className="mb-2">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><strong>Account:</strong> a unique account created for You to access our Service or parts of it.</li>
          <li><strong>Affiliate:</strong> an entity that controls or is under common control with a party...</li>
          <li><strong>Company:</strong> BPO LLP, Bank Road, Saddar, Rawalpindi.</li>
          <li><strong>Cookies:</strong> small files placed on Your device to store browsing data.</li>
          <li><strong>Country:</strong> Pakistan</li>
          <li><strong>Device:</strong> any device like a phone, tablet, or computer used to access the Service.</li>
          <li><strong>Personal Data:</strong> any information identifying an individual.</li>
          <li><strong>Service:</strong> refers to this Website.</li>
          <li><strong>Service Provider:</strong> third-party processors helping operate the Service.</li>
          <li><strong>Usage Data:</strong> data collected automatically during Service use.</li>
          <li><strong>Website:</strong> <a href="https://www.bravebpo.com" target="_blank" className="text-cyan-400 hover:underline">bravebpo.com</a></li>
          <li><strong>You:</strong> the user or entity using the Service.</li>
        </ul>

        {/* You can continue the same format for remaining sections */}
        {/* Example: Contact Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">Contact Us</h2>
          <p className="mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>Email: <a href="mailto:info@bravebpo.com" className="text-cyan-400 hover:underline">info@bravebpo.com</a></li>
            <li>Phone: <a href="tel:+92515120147" className="text-cyan-400 hover:underline">+92 51 5120147</a></li>

            <li>
  <a
    href="https://www.bravebpo.com/contact"
    className="text-cyan-400 hover:underline"
    // target="_blank"
    // rel="noopener noreferrer"
  >
    Contact Brave BPO
  </a>
</li>

          </ul>
          
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
