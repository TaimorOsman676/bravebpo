import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
     <section
  id="home"
  className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
>
  <div className="absolute inset-0 z-[-1]">
 <video
  autoPlay
  muted
  loop
  className="w-full h-full object-cover"
  src="/images/hero/her.png" // Relative path to public/images/hero/home-video.mp4
>
  Your browser does not support the video tag.
</video>
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl to-pink-500  bg-clip-text mb-6 md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
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
  <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
    <svg
      width="450"
      height="556"
      viewBox="0 0 450 556"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="277"
        cy="63"
        r="225"
        fill="url(#paint0_linear_25:217)"
      />
      <circle
        cx="17.9997"
        cy="182"
        r="18"
        fill="url(#paint1_radial_25:217)"
      />
      <circle
        cx="76.9997"
        cy="288"
        r="34"
        fill="url(#paint2_radial_25:217)"
      />
      <circle
        cx="325.486"
        cy="302.87"
        r="180"
        transform="rotate(-37.6852 325.486 302.87)"
        fill="url(#paint3_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="184.521"
        cy="315.521"
        r="132.862"
        transform="rotate(114.874 184.521 315.521)"
        stroke="url(#paint4_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="356"
        cy="290"
        r="179.5"
        transform="rotate(-30 356 290)"
        stroke="url(#paint5_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="191.659"
        cy="302.659"
        r="133.362"
        transform="rotate(133.319 191.659 302.659)"
        fill="url(#paint6_linear_25:217)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25:217"
          x1="-54.5003"
          y1="-178"
          x2="222"
          y2="288"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_25:217"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
        >
          <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_25:217"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
        >
          <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_25:217"
          x1="226.775"
          y1="-66.1548"
          x2="292.157"
          y2="351.421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_25:217"
          x1="184.521"
          y1="182.159"
          x2="184.521"
          y2="448.882"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_25:217"
          x1="356"
          y1="110"
          x2="356"
          y2="470"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_25:217"
          x1="118.524"
          y1="29.2497"
          x2="166.965"
          y2="338.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
    <svg
      width="364"
      height="201"
      viewBox="0 0 364 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
        stroke="url(#paint0_linear_25:218)"
      />
      <path
        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
        stroke="url(#paint1_linear_25:218)"
      />
      <path
        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
        stroke="url(#paint2_linear_25:218)"
      />
      <path
        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
        stroke="url(#paint3_linear_25:218)"
      />
      <circle
        opacity="0.8"
        cx="214.505"
        cy="60.5054"
        r="49.7205"
        transform="rotate(-13.421 214.505 60.5054)"
        stroke="url(#paint4_linear_25:218)"
      />
      <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
      <defs>
        <linearGradient
          id="paint0_linear_25:218"
          x1="184.389"
          y1="69.2405"
          x2="184.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_25:218"
          x1="156.389"
          y1="69.2405"
          x2="156.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_25:218"
          x1="125.389"
          y1="69.2405"
          x2="125.389"
          y2="212.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_25:218"
          x1="93.8507"
          y1="67.2674"
          x2="89.9278"
          y2="210.214"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_25:218"
          x1="214.505"
          y1="10.2849"
          x2="212.684"
          y2="99.5816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint5_radial_25:218"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(220 63) rotate(90) scale(43)"
        >
          <stop offset="0.145833" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.08" />
        </radialGradient>
      </defs>
    </svg>
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
