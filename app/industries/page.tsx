import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries Served | Pristine Care B2B Laundry & Linen Management",
  description: "Explore industry-specific laundry challenges and solutions for hospitality, healthcare, offices, manufacturing, education, and communities.",
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "hospitality",
      eyebrow: "INDUSTRY 01",
      name: "Hotels and Resorts",
      challenges: [
        "High replacement rates due to chemical degradation during washing processes.",
        "Logistics bottlenecks leading to linen shortages during high occupancy periods.",
        "Inconsistent finish and folding quality affecting guest satisfaction reviews."
      ],
      solutions: [
        "Systematic automated chemical dosing prevents fiber stress and prolongs linen lifespan.",
        "Private logistics fleet operates on fixed schedules matching daily collection requirements.",
        "Industrial ironers and folders guarantee sharp, uniform finishes on all sheet sizes."
      ],
      benefits: "Guaranteed linen availability, 15% average increase in fabric longevity, and standardized luxury-grade folding."
    },
    {
      id: "healthcare",
      eyebrow: "INDUSTRY 02",
      name: "Hospitals and Healthcare Facilities",
      challenges: [
        "Risk of microbiological cross-contamination from infected medical linens.",
        "Strict regulatory and audit compliance requirements for disinfection validation.",
        "High soil and biological stain levels on patient bedding and surgical scrubs."
      ],
      solutions: [
        "Certified barrier washing system separates raw soiled linen from sanitised outputs.",
        "Thermal and chemical disinfection validation programs with routine batch audits.",
        "Specialist enzyme-based stain removal targeting biological soils without fabric wear."
      ],
      benefits: "Microbiological verification records, complete contamination control, and compliance with healthcare laundry codes."
    },
    {
      id: "corporate",
      eyebrow: "INDUSTRY 03",
      name: "Corporate Offices",
      challenges: [
        "Maintaining professional appearance standards for front-office and security staff.",
        "Coordinating individual uniform cleaning schedules across multiple locations.",
        "Sanitization of common facility textiles like towels and drapery."
      ],
      solutions: [
        "Dedicated corporate dry cleaning programs for executive uniforms and formal wear.",
        "Consolidated pickup logistics with clear tracking for corporate accounts.",
        "Advanced deep-cleaning sanitisation processes for office decor textiles."
      ],
      benefits: "Standardized staff appearance, simplified invoicing, and improved corporate facility hygiene."
    },
    {
      id: "manufacturing",
      eyebrow: "INDUSTRY 04",
      name: "Manufacturing Industries",
      challenges: [
        "Heavy industrial grease, chemical, and metal dust stains on worker overalls.",
        "Standard washers fail to break down heavy industrial soils effectively.",
        "Durability issues under harsh thermal washing conditions."
      ],
      solutions: [
        "High-temperature washes combined with industrial surfactants dissolve grease deposits.",
        "Reinforced processing protocols that preserve structural fabrics and reflective tapes.",
        "Heavy-duty barrier washing machines designed for industrial workwear."
      ],
      benefits: "Thorough grease and oil removal, preserved protective properties, and prolonged workwear lifecycle."
    },
    {
      id: "education",
      eyebrow: "INDUSTRY 05",
      name: "Educational Institutions",
      challenges: [
        "High-volume linen requirements from student hostels during academic sessions.",
        "Variable soils from laboratory coats, sports team uniforms, and dining napery.",
        "Tight budget constraints requiring economical fabric management."
      ],
      solutions: [
        "Bulk wash processing capacity optimized for low-cost operational cycles.",
        "Targeted wash programs for distinct textiles (athletic wear vs. lab coats).",
        "Predictive replacement scheduling to manage capital expenditures on linens."
      ],
      benefits: "Low-cost high-volume laundry cycles, fast term-start turnarounds, and organized hostel storage delivery."
    },
    {
      id: "residential",
      eyebrow: "INDUSTRY 06",
      name: "Residential Communities",
      challenges: [
        "Resident inconvenience when seeking premium garment care off-site.",
        "Unreliable local dry cleaners causing fiber damage to luxury wardrobe items.",
        "Lack of structured bulk linen care for premium housing estates."
      ],
      solutions: [
        "Scheduled door-to-door concierge dry cleaning and laundry pickup services.",
        "Fabric-specific care processes utilizing delicate solvents and custom presses.",
        "Specialist washing protocols for heavy home drapery, carpets, and duvets."
      ],
      benefits: "Resident lifestyle convenience, professional garment conservation, and structured estate packages."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center text-white bg-[#07182B]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/company_intro.png"
            alt="Pristine Care industrial scale linen sorting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07182B]/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">
            INDUSTRIES
          </span>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-white">
            Serving the Institutions That Cannot Compromise
          </h1>
        </div>
      </section>

      {/* Industry Sections List */}
      {industries.map((ind, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section 
            className={`py-20 ${isEven ? "bg-white" : "bg-warm-off-white"}`} 
            id={ind.id} 
            key={ind.id}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">{ind.eyebrow}</span>
              <h2 className="font-display font-medium text-3xl text-near-black mb-2">{ind.name}</h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Column 1: Challenges */}
                <div className="bg-white border border-muted-stone p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
                  <h3 className="font-body font-semibold text-lg text-near-black mb-6 border-b border-muted-stone pb-3">Industry Challenges</h3>
                  <ul className="list-none p-0 flex flex-col gap-3">
                    {ind.challenges.map((c, i) => (
                      <li key={i} className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Solutions */}
                <div className="bg-white border border-muted-stone p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
                  <h3 className="font-body font-semibold text-lg text-near-black mb-6 border-b border-muted-stone pb-3">Pristine Care Solutions</h3>
                  <ul className="list-none p-0 flex flex-col gap-3">
                    {ind.solutions.map((s, i) => (
                      <li key={i} className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Benefits Band */}
              <div className={`border-l-4 p-5 mt-8 flex flex-wrap gap-2.5 font-body text-sm ${
                isEven ? "bg-warm-off-white border-antique-gold" : "bg-white border-near-black"
              }`}>
                <span className="font-semibold text-near-black">Key B2B Benefit:</span>
                <span className="text-charcoal font-light">{ind.benefits}</span>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-[#07182B] text-white text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display font-medium text-3xl text-white mb-4">Request an Industry-Specific Proposal</h2>
          <p className="font-body font-light text-base text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Our technical directors will structure a proposal based on your estimated volume and service level requirements.
          </p>
          <Link href="/contact" className="px-8 py-4 text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300 inline-block">
            Contact Commercial Division
          </Link>
        </div>
      </section>
    </div>
  );
}
