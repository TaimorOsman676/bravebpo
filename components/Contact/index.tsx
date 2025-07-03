import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
  <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      {/* Left Column: Form + Map */}
      <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
        <div
          className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s"
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            We’re Here to Help — Let’s Talk!
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            You can also fill out the form below, and we’ll get back to you within 24 hours.
          </p>
          <form>
            <div className="-mx-4 flex flex-wrap">
              {/* Name */}
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="w-full px-4">
                <div className="mb-8">
                  <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your Message"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
              </div>
              {/* Button */}
              <div className="w-full px-4">
                <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                  Send the message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* ✅ MAP ADDED HERE */}
        <div className="h-[300px] w-full overflow-hidden rounded-sm shadow-md bg-dark">
          <iframe
            title="Brave BPO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0170243589456!2d73.06130211521059!3d33.58955988073017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc120a8a5f9a7%3A0x8b0aa2a1723342b6!2sBank%20Road%2C%20Rawalpindi!5e0!3m2!1sen!2s!4v1688888888888"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        {/* End Map */}
      </div>

      {/* Right Column: Contact Info */}
      <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
        <NewsLatterBox />
        <div className="bg-white dark:bg-gray-800 rounded-sm p-6 shadow-md mt-8">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Let's Connect! 💬</h3>
          <p className="text-base text-body-color mb-4">
            We’d love to hear from you. Send us a message, and we’ll get back to you soon!
          </p>
          <div className="text-sm text-body-color space-y-3">
            <div>
              <strong className="text-dark dark:text-white">Brave BPO 2.0:</strong><br />
              Bank Road, Saddar, Rawalpindi
            </div>
            <div>
              <strong className="text-dark dark:text-white">Brave BPO 1.0:</strong><br />
              Hafeez Center, Bank Road, Saddar, Rawalpindi
            </div>
            <div>
              <strong className="text-dark dark:text-white">Phone:</strong> +92 51 5120147
            </div>
            <div>
              <strong className="text-dark dark:text-white">Email:</strong> career@bravebpo.com
            </div>
            <div>
              <strong className="text-dark dark:text-white">Open Hours:</strong><br />
              Mon - Sat: 5PM - 5AM<br />
              Sunday: CLOSED
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Contact;
