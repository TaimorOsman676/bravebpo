import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Side */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInLeft relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/Team/imran-khan.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/braveai.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInRight max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h5 className="text-2xl  md:text-3xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Empowering Global Brands
                </h5>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Brave BPO partners with forward-thinking companies to deliver exceptional call center and back-office services that scale effortlessly across markets.
                </p>
              </div>

              <div className="mb-9">
                <h5 className="text-2xl  md:text-3xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Innovation Meets Execution
                </h5>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We integrate modern automation tools and trained agents to blend smart systems with human empathy — delivering unmatched performance.
                </p>
              </div>

              <div className="mb-1">
                <h5 className="text-2xl  md:text-3xl mb-6 font-weight-600 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Culture of Growth
                </h5>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Brave BPO, we foster a future-forward culture where talent thrives, teams collaborate, and every client journey is backed by passion and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
