"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white pt-16 md:pt-20 lg:pt-24 text-lg text-gray-400"
      data-wow-delay=".1s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  className="w-full "
                  width={140}
                  height={30}
                />
              </Link>
              <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                Brave BPO is a leading outsourcing company committed to delivering excellence in
                customer support and business solutions. Our expert team ensures high-quality
                services tailored to your needs.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Useful Links</h2>
              <ul>
                <li>
                  <Link
                    href="/Services"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Legal</h2>
              <ul>
                <li>
                  <Link
                    href="/ResourceAugmentation"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    Resource Augmentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/PrivacyPolicy"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Support</h2>
              <ul>
                <li>
                  <Link
                    href="/contact"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* Copyright */}
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © 2025 Brave BPO Services. All rights reserved. |
            <Link href="/PrivacyPolicy" className="ml-2 hover:text-primary duration-300">
              Privacy Policy
            </Link>
            |
            <Link href="/TermsAndConditions" className="ml-2 hover:text-primary duration-300">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;