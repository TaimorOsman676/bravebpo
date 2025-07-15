import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
  <section
  id="home"
  className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 z-[-1] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero/her.png')" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  {/* Content */}
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-4xl to-pink-500 bg-clip-text mb-6 md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Smart Teams Brave Decisions Better Business
          </h1>
          <p className="mb-12 text-base !leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            We deliver elite BPO services that scale your growth, cut costs, and enhance performance.
            Partner with Brave — where fearless people create fearless results.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative SVG */}
  <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
    {/* ... existing SVG here ... */}
  </div>
  <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
    {/* ... existing SVG here ... */}
  </div>
</section>

      <section className="py-20   ">
  <div className="max-w-7xl mx-auto text-center">
   

    <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
Why Choose Brave BPO? </h2>

    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
      We’re not just a BPO — we’re your strategic growth partner. From tech-powered solutions to elite customer support, Brave BPO is built for bold brands.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      {[
        {
          title: '🌎 24/7 Global Support',
          desc: 'We operate across time zones to ensure your customers always have someone to talk to — day or night.',
        },
        {
          title: '⚡ Tech-Enabled Efficiency',
          desc: 'From AI to automation, we use modern tools to maximize speed, accuracy, and results.',
        },
        {
          title: '🧠 Skilled Talent Pool',
          desc: 'Our teams are trained to deliver premium experiences — from customer service to backend operations.',
        },
        {
          title: '📈 Scalable Growth',
          desc: 'Easily scale up your support and processes without increasing overheads or losing quality.',
        },
        {
          title: '🔒 Enterprise Security',
          desc: 'Your data is safe. We follow global security protocols and industry best practices.',
        },
        {
          title: '🤝 Real Partnerships',
          desc: 'We believe in long-term partnerships, not transactions. Your success is our success.',
        },
      ].map(({ title, desc }) => (
        <div
          key={title}
          className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-1xl md:text-3xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative py-24 px-6 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a]">
  {/* Background Glow Effects */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl animate-bounce" />

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Build a Future with Brave BPO</h2>

    <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
      We're more than just a workplace — we’re a launchpad for your career. Join a team that supports growth, rewards effort, and values every voice.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent">
      {[
        {
          icon: "📘",
          title: "Training That Elevates",
          desc: "Get advanced onboarding, continuous development, and leadership coaching.",
        },
        {
          icon: "🚀",
          title: "Fast-Track Growth",
          desc: "Opportunities to rise based on performance, not politics.",
        },
        {
          icon: "🌐",
          title: "Global Client Base",
          desc: "Work with global brands and learn international standards.",
        },
        {
          icon: "🎁",
          title: "Bonuses & Recognition",
          desc: "Your hard work is rewarded with monthly bonuses and shoutouts.",
        },
        {
          icon: "🤝",
          title: "Supportive Environment",
          desc: "We thrive together — teamwork, respect, and mentorship at every level.",
        },
        {
          icon: "🎓",
          title: "Career Certifications",
          desc: "Earn recognized certifications while you grow your skillset.",
        },
      ].map(({ icon, title, desc }) => (
        <div
          key={title}
          className=" to-pink-300  bg-clip-text mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text"
        >
          <div className="text-3xl mb-3">{icon}</div>
          <h3 className="mb-5 text-3xl to-pink-500  bg-clip-text mb-6 md:text-3xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">{title}</h3>
          <p className="text-white/70">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="relative  py-20 px-6  overflow-hidden bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a]">
  {/* Soft floating glow shapes */}
  <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-float z-0"></div>
  <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-emerald-400/10 rounded-full blur-2xl animate-pulse-slow z-0"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-4xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Why Brave BPO Stands Apart</h2>

    <div className="grid gap-10 md:grid-cols-2 ">
      {[
        {
          icon: "🌎",
          title: "Global Talent, Local Insight",
          desc: "Our team blends international expertise with a sharp understanding of the U.S. market — delivering culturally aligned service excellence.",
        },
        {
          icon: "⚙️",
          title: "Tech-Powered Efficiency",
          desc: "From AI-assisted workflows to real-time reporting, we leverage smart tools to maximize productivity and reduce response times.",
        },
        {
          icon: "🤝",
          title: "Client-First Culture",
          desc: "At Brave BPO, every interaction is driven by empathy, precision, and a mission to elevate your customer experience.",
        },
        {
          icon: "📈",
          title: "Built to Scale, Built to Last",
          desc: "Whether you're a startup or an enterprise, we adapt fast, grow with you, and maintain high standards — at every step.",
        },
      ].map(({ icon, title, desc }, idx) => (
        <div
          key={idx}
          className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="mb-4 flex items-center justify-center w-14 h-14 text-2xl bg-white/10 rounded-full">
            {icon}
          </div>
          <h3 className="text-1xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">{title}</h3>
          <p className="text-white/80">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



    </>
  );
};
  

export default Hero;
