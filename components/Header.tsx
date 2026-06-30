"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] overflow-hidden transition-all duration-500 ${scrolled
          ? "bg-warm-off-white/98 backdrop-blur-md shadow-[0_4px_30px_rgba(27,43,75,0.10)]"
          : "bg-warm-off-white"
          }`}
      >
        {/* Top gold rule */}
        <div className="h-[2px] bg-antique-gold w-full" />

        <div className="max-w-[1280px] mx-auto px-8 lg:px-12 flex items-center justify-between h-[88px]">

          {/* Logo — padded from the top gold rule */}
          <Link href="/" className="flex-shrink-0 group pt-1">
            <Image
              src="/logo.png"
              alt="Pristine Care Laundry & Dry Cleaning"
              width={100}
              height={70}
              className="object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 font-body text-[11.5px] font-semibold tracking-[0.16em] uppercase transition-colors duration-200 group/link ${isActive
                    ? "text-antique-gold"
                    : "text-charcoal hover:text-near-black"
                    }`}
                >
                  {link.name}
                  {/* Sliding underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[1.5px] bg-antique-gold origin-center transition-transform duration-300 ${isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/link:scale-x-100"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side: vertical divider + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Thin vertical divider */}
            <span className="w-px h-7 bg-muted-stone" />

            <Link
              href="/contact?service=proposal"
              className="group/cta inline-flex items-center gap-2 px-6 py-3 text-[11px] font-body font-semibold tracking-[0.16em] uppercase bg-near-black text-warm-off-white border border-near-black transition-all duration-300 hover:bg-bright-gold hover:border-bright-gold hover:text-white"
            >
              Request a Proposal
              {/* Arrow icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              >
                <path
                  d="M1 6h10M7 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden relative z-[1001] flex flex-col justify-center items-end w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-[1.5px] bg-near-black transition-all duration-400 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
                }`}
            />
            <span
              className={`h-[1.5px] bg-near-black transition-all duration-300 ${mobileMenuOpen ? "w-6 opacity-0" : "w-4"
                }`}
            />
            <span
              className={`h-[1.5px] bg-near-black transition-all duration-400 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-5"
                }`}
            />
          </button>
        </div>

        {/* Bottom border — subtle separator from content */}
        <div
          className={`h-px w-full transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100 bg-muted-stone"
            }`}
        />
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ background: "var(--color-warm-off-white)" }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Gold top rule */}
        <div className="h-[2px] bg-antique-gold w-full flex-shrink-0" />

        {/* Mobile header bar with logo + close */}
        <div className="flex items-center justify-between px-6 h-[88px] border-b border-muted-stone flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Pristine Care"
            width={140}
            height={70}
            style={{ height: "auto" }}
            className="object-contain"
          />
          <button
            className="w-10 h-10 flex items-center justify-center text-near-black"
            onClick={handleLinkClick}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-1 px-8 pb-12">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`w-full max-w-[320px] text-center py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] border-b border-muted-stone/50 transition-all duration-300 hover:text-antique-gold hover:pl-4 ${isActive ? "text-antique-gold" : "text-near-black"
                  }`}
                style={{ transitionDelay: mobileMenuOpen ? `${80 + i * 40}ms` : "0ms" }}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact?service=proposal"
            className="mt-8 w-full max-w-[320px] flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-body font-semibold tracking-[0.16em] uppercase bg-near-black text-warm-off-white border border-near-black hover:bg-bright-gold hover:border-bright-gold hover:text-white transition-all duration-300"
            onClick={handleLinkClick}
          >
            Request a Proposal
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>

        {/* Footer tagline in mobile menu */}
        <p className="text-center font-body text-[10px] tracking-[0.2em] text-charcoal/40 uppercase pb-8">
          Fresh. Immaculate. Every Time.
        </p>
      </div>
    </>
  );
}
