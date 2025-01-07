import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section>
      <main className="max-w-[90%] m-auto bg-[#111111] rounded-3xl">
        <div className="px-5 py-5 w-full flex-center flex-col gap-5">
          <div className="w-full flex-between mt-5">
            <div className="flex-[1] w-full flex-start">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">
                Our Expertise
              </h1>
            </div>
            <div className="flex-[1] w-full flex-end">
              <p className="text-lg text-neutral-400 font-normal text-left max-w-[400px]">
                transform ideas into reality by combining creativity, strategy,
                and expertise
              </p>
            </div>
          </div>
          <span className="h-[1px] w-full flex-center bg-neutral-500 my-10"></span>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center justify-items-center gap-10">
            <ExperienceCard
              title="Market Research"
              description="Dive deep into data to uncover insights that unlock your business potential. Our research-driven strategies help you stay ahead of the competition."
              image="/market research.jpg"
            />
            <ExperienceCard
              title="Ads Production"
              description="From ideation to execution, we design and produce campaigns that not only capture attention but deliver measurable results."
              image="/Ads Production.jpg"
            />
            <ExperienceCard
              title="Branding Strategies"
              description="Crafting identities that resonate. We shape branding narratives that connect emotionally and inspire trust."
              image="/Branding Strategies.jpg"
            />
            <ExperienceCard
              title="Web Development & Design"
              description="We bring your ideas to life by designing and optimizing websites that perform as good as they look. Whether you’re starting from scratch or need upgrades, we’ve got you covered."
              image="/market research.jpg"
            />
          </div>
          <span className="h-[1px] w-full bg-neutral-400 my-10"></span>
          <div>
            
          </div>
        </div>
      </main>
    </section>
  );
};

export default ExperienceSection;
