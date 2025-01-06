"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  Info,
  Briefcase,
  HelpCircle
} from "lucide-react";

interface NavLink {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !toggleRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeSidebar = (): void => setIsOpen(false);

  const navLinks: NavLink[] = [
    { href: "#", text: "About Us", icon: <Info className="w-5 h-5" /> },
    { href: "#", text: "Services", icon: <Briefcase className="w-5 h-5" /> },
    { href: "#", text: "Our Work", icon: <Home className="w-5 h-5" /> },
    { href: "#", text: "FAQ", icon: <HelpCircle className="w-5 h-5" /> }
  ];

  return (
    <header className="fixed w-full z-[10]">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Main Header */}
      <div className="p-4 md:p-8 bg-[#EDF0DA] bg-opacity-20 border-b-[1px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              ref={toggleRef}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="BlauerNue-Semibold relative group"
                >
                  <span className="relative">
                    {link.text}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#BE1E2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Image
                src={Logo}
                alt="Brand"
                width={80}
                height={80}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <Link href="#" className="BlauerNue-Semibold relative group">
                <span className="relative">
                  FAQ
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#BE1E2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
              </Link>
              <Link
                href="#"
                className="BlauerNue-Semibold bg-[#BE1E2D] py-2 px-4 text-[#EDF0DA] flex items-center gap-2 rounded-lg hover:bg-red-800 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Image src={Logo} alt="Brand" width={60} height={60} />
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                onClick={closeSidebar}
              >
                <span className="text-gray-600 group-hover:text-[#BE1E2D] transition-colors">
                  {link.icon}
                </span>
                <span className="BlauerNue-Semibold group-hover:text-[#BE1E2D] transition-colors">
                  {link.text}
                </span>
              </Link>
            ))}
            <Link
              href="#"
              className="block mt-6 BlauerNue-Semibold bg-[#BE1E2D] py-3 px-4 text-[#EDF0DA] rounded-lg hover:bg-red-800 transition-colors text-center"
              onClick={closeSidebar}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
