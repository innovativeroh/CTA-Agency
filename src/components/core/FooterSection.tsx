"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FooterSection = () => {
  const pathname = usePathname();

  const hiddenPaths = [
    /^\/studio$/,              
    /^\/studio\/login$/,       
    /^\/studio\/structure$/,       
    /^\/studio\/logout$/,      
    /^\/studio\/desk$/,        
    /^\/studio\/projects$/,    
    /^\/studio\/settings$/,    
    /^\/studio\/documents$/,   
  ] as RegExp[];

  const isHiddenPath = hiddenPaths.some((pattern) => pattern.test(pathname));

  if (isHiddenPath) {
    return null;
  }

  return (
    <section className="border-t-[1px] w-full border-neutral-300">
      <main className="max-w-[1440px] m-auto mt-5">
        <div className="px-5 py-10 w-full flex-between gap-5">
          <div className="flex-[1] w-full flex flex-col gap-7 items-start justify-start">
            <Image src={"/logo.svg"} alt="" width={100} height={190} />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium">CTA Agency</h1>
              <p className="text-3xl lg:text-4xl font-medium max-w-[500px]">
                DESIGNING DIGITAL STRATEGIES.
              </p>
            </div>
          </div>
          <div className="flex-[1] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-5">
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-xl font-bold">COMPANY</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Blog
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Careeers
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Pricing
              </Link>
            </div>
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-xl font-bold">RESOURCES</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Documentation
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Careeers
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Press Conferences
              </Link>
            </div>
            <div className="w-full flex flex-col gap-5 items-start justify-center">
              <h1 className="text-xl font-bold">LEGAL</h1>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Terms of service
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Privacy Policy
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Cookies Policy
              </Link>
              <Link href={"/"} className="text-lg font-medium text-gray-500">
                Data Processing
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 w-full flex-between gap-5 border-t-[1px] border-neutral-400">
          <div className="flex-[1] w-full flex-start">
            <p className="text-xl text-gray-400">© CTA. All rights reserved</p>
          </div>
          <div className="flex-[1] w-full flex-end gap-5">
            <Link
              href={"/"}
              className="p-3 rounded-full border-[1px] border-neutral-500"
            >
              <Instagram height={20} width={20} />
            </Link>
            <Link
              href={"/"}
              className="p-3 rounded-full border-[1px] border-neutral-500"
            >
              <Facebook height={20} width={20} />
            </Link>
            <Link
              href={"/"}
              className="p-3 rounded-full border-[1px] border-neutral-500"
            >
              <Twitter height={20} width={20} />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FooterSection;
