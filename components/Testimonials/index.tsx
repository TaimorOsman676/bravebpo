import React from "react";

const CareerGrowth = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-[#0B1120] py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Built for Bold Careers
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          At Brave BPO, we don’t just create jobs — we shape futures. We invest in our team,
          offer global exposure, and provide the tools to thrive in today’s digital economy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "🎓 Career Growth",
              desc: "We provide continuous training, upskilling programs, and real career paths — not just tasks.",
            },
            {
              title: "🌐 Global Exposure",
              desc: "Work with U.S.-based clients and gain international experience that boosts your resume.",
            },
            {
              title: "💼 Leadership Opportunities",
              desc: "We promote from within. Many of our managers started as agents — your success is our plan.",
            },
            {
              title: "🤝 Inclusive Culture",
              desc: "We celebrate diversity, equity, and bold ideas. Everyone’s voice matters here.",
            },
            {
              title: "🛡️ Secure Work Environment",
              desc: "From infrastructure to job security, we protect what matters most — our people.",
            },
            {
              title: "🚀 Performance Rewards",
              desc: "Top talent is recognized and rewarded with bonuses, growth, and leadership access.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
