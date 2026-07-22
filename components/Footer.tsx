import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#07182B] text-white pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Thin Gold Rule above footer columns */}
        <hr className="border-t border-antique-gold/30 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.5fr] gap-12 mt-10 mb-10">
          {/* Column 1: Logo and description */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.png"
                alt="Pristine Care Laundry Logo"
                width={140}
                height={70}
                style={{ height: "auto" }}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed m-0 max-w-sm">
              Premium laundry, dry cleaning, linen management and hygiene solutions for institutions demanding the highest standards of reliability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-antique-gold mb-6">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link href="/" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-antique-gold mb-6">
              Our Services
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link href="/services#laundry" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Premium Laundry
                </Link>
              </li>
              <li>
                <Link href="/services#drycleaning" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Luxury Dry Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#linen" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Linen Management
                </Link>
              </li>
              <li>
                <Link href="/services#hygiene" className="text-white/70 text-sm font-body hover:text-antique-gold hover:pl-1 transition-all duration-300">
                  Hygiene Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col">
            <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-antique-gold mb-6">
              Contact Us
            </h4>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Plot No. 74/74A/1, Block F-2, MIDC<br />
              Pimpri Colony, Pimpri-Chinchwad<br />
              Maharashtra – 411018
            </p>
            <p className="text-sm text-white/70 mb-1 leading-relaxed">
              GST: 27ABJFP4261C1ZB
            </p>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Email: info@pristinecare.in
            </p>

            {/* Social Icons (outline style, white) */}
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-antique-gold hover:text-antique-gold transition-all duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-antique-gold hover:text-antique-gold transition-all duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-antique-gold hover:text-antique-gold transition-all duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line at the bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body font-light text-[11px] text-white/50 tracking-wider m-0">
            &copy; {new Date().getFullYear()} Pristine Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
