import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Pristine Care B2B Laundry & Linen Management",
  description: "Learn about the mission, values, and journey of Pristine Care, India's leading institutional laundry and linen management provider.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      desc: "Delivering consistent results through systematic and repeatable processes.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Integrity",
      desc: "Honest transaction and complete transparency in billing and volume reporting.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Innovation",
      desc: "Employing advanced washing machinery and modern resource recycling loops.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <path d="M2 12h5l2 9 3-18 3 15 2-6h5"></path>
        </svg>
      )
    },
    {
      title: "Sustainability",
      desc: "Reducing ecological footprints by conserving water and energy inputs.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
        </svg>
      )
    },
    {
      title: "Reliability",
      desc: "Maintaining scheduled transits to prevent linen outages for our clients.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      title: "Customer Commitment",
      desc: "Tailoring processing specifications to align with specific B2B client requirements.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      )
    }
  ];

  const timelineItems = [
    {
      year: "2018",
      title: "Facility Foundation",
      desc: "Established our central laundry facility in Gurugram, equipped with initial high-capacity tunnel washers."
    },
    {
      year: "2020",
      title: "Healthcare Standardization",
      desc: "Implemented hospital-grade biological barriers and earned complete hygiene audit certifications."
    },
    {
      year: "2022",
      title: "Logistics Optimization",
      desc: "Acquired a private delivery fleet and launched real-time inventory tracking for hospitality clients."
    },
    {
      year: "2024",
      title: "Sustainability Integration",
      desc: "Deployed water reclamation loops, achieving a 40% reduction in fresh water intake per processed cycle."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center text-white bg-[#07182B]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/company_intro.png"
            alt="Central laundry facility interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07182B]/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">
            ABOUT US
          </span>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-white">
            Excellence in Every Detail
          </h1>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                COMPANY STORY
              </span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black leading-tight">
                A Structured Approach to Institutional Laundry
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed mb-5">
                Pristine Care was established to resolve the critical quality and logistics gaps in commercial laundry services. We operate a high-capacity, automated processing facility designed specifically for hotels, healthcare institutions, and corporate enterprises.
              </p>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Our operations are governed by standardized protocols that guarantee microbiological safety and material conservation. By investing in European technology and chemical dosing systems, we ensure that every client receives linens processed according to precise thermodynamic and fabric-specific variables.
              </p>
            </div>
            <div className="lg:pt-10">
              <p className="font-display italic text-lg text-near-black leading-relaxed border-l-2 border-antique-gold pl-5 mb-6">
                We believe that premium linen is an essential component of client satisfaction and brand equity. Our systems are built to eliminate common vulnerabilities in hospitality supply chains: uneven wear, transit delays, and processing degradation.
              </p>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                Today, Pristine Care manages linen processing for regional hospitality chains, major healthcare networks, and corporate offices. Our logistical networks coordinate daily collection and delivery cycles, ensuring smooth, uninterrupted client operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">MISSION</span>
              <h3 className="font-display font-medium text-xl md:text-2xl text-near-black mb-4">Systematic Preservation</h3>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                To provide commercial organizations with dependable, microbiologically secure, and fabric-preserving laundry solutions through standardized engineering processes and logistics tracking.
              </p>
            </div>
            <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">VISION</span>
              <h3 className="font-display font-medium text-xl md:text-2xl text-near-black mb-4">B2B Operational Standard</h3>
              <p className="font-body font-light text-sm leading-relaxed text-charcoal">
                To establish Pristine Care as the national B2B standard in commercial laundry operations, recognized for precision, technological integration, and documented environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">CORE VALUES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Our Operational Foundations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div className="bg-white border border-muted-stone border-l-3 border-l-antique-gold p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]" key={idx}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center">{value.icon}</div>
                  <h4 className="font-display font-medium text-lg text-near-black">{value.title}</h4>
                </div>
                <p className="font-body font-light text-xs leading-relaxed text-charcoal">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey Section */}
      <section className="py-20 bg-warm-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">JOURNEY</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Milestones in Quality Assurance</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Modern vertical timeline */}
            <div className="relative border-l border-muted-stone ml-4 md:ml-32 pl-8 space-y-12 py-4">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1.5 bg-antique-gold w-4 h-4 rounded-full border-4 border-warm-off-white"></div>
                  <div className="font-body font-semibold text-sm text-antique-gold mb-1">{item.year}</div>
                  <h4 className="font-display font-medium text-lg text-near-black mb-2">{item.title}</h4>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
