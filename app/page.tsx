"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Pristine Care has consistently met our high standards for linen quality and hygiene compliance. Their 24-hour turnaround has stabilized our daily hospitality operations.",
      name: "Rajesh K. Mehta",
      title: "General Manager",
      organization: "The Grand Palace Residency",
    },
    {
      quote: "In healthcare, sanitization is non-negotiable. Pristine Care provides medical-grade laundry processing that meets our stringent audits and regulatory standards.",
      name: "Dr. Ananya Sharma",
      title: "Chief of Operations",
      organization: "Apex Care Hospital",
    },
    {
      quote: "Their linen management service has reduced our inventory replacement costs by 15% through meticulous tracking and quality preservation protocols.",
      name: "Vikram Sen",
      title: "Director of Procurement",
      organization: "Sovereign Hotels Group",
    },
  ];

  return (
    <div className="overflow-x-hidden w-full bg-warm-off-white text-near-black">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center py-16 md:py-24">
        <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">

          {/* Left: text */}
          <Reveal direction="right" duration={800}>
            <div>
              <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-5 block">
                PRISTINE CARE
              </span>
              <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-near-black mb-6 tracking-wide leading-tight">
                Immaculate Care.{" "}
                <span className="text-antique-gold">Exceptional Standards.</span>
              </h1>
              <p className="font-body font-light text-base md:text-lg text-charcoal mb-10 leading-relaxed max-w-xl">
                Delivering premium laundry, dry cleaning, linen management and hygiene solutions with uncompromising quality, precision and reliability.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-warm-off-white border border-[#162A40] hover:bg-bright-gold hover:border-bright-gold hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(17,17,17,0.2)]"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/contact?service=consultation"
                  className="px-7 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-transparent text-near-black border border-antique-gold hover:bg-antique-gold hover:text-white transition-all duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: image card */}
          <Reveal direction="left" duration={900} delay={100}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-white/60 rounded-3xl border border-muted-stone rotate-2 scale-105" />
              <div className="relative z-10 w-full max-w-[500px] p-4 bg-white border border-muted-stone rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden">
                <Image
                  src="/hero_linen.png"
                  alt="Neatly folded orange and white towels with soap bubbles"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST METRICS ─────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-muted-stone">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal direction="up" duration={800}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: "100,000+", label: "Kg Linen Processed Monthly" },
                { val: "99.9%", label: "Hygiene Compliance" },
                { val: "24-Hour", label: "Turnaround Guarantee" },
                { val: "500+", label: "Satisfied B2B Clients" },
              ].map((m, i) => (
                <div key={i} className="bg-warm-off-white border border-muted-stone border-t-[3px] border-t-antique-gold p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
                  <span className="block font-display text-3xl md:text-4xl font-semibold text-near-black mb-2">{m.val}</span>
                  <span className="font-body font-semibold text-[10px] text-charcoal tracking-widest uppercase">{m.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMPANY INTRO ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal direction="right" duration={800}>
              <div>
                <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-3 block">WHO WE ARE</span>
                <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black leading-tight">
                  The Art of Professional Care
                </h2>
                <div className="w-14 h-[2px] bg-antique-gold my-6" />
                <p className="font-body font-light text-base leading-relaxed text-charcoal mb-5">
                  Pristine Care provides premium laundry and linen management solutions designed for organisations and individuals who value excellence. Every process is carefully managed to ensure impeccable quality, hygiene and consistency from collection to delivery.
                </p>
                <p className="font-body font-light text-sm leading-relaxed text-charcoal/80">
                  Our advanced facility integrates eco-friendly chemistry with precise thermal controls, preserving fabric lifespan while ensuring complete microbiological sanitization.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" duration={800} delay={100}>
              <div className="border border-muted-stone bg-white shadow-sm rounded-sm overflow-hidden">
                <Image
                  src="/company_intro.png"
                  alt="Industrial commercial laundry facility"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-muted-stone">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal direction="up" duration={800}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-3 block">OUR SERVICES</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">What We Deliver</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                href: "/services#laundry",
                img: "/services_laundry.png",
                alt: "Commercial laundry operation with stacked white towels",
                title: "Premium Laundry Services",
                desc: "Institutional laundry solutions designed for hotels, hospitals, industries and corporate clients requiring structured processing.",
                icon: (
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="12" cy="13" r="5" /><circle cx="12" cy="13" r="2" />
                    <line x1="7" y1="7" x2="7.01" y2="7" /><line x1="17" y1="7" x2="17.01" y2="7" />
                  </svg>
                ),
              },
              {
                href: "/services#drycleaning",
                img: "/services_dryclean.png",
                alt: "Premium dry cleaning store with garment racks",
                title: "Luxury Dry Cleaning",
                desc: "Specialist fabric care and stain treatment protocols for premium garments, uniforms, and delicate interior fabrics.",
                icon: (
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                    <path d="M12 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
                    <path d="M12 5v3m-8 4l8-4 8 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
                  </svg>
                ),
              },
              {
                href: "/services#linen",
                img: "/services_linen.png",
                alt: "Organised linen management storage room",
                title: "Linen Management",
                desc: "End-to-end linen lifecycle management, inventory tracking, usage audits, and scheduled replenishment for high-volume hotels.",
                icon: (
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                    <rect x="5" y="3" width="14" height="18" rx="1" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                href: "/services#hygiene",
                img: "/services_hygiene.png",
                alt: "Medical grade hygiene processing facility",
                title: "Hygiene Solutions",
                desc: "Advanced disinfection protocols and certified sanitisation services tailored to healthcare facility requirements.",
                icon: (
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                ),
              },
            ].map((svc, i) => (
              <Reveal key={i} direction="up" duration={800} delay={i % 2 === 0 ? 0 : 100} className="h-full">
                <div className="bg-warm-off-white border border-muted-stone p-8 flex flex-col gap-5 h-full group transition-all duration-400 hover:-translate-y-1 hover:border-antique-gold hover:shadow-[0_12px_28px_rgba(234,88,12,0.08)]">
                  <div className="flex items-center gap-4">
                    {svc.icon}
                    <h3 className="font-display font-medium text-xl text-near-black group-hover:text-antique-gold transition-colors duration-300">{svc.title}</h3>
                  </div>
                  <div className="overflow-hidden border border-muted-stone h-[190px] relative rounded-sm">
                    <Image
                      src={svc.img}
                      alt={svc.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-body font-light text-sm leading-relaxed text-charcoal flex-grow">{svc.desc}</p>
                  <Link href={svc.href} className="inline-flex items-center font-body font-semibold text-xs text-antique-gold tracking-wider hover:opacity-80 transition-all duration-300">
                    Learn More <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal direction="up" duration={800}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-3 block">WHY CHOOSE US</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Built on Standards That Don&apos;t Compromise</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Advanced Processing Technology", desc: "We operate modern, barrier-type washing machines with programmable logic controllers to maintain precise wash profiles.", icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" /> },
              { title: "Stringent Quality Assurance", desc: "Every batch of processed linen undergoes inspection protocols measuring fabric strength, whiteness indexes, and pH balances.", icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
              { title: "Dedicated Client Support", desc: "Corporate clients are assigned a dedicated account manager to coordinate schedules, logistics, and resolve special fabric care requests.", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
              { title: "Sustainable Operations", desc: "Our facility implements water reclamation recycling loops and high-efficiency thermal units to minimize environmental footprints.", icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></> },
              { title: "Timely Collection and Delivery", desc: "Our private fleet maintains strict transit schedules to ensure clients receive on-time daily drop-offs without disruption.", icon: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></> },
              { title: "Industry-Specific Expertise", desc: "We structure wash procedures based on strict hospitality linen lifecycles, healthcare bacteriological controls, and industrial soil removal.", icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
            ].map((f, i) => (
              <Reveal key={i} direction="up" duration={700} delay={i * 60}>
                <div className="flex flex-col gap-4 p-7 bg-white border border-muted-stone rounded-sm h-full transition-all duration-300 hover:-translate-y-1 hover:border-antique-gold hover:shadow-[0_10px_24px_rgba(234,88,12,0.07)]">
                  <div className="text-antique-gold">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">{f.icon}</svg>
                  </div>
                  <h3 className="font-display font-medium text-lg text-near-black">{f.title}</h3>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed m-0">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#07182B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal direction="up" duration={800}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-3 block">INDUSTRIES</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-white">Serving the Institutions That Cannot Compromise</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Luxury Hospitality", desc: "High-thread-count bed linens, luxury bath towels, table napery, and dry cleaning for five-star hotels." },
              { title: "Healthcare & Medical", desc: "Disinfected bedsheets, patient uniforms, surgical scrubs, and hospital blankets processed under microbiologically secure protocols." },
              { title: "Corporate Offices", desc: "Uniform management, executive garment dry cleaning, and facility textile sanitization programs." },
              { title: "Industrial Facilities", desc: "High-durability workwear, heavy grease removal, protective overalls, and chemical-resistant uniforms." },
              { title: "Premium Residential", desc: "Scheduled door-to-door luxury laundry, dry cleaning, and home textile care solutions for estate communities." },
              { title: "Educational Institutions", desc: "Hostel linens, laboratory coats, athletic team wear, and academic staff uniform sanitization." },
            ].map((ind, i) => (
              <Reveal key={i} direction="up" duration={700} delay={i * 60}>
                <div className="border border-white/10 p-8 h-full transition-all duration-400 hover:border-antique-gold hover:bg-white/5 group">
                  <h3 className="font-display font-medium text-lg text-white mb-3 group-hover:text-antique-gold transition-colors duration-300">{ind.title}</h3>
                  <p className="font-body font-light text-xs text-white/65 leading-relaxed m-0">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-muted-stone">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal direction="up" duration={800}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-body font-semibold text-xs tracking-[0.18em] text-antique-gold uppercase mb-3 block">CLIENT VOICES</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Trusted by Those Who Demand the Best</h2>
            </div>
          </Reveal>
          <Reveal direction="up" duration={850} delay={100}>
            <div className="max-w-3xl mx-auto px-4">
              <div className="border-l-[3px] border-antique-gold pl-6 md:pl-8 mb-6">
                <p className="font-display italic text-lg md:text-xl lg:text-2xl text-near-black leading-relaxed">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
              </div>
              <div className="flex flex-col pl-7 md:pl-9 mt-4">
                <span className="font-body font-semibold text-sm text-near-black">{testimonials[activeTestimonial].name}</span>
                <span className="font-body font-light text-xs text-charcoal/75 mt-1">
                  {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].organization}
                </span>
              </div>
              <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full border border-antique-gold transition-all duration-300 ${activeTestimonial === idx ? "bg-antique-gold scale-125 shadow-[0_0_8px_rgba(234,88,12,0.4)]" : "bg-transparent"
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────── */}
      <section className="py-20 bg-warm-off-white border-y border-muted-stone">
        <div className="max-w-2xl mx-auto text-center px-6">
          <Reveal direction="up" duration={800}>
            <div>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black mb-4">Experience the Difference</h2>
              <p className="font-body font-light text-base text-charcoal mb-8">
                Partner with Pristine Care and set a new benchmark for quality and reliability.
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-warm-off-white border border-[#162A40] hover:bg-bright-gold hover:border-bright-gold hover:text-white transition-all duration-300 inline-block min-w-[200px] shadow-[0_4px_16px_rgba(17,17,17,0.2)]"
              >
                Request a Proposal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
