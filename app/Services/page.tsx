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
  FaRocket,
  FaChartLine,
  FaHandsHelping,
  FaRegLightbulb,
  FaCogs,
  FaHandshake,
  FaSearch,
  FaMousePointer,
  FaEnvelopeOpenText,
  FaPenNib,
  FaChartPie
} from "react-icons/fa";

const OurServicesSection = () => {
  const services = [
    {
      title: "Lead Generation",
      description:
        "Our lead generation strategies help you connect with the right audience, delivering high-converting leads that drive sales and business growth.",
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Warm Transfers",
      description:
        "We ensure smooth and qualified transfers to your sales team, increasing engagement and conversion rates while enhancing customer experience.",
      subheading: "Seamless Connections for Higher Conversions",
      icon: <FaUserCheck className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Cold Calling",
      description:
        "Our trained professionals use targeted cold-calling techniques to generate interest, nurture potential clients, and drive meaningful business interactions.",
      subheading: "Turning Cold Prospects into Loyal Customers",
      icon: <FaPhoneAlt className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Customer Support",
      description:
        "Delivering top-tier customer service with multilingual support, ensuring customer satisfaction, retention, and loyalty for your business.",
      subheading: "Exceptional Support, 24/7 Assistance",
      icon: <FaHeadset className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Transcription Services",
      description:
        "We provide precise transcription services for businesses, legal firms, and healthcare professionals, ensuring high-quality documentation with fast turnaround times.",
      subheading: "Accurate & Efficient Transcription Solutions",
      icon: <FaFileAlt className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Blind Transfer",
      description:
        "Our blind transfer service ensures that calls are instantly redirected to the right department or agent without prior introduction. This speeds up response times and improves resolution.",
      subheading: "Fast and Efficient Call Routing for Seamless Communication",
      icon: <FaExchangeAlt className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Startup Acceleration",
      description:
        "Helping emerging businesses scale rapidly through operational excellence, dedicated teams, and market insights.",
      icon: <FaRocket className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Using analytics and KPIs to fine-tune strategies and enhance overall service performance.",
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Client Onboarding",
      description:
        "Structured onboarding process designed to ensure fast integration and consistent alignment with client objectives.",
      icon: <FaHandsHelping className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Innovation Lab",
      description:
        "A creative hub focused on continuous improvement, service innovation, and emerging technology adaptation.",
      icon: <FaRegLightbulb className="text-4xl text-primary mb-4" />,
    },
    {
      title: "BPO Infrastructure Management",
      description:
        "From telephony systems to CRM integration, we build the backbone of operational excellence—enabling uninterrupted service delivery.",
      icon: <FaCogs className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Dedicated Client Partnership",
      description:
        "Beyond services—we co-create success. Our model ensures consistent communication, strategic guidance, and aligned goals.",
      icon: <FaHandshake className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Increase visibility, drive engagement, and boost ROI through expert SEO, PPC, and social media marketing.",
      icon: <FaSearch className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Conversion-Focused Campaigns",
      description:
        "Tailored strategies including content creation, email marketing, and performance tracking to maximize results.",
      icon: <FaMousePointer className="text-4xl text-primary mb-4" />,
    },
    {
      title: "Strategic Planning & Analytics",
      description:
        "From market analysis to campaign execution, we turn insights into actionable growth strategies.",
      icon: <FaChartPie className="text-4xl text-primary mb-4" />,
    }
  ];

  return (
    <>
     <section className="py-28 px-6 bg-gradient-to-br from-[#0d0c20] via-[#1a002c] to-[#0d0c20] text-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
         
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Brave BPO brings together smart strategy, technology, and human skill to help you scale, serve, and succeed — across all verticals.
        </p>


        <div className="mt-20 text-left max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">How We Work</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Business Analysis:</strong> Understanding your workflow and pain points.</li>
            <li><strong>Talent Acquisition & Training:</strong> Hiring experts aligned with your vision.</li>
            <li><strong>Seamless Integration:</strong> Smooth deployment with minimal disruption.</li>
            <li><strong>Performance Monitoring:</strong> Continuous evaluation and enhancement.</li>
            <li><strong>Scalable Delivery:</strong> Flexible teams that grow as your business evolves.</li>
          </ul>

          <h3 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Virtual Staffing Services</h3>
          <p className="text-gray-300 mb-6">
            Looking for skilled remote professionals? Brave BPO connects you with global talent in areas like admin support, digital marketing, customer service, and more—helping you scale quickly and affordably.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Flexible engagement models</li>
            <li>Global talent pool</li>
            <li>Reduced operational costs</li>
            <li>Dedicated team management</li>
          </ul>
        </div>
      </div>
    </section>
     <section className="py-28 px-6 bg-gradient-to-tr from-[#1a002c] via-[#0d0c20] to-[#1a002c] text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Unlocking Potential Through Smart BPO Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Brave BPO combines innovation, experience, and technology to create outsourcing services that don't just meet standards—they set them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Innovation-Driven</h4>
            <p className="text-gray-300">We deploy cutting-edge tools and creative strategies to drive value.</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Quality Excellence</h4>
            <p className="text-gray-300">Each process is optimized for performance and customer satisfaction.</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Custom Solutions</h4>
            <p className="text-gray-300">Tailored workflows that adapt to your business and goals.</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Integrated Support</h4>
            <p className="text-gray-300">From frontend to backend, we ensure every touchpoint works in sync.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-28 px-5 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
          Our Core Services
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Brave BPO brings together smart strategy, technology, and human skill to help you scale, serve, and succeed — across all verticals.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                {service.title}
              </h3>
              {service.subheading && (
                <p className="italic text-sm text-gray-400 mb-2">
                  {service.subheading}
                </p>
              )}
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-28 px-6 bg-gradient-to-br from-[#0c001d] via-[#14002b] to-[#0c001d]  font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
          Need Drive Engagement, Increase Visibility, and Maximize ROI?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          Welcome to Touchstone Communications—your trusted partner in digital marketing excellence. Our expert-driven strategies help brands increase online visibility, capture high-quality leads, and achieve sustainable growth.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-left">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <FaSearch className="text-3xl text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-2 ">Search Engine Optimization</h4>
            <p className="text-gray-300">Improve search rankings, drive organic traffic, and boost brand credibility.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <FaMousePointer className="text-3xl text-primary mb-4" />
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Pay-Per-Click Advertising</h4>
            <p className="text-gray-300">Maximize ROI with highly targeted paid campaigns that convert.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <FaEnvelopeOpenText className="text-3xl text-primary mb-4" />
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Email Marketing</h4>
            <p className="text-gray-300">Drive retention and engagement with personalized email campaigns.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <FaPenNib className="text-3xl text-primary mb-4" />
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Content Marketing</h4>
            <p className="text-gray-300">Create compelling, SEO-optimized content that educates and converts.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <FaChartPie className="text-3xl text-primary mb-4" />
            <h4 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Market Analysis</h4>
            <p className="text-gray-300">Gain insights and make data-driven decisions for smarter marketing.</p>
          </div>
        </div>

        <div className="mt-20 text-left max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">How We Work</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Strategic Planning:</strong> Customized strategies aligned to your goals.</li>
            <li><strong>Campaign Execution:</strong> SEO, PPC, content & social media deployment.</li>
            <li><strong>Performance Tracking:</strong> Live campaign monitoring and adjustments.</li>
            <li><strong>Data-Driven Optimization:</strong> Real-time analytics for growth.</li>
            <li><strong>Scalability & Growth:</strong> Flexible strategies built to expand with you.</li>
          </ul>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default OurServicesSection;
