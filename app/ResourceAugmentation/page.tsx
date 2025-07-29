"use client"; // Marks this as a Client Component to resolve the 'client-only' import conflict

import Link from "next/link";

export default function ResourceAugmentation() {
  return (
    <div className="bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-gradient-to-r from-[#0b001a] to-[#14002b] shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">Brave BPO</div>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
            <Link href="/services" className="hover:text-cyan-300 transition">Services</Link>
            <Link href="/about" className="hover:text-cyan-300 transition">About</Link>
            <Link href="/contact" className="hover:text-cyan-300 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Balanced Single Column */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          

          <h1 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Explore Brave BPO Services
          </h1>
          <div className="content max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              Welcome to Brave BPO, offering expert IT, telemarketing, and digital marketing to boost your business.
            </p>
         
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border-2 border-cyan-500 hover:border-cyan-300 hover:text-cyan-300 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* IT Services Section - 3x2 Grid */}
      <section className="py-16 px-6 bg-white/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            IT Services by Brave BPO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Software Development</h3>
              <p className="text-gray-300">
                Brave BPO offers custom software development with expert coders, creating innovative solutions tailored to your business requirements efficiently.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Cybersecurity</h3>
              <p className="text-gray-300">
                Our BPO team provides top-notch cybersecurity, protecting your data with advanced threat detection and encryption techniques.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Cloud Management</h3>
              <p className="text-gray-300">
                Brave BPO manages cloud services, ensuring scalability and security with expert support for your business infrastructure.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">IT Consulting</h3>
              <p className="text-gray-300">
                Our BPO IT consultants offer strategic advice, optimizing your technology stack for better performance and cost efficiency.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Network Support</h3>
              <p className="text-gray-300">
                Brave BPO provides reliable network support, maintaining connectivity and performance with proactive monitoring and fixes.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Data Management</h3>
              <p className="text-gray-300">
                Our BPO team handles data management, ensuring secure storage and analysis to support your business decisions effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telemarketing Services Section - 2x2 Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Telemarketing Services by Brave BPO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Inbound Calls</h3>
              <p className="text-gray-300">
                Brave BPO handles inbound calls with a skilled team, providing excellent customer service 24/7 to meet your business needs.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Outbound Sales</h3>
              <p className="text-gray-300">
                Our BPO team drives sales with outbound calls, targeting clients effectively to boost your revenue and market reach.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Lead Qualification</h3>
              <p className="text-gray-300">
                Brave BPO qualifies leads through telemarketing, ensuring you connect with potential customers ready to engage.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Customer Surveys</h3>
              <p className="text-gray-300">
                Our BPO conducts customer surveys, gathering valuable feedback to improve your services and customer satisfaction.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Appointment Booking</h3>
              <p className="text-gray-300">
                Brave BPO books appointments efficiently, supporting your sales team with timely and organized scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section - 2x2 Grid */}
      <section className="py-16 px-6 bg-white/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl to-pink-500  bg-clip-text mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
            Digital Marketing Services by Brave BPO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Search Engine Optimization</h3>
              <p className="text-gray-300">
                Brave BPO improves your website ranking with SEO, using keywords and content to attract more organic traffic.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Social Media Ads</h3>
              <p className="text-gray-300">
                Our BPO team creates effective social media ads, targeting audiences to enhance your brand visibility and engagement.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Content Creation</h3>
              <p className="text-gray-300">
                Brave BPO develops engaging content, boosting your online presence with blogs and articles for customer interest.
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-weight-600 text-cyan-300 mb-2">Email Campaigns</h3>
              <p className="text-gray-300">
                Our BPO designs targeted email campaigns, helping you connect with customers and increase conversions effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Balanced Single Column */}
     

      {/* Footer */}


      {/* Inline CSS */}
      <style jsx>{`
        .font-weight-600 {
          font-weight: 600;
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}