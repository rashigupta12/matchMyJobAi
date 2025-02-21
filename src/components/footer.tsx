import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/logo.png"
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-12 mt-2 ">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact */}
        <div>
        <Image
            src={logo}
            alt="Logo"
            width={150}
            height={30}
            className="transition-transform duration-300 hover:scale-105"
          />
          <p className="text-gray-600 mt-2 font-semibold">Need help? 24/7</p>
          <p className="  mt-1 text-gray-600">+91-999 888 7777</p>
          <p className="text-gray-600 mt-1">E-304/305, New Ashok Nagar, Delhi - 96</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><a href="/UploadResume" className="hover:text-gray-900">Upload Resume</a></li>
          </ul>
        </div>

        {/* For Candidates & Social Media */}
        <div>
          <h2 className="text-lg font-semibold">For Candidates</h2>
          <ul className="mt-2 text-gray-600">
            <li><Link href="/aboutUs" className="hover:text-gray-900">About Us</Link></li>
            <li><Link href="/contactUs" className="hover:text-gray-900">Contact Us</Link></li>
          </ul>
          
          <h2 className="text-lg font-semibold mt-4">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <FaLinkedinIn className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <FaPinterestP className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
