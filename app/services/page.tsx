import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Services | Pristine Care B2B Laundry & Linen Management",
  description: "Explore our premium laundry, luxury dry cleaning, end-to-end linen management, and hospital-grade hygiene solutions.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center text-white bg-[#07182B]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_linen.png"
            alt="Neat stacked white hospitality laundry"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07182B]/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">
            OUR SERVICES
          </span>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-white">
            Professional Textile Care & Logistics
          </h1>
        </div>
      </section>

      {/* SERVICE 1 — Premium Laundry Services */}
      <section className="py-20 md:py-28 bg-white" id="laundry">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                SERVICE 01
              </span>
              <h2 className="font-display font-medium text-3xl text-near-black leading-tight">
                Premium Laundry Services
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed mb-6">
                We provide high-capacity, institutional laundry solutions designed for hotels, hospitals, industries and corporate clients. Our wash processes utilize precise thermal cycles and standardized formulations to ensure consistent cleanliness and fabric preservation.
              </p>
              
              <ul className="list-none p-0 my-6 flex flex-col gap-3">
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Advanced washing and finishing systems
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Specialist fabric care expertise
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Quality inspection at every stage
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Scheduled collection and delivery
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/contact?service=laundry"
                  className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-white border border-[#162A40] hover:bg-transparent hover:text-[#162A40] transition-all duration-300 inline-block"
                >
                  Enquire About This Service
                </Link>
              </div>
            </div>
            
            <div className="p-2.5 border border-muted-stone bg-white shadow-sm">
              <Image
                src="/services_laundry.png"
                alt="Premium Laundry Services stack"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 — Luxury Dry Cleaning */}
      <section className="py-20 md:py-28 bg-warm-off-white" id="drycleaning">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 p-2.5 border border-muted-stone bg-white shadow-sm">
              <Image
                src="/services_dryclean.png"
                alt="Luxury Dry Cleaning suits"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                SERVICE 02
              </span>
              <h2 className="font-display font-medium text-3xl text-near-black leading-tight">
                Luxury Dry Cleaning
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed mb-6">
                Specialist cleaning care for premium garments, uniforms, and delicate interior fabrics. We employ selective solvent cleaning systems that effectively dissolve oil and soil residues without causing fiber stress or color degradation.
              </p>
              
              <ul className="list-none p-0 my-6 flex flex-col gap-3">
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Professional stain treatment
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Fabric preservation techniques
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Luxury garment finishing
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Designer and formal apparel care
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/contact?service=drycleaning"
                  className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-white border border-[#162A40] hover:bg-transparent hover:text-[#162A40] transition-all duration-300 inline-block"
                >
                  Enquire About This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 — Linen Management */}
      <section className="py-20 md:py-28 bg-white" id="linen">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                SERVICE 03
              </span>
              <h2 className="font-display font-medium text-3xl text-near-black leading-tight">
                Linen Management
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed mb-6">
                End-to-end linen lifecycle management for high-volume hospitality and medical clients. We coordinate purchasing, laundry processing, real-time inventory tracking, and replacement logistics to ensure continuous material availability.
              </p>
              
              <ul className="list-none p-0 my-6 flex flex-col gap-3">
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Inventory management and tracking
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Usage reporting
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Scheduled replacement planning
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Ongoing quality monitoring
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/contact?service=linen"
                  className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-white border border-[#162A40] hover:bg-transparent hover:text-[#162A40] transition-all duration-300 inline-block"
                >
                  Enquire About This Service
                </Link>
              </div>
            </div>
            
            <div className="p-2.5 border border-muted-stone bg-white shadow-sm">
              <Image
                src="/services_linen.png"
                alt="Linen Management shelves"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4 — Hygiene Solutions */}
      <section className="py-20 md:py-28 bg-warm-off-white" id="hygiene">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 p-2.5 border border-muted-stone bg-white shadow-sm">
              <Image
                src="/services_hygiene.png"
                alt="Hygiene Solutions sterile environment"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                SERVICE 04
              </span>
              <h2 className="font-display font-medium text-3xl text-near-black leading-tight">
                Hygiene Solutions
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              <p className="font-body font-light text-sm text-charcoal leading-relaxed mb-6">
                Advanced hygiene and sanitisation protocols specifically designed for institutional and clinical environments. Our barrier washers and bacteriological control systems prevent cross-contamination, ensuring full compliance with national hygiene codes.
              </p>
              
              <ul className="list-none p-0 my-6 flex flex-col gap-3">
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Medical-grade disinfection protocols
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Compliance with applicable hygiene standards
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Infection prevention support
                </li>
                <li className="relative pl-6 font-body font-light text-sm text-charcoal before:content-['—'] before:absolute before:left-0 before:text-antique-gold before:font-bold">
                  Routine quality audits
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/contact?service=hygiene"
                  className="px-6 py-3.5 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-white border border-[#162A40] hover:bg-transparent hover:text-[#162A40] transition-all duration-300 inline-block"
                >
                  Enquire About This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
