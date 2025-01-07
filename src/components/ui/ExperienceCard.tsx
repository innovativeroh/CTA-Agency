import { CornerRightUp } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  title?: string;
  description?: string;
  image?: string;
}

const ExperienceCard = ({title, description, image}: ExperienceCardProps) => {
  return (
  <div className="px-5 py-5 max-w-[400px] w-full bg-[#2E2E2E] flex-center flex-col gap-5 rounded-3xl">
      <div className="flex-[1] w-full flex-center flex-col">
        <div className="w-full flex-between gap-5">
          <h1 className="text-3xl text-white font-bold">{title || `missing`}</h1>
          <div className="py-4 rounded-full bg-white/10">
            <CornerRightUp
              height={1080}
              width={1920}
              color="white"
              className="h-10 w-auto"
            />
          </div>
        </div>
        <span className="h-[1px] w-full bg-neutral-400 my-5"></span>
        <p className="text-sm text-neutral-400 font-bold">
          {description || `missing`}
        </p>
      </div>
      <div className="flex-[1] w-full flex-center flex-col mt-3">
        <Image src={image || '/'} alt="" width={1920} height={1080} className="w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default ExperienceCard;
