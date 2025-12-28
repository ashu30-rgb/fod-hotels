import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-fodBlue text-white py-10 px-6 md:px-16 relative">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            We&apos;d love to hear from you! Reach out with your questions, feedback, or collaboration ideas anytime.
          </p>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 border border-gray-400 rounded-full">
              <FaEnvelope className="text-fodOrange" />
            </div>
            <span className="text-gray-200 text-sm">info@fodhotels.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 border border-gray-400 rounded-full">
              <FaPhone className="text-fodOrange" />
            </div>
            <span className="text-gray-200 text-sm">+91 9779464405</span>
          </div>
        </div>

        {/* Quick Action */}
        <div className="md:ml-10">
          <h3 className="text-xl font-semibold mb-4">Quick Action</h3>
          <div className="grid grid-cols-2 gap-y-2 text-gray-300 text-sm">
            <Link href="/" className="hover:text-fodOrange">Home</Link>
            <Link href="/explore" className="hover:text-fodOrange">Explore</Link>
            <Link href="/about" className="hover:text-fodOrange">About</Link>
            <Link href="/faq" className="hover:text-fodOrange">FAQ&apos;s</Link>
            <Link href="/contact" className="hover:text-fodOrange">Contact Us</Link>
          </div>
        </div>

        {/* Social Connect */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Connect</h3>
          <div className="flex items-end gap-5 text-2xl">
            <a href="https://www.instagram.com/fod.holidays/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-fodOrange"><AiFillInstagram size={28} /></a>
            <a href="https://x.com/fodholidays" target="_blank" rel="noopener noreferrer" className="hover:text-fodOrange" aria-label="Twitter"><FaXTwitter /></a>
            <a href="https://www.facebook.com/people/FOD-Holidays/61559265012727/" target="_blank" rel="noopener noreferrer" className="hover:text-fodOrange" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@FODHolidays" aria-label="Youtube" target="_blank" rel="noopener noreferrer" className="hover:text-fodOrange"><BsYoutube /></a>
          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FOD Hotels — All Rights Reserved |
        <a href="#" className="hover:text-fodOrange ml-1"> Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
