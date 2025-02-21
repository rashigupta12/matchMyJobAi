'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed  z-50 top-0  w-full bg-white p-4 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={40}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="text-gray-700 transition-colors duration-300 hover:underline">
            Home
          </Link>
          <Link href="/aboutUs" className="text-gray-700 transition-colors duration-300 hover:underline">
            About us
          </Link>
          <Link href="/contactUs" className="text-gray-700 transition-colors duration-300 hover:underline">
            Contact us
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-gray-700">I am a</span>
          <Link href="/JobSeeker">
            <Button variant="outline" className="transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
              Job Seeker
            </Button>
          </Link>
          <Link href="/Panelist">
            <Button variant="outline" className="transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
              Panelist
            </Button>
          </Link>
          <Link href="/UploadResume">
            <Button variant="outline" className="transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white">
              Upload Resume
            </Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 shadow-lg">
          <Link href="/" className="text-gray-700 transition-colors duration-300 hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/aboutUs" className="text-gray-700 transition-colors duration-300 hover:underline" onClick={() => setIsOpen(false)}>
            About us
          </Link>
          <Link href="/contactUs" className="text-gray-700 transition-colors duration-300 hover:underline" onClick={() => setIsOpen(false)}>
            Contact us
          </Link>
          <Link href="/JobSeeker" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">Job Seeker</Button>
          </Link>
          <Link href="/Panelist" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">Panelist</Button>
          </Link>
          <Link href="/UploadResume" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">Upload Resume</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;