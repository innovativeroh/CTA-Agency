import React from "react";
import Marquee from "../ui/marquee";
import { OurClient } from "@/constants";
import Image from "next/image";

export const OurClientsSection = () => {
  return (
    <section className="mt-10">
      <main>
        <div className="py-10 w-full flex-center flex-col gap-10">
          <div className="px-5 w-full flex-start gap-3 max-w-[90%] m-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold max-w-[700px]">
              Some of our awesome clients we had the pleasure of working with.
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-3">
          <div className="w-full overflow-hidden">
            <Marquee className="[--duration:45s]">
              <div className="flex items-center justify-center space-x-3 md:space-x-5">
                {OurClient.map((link, key) => (
                  <div key={key} className="px-3 md:px-5">
                    <Image
                      src={link.imageUrl}
                      alt={link.title}  
                      height={100}
                      width={160}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          </div>
        </div>
      </main>
    </section>
  );
};
