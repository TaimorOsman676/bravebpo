
const Career = () => {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Join Brave BPO</h1>
        <p className="text-lg max-w-2xl mx-auto">Build your future with a team that empowers innovation and values every voice.</p>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Work With Brave BPO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p>We help you grow professionally with continuous training and promotions.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Supportive Culture</h3>
            <p>Work in a friendly environment that values collaboration and respect.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p>Enjoy great salary packages, bonuses, and healthcare perks.</p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
        <div className="max-w-6xl mx-auto">
        </div>
      </section>

      {/* Apply Now Form */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        </div>
      </section>
    </div>
  );
};

export default Career;
