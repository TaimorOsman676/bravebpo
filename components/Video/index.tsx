"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10">
      <div className="container">
        <SectionTitle
          title="Brave BPO for a Greener Tomorrow"
          paragraph="We’re committed to sustainability — from our energy-efficient infrastructure to digital-first operations that reduce environmental impact."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-1">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md shadow-lg"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/about/green-planet.jpg"
                  alt="Eco video thumbnail" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    aria-label="Play sustainability video"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-80 text-primary hover:bg-opacity-100 transition"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current text-green-600"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942V1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="hCnzRiW-53s"
        onClose={() => setOpen(false)}
      /> */}

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-2xl animate-float z-0"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-emerald-400/10 rounded-full blur-2xl animate-pulse-slow z-0"></div>
    </section>
  );
};

export default Video;
