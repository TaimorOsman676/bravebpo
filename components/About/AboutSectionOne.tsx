"use client";

import Image from "next/image";
import {
  FaPhoneAlt,
  FaUserCheck,
  FaHeadset,
  FaFileAlt,
  FaUsers,
  FaExchangeAlt,
  FaGlobe,
  FaBullseye,
} from "react-icons/fa";

const services = [
  {
    title: "Lead Generation",
    subheading: "High-Converting Sales Funnels",
    icon: <FaUsers className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "We connect you with your ideal customers using precision targeting and data-driven lead generation strategies.",
  },
  {
    title: "Warm Transfers",
    subheading: "Seamless Conversations",
    icon: <FaUserCheck className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "Our warm transfer team ensures smooth handoffs to your agents, boosting close rates and client satisfaction.",
  },
  {
    title: "Cold Calling",
    subheading: "Turning Prospects Into Clients",
    icon: <FaPhoneAlt className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "Experienced agents create impact from the first hello—converting curiosity into conversions.",
  },
  {
    title: "Customer Support",
    subheading: "Multilingual 24/7 Helpdesk",
    icon: <FaHeadset className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "We provide empathetic, multilingual support across channels, keeping your customers loyal and happy.",
  },
  {
    title: "Transcription Services",
    subheading: "Precise & Confidential",
    icon: <FaFileAlt className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "From legal to healthcare, we deliver accurate transcripts with speed, confidentiality, and compliance.",
  },
  {
    title: "Blind Transfers",
    subheading: "Frictionless Call Routing",
    icon: <FaExchangeAlt className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform" />,
    description:
      "Connect callers to the right department fast—no hold-ups, just resolution.",
  },
];

const OurServicesSection = () => {
  return (
    <>
       <section id="ceo-message" className="py-24 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="overflow-hidden rounded-3xl border-4 border-primary shadow-xl">
              <Image
                src="/images/Team/imran-khans.jpg"
                alt="CEO Image"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-3xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                <span className="text-sky-400">Imran Khan Sadri</span>{" "} <br />
                <span className="text-white dark:text-white text-xl">(CEO Brave BPO)</span>
              </h3>
              <p className="text-lg    mb-3 group-hover:scale-110 transition-transform">
                At Brave BPO, we believe that great service begins with people. Over the last two decades, we’ve grown from humble beginnings into a trusted outsourcing partner for clients across the globe. Our success is rooted in authenticity, compassion, and innovation. We take pride in building long-term relationships, nurturing talent, and delivering solutions that truly matter. As CEO, I feel honored to lead a team that is driven by purpose and passion. Together, we are not just supporting businesses—we're shaping a future where collaboration, technology, and human connection redefine what outsourcing means.
              </p>
            </div>
          </div>
        </div>
      </section>
 <section className="py-28 px-5 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white">
      <div className="max-w-6xl mx-auto text-center">
    
           <h1 className="text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
           About Brave BPO
          </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Brave BPO is more than a service provider — it's a powerhouse of innovation, growth, and human-driven excellence. Our mission is to empower global businesses by offering top-tier BPO services combined with a passion for people and progress.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Vision</h3>
            <p className="text-gray-300">
              To become a global leader in outsourcing by combining cutting-edge technology with human talent and compassion.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Mission</h3>
            <p className="text-gray-300">
              Delivering scalable, cost-effective, and quality-driven BPO solutions that foster growth and create impact for our partners worldwide.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Core Strengths</h3>
            <p className="text-gray-300">
              A people-first approach, transparent communication, a relentless drive for excellence, and unmatched operational efficiency.
            </p>
          </div>
        </div>

        <div className="mt-20 text-left max-w-4xl mx-auto">
          <h3 className="text-3xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Why Brave BPO Stands Out</h3>
          <p className="text-gray-300 mb-6">
            At Brave BPO, our strength lies in our people. We nurture talent, embrace innovation, and lead with transparency. With decades of experience, we have consistently delivered exceptional results across sales, customer experience, and tech support.
          </p>
          <p className="text-gray-300 mb-6">
            From lead generation and live transfers to customer retention strategies, Brave BPO is committed to shaping success stories for businesses across the globe. Our high-performance culture, combined with ethical practices, ensures long-term partnerships built on trust.
          </p>
          <h4 className="text-2xl text-4xl md:text-5xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Key Operational Verticals</h4>
          
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Auto & Health Insurance Services</li>
            <li>Mortgage Refinance Campaigns</li>
            <li>Final Expense & Home Security</li>
            <li>ACA & Medicare (U65/CPL/CPA)</li>
            <li>Customer Support & Live Transfers</li>
          </ul>
          <p className="text-gray-300 mt-6">
            At Brave BPO, we believe in helping businesses grow — not just through services, but by becoming a reliable and results-driven partner. Together, we scale, solve, and succeed.
          </p>
        </div>
      </div>
    </section>
     
  
    </>
  );
};

export default OurServicesSection;
