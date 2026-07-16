import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sustainability | Pristine Care B2B Laundry & Linen Management",
  description: "Learn about our commitment to environmental responsibility: water conservation, energy efficiency, eco-friendly chemistry, and waste reduction.",
};

export default function SustainabilityPage() {
  const pillars = [
    {
      id: "water",
      eyebrow: "PILLAR 01",
      title: "Water Conservation",
      desc: "Our facility is built around high-efficiency water recycling loops. By filtering and processing rinse water through multi-stage clarification units, we reclaim and reuse up to 40% of the water required for successive wash cycles. This closed-loop system significantly reduces fresh groundwater draw.",
      statValue: "40% Reclaimed",
      statLabel: "Water recycle rate per cycle",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    },
    {
      id: "energy",
      eyebrow: "PILLAR 02",
      title: "Energy Efficiency",
      desc: "We utilize industrial heat exchangers to capture thermal energy from wastewater. This pre-heats the incoming cold freshwater, reducing the boiler combustion load. Our facility operates high-efficiency gas boilers that run on clean fuel inputs, minimizing greenhouse gas emissions.",
      statValue: "30% Saved",
      statLabel: "Reduction in thermal energy load",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      id: "chemicals",
      eyebrow: "PILLAR 03",
      title: "Eco-Friendly Chemicals",
      desc: "Our washing cycles utilize biodegradable detergents and oxygen-based bleaching agents. We strictly avoid alkylphenol ethoxylates (APEs) and chlorine-based chemicals that disrupt aquatic ecosystems. Automated chemical dosing systems measure chemistry requirements to the milligram, preventing chemical waste.",
      statValue: "Zero Chlorine",
      statLabel: "100% biodegradable formulations",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
          <path d="M10 2v7.58a2 2 0 0 1-.6 1.4L4.72 15.7A3 3 0 0 0 6.84 21h10.32a3 3 0 0 0 2.12-5.3l-4.68-4.72a2 2 0 0 1-.6-1.4V2z"></path>
          <line x1="8" y1="2" x2="16" y2="2"></line>
        </svg>
      )
    },
    {
      id: "waste",
      eyebrow: "PILLAR 04",
      title: "Waste Reduction",
      desc: "Textile waste is managed through structured fabric repurposing programs. Linens that have reached the end of their hospitality life cycle due to tearing or localized staining are graded, trimmed, and converted into industrial cleaning cloths. This keeps durable cotton fabrics out of local landfills.",
      statValue: "98% Kept",
      statLabel: "Textiles diverted from landfills",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      )
    },
    {
      id: "operations",
      eyebrow: "PILLAR 05",
      title: "Responsible Operations",
      desc: "Our environmental commitment is backed by documented protocols. We conduct regular compliance audits covering effluent discharge parameters, energy usage metrics, and chemical storage safety. Our facility layout is engineered to maximize natural ventilation and reduce secondary cooling power consumption.",
      statValue: "100% Audited",
      statLabel: "Effluent standards compliant",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center text-white bg-[#07182B]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/company_intro.png"
            alt="Pristine Care high technology water recycling facility"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07182B]/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">
            SUSTAINABILITY
          </span>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-white">
            Responsible Care for a Better Tomorrow
          </h1>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">OUR VISION</span>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-near-black">Resource Preservation in Commercial Laundry</h2>
          <div className="w-15 h-px bg-antique-gold my-6 mx-auto opacity-80"></div>
          <p className="font-body font-light text-base leading-relaxed text-charcoal max-w-3xl mx-auto">
            Industrial scale laundry operations consume water, thermal energy, and chemistry. Pristine Care operates under the principle that ecological footprint reduction is not just compliance, but an engineering challenge that improves B2B supply chain efficiency.
          </p>
        </div>
      </section>

      {/* Five Sections alternating layout */}
      {pillars.map((p, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section 
            className={`py-20 ${isEven ? "bg-warm-off-white" : "bg-white"}`} 
            id={p.id} 
            key={p.id}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {isEven ? (
                  <>
                    <div>
                      <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">{p.eyebrow}</span>
                      <h2 className="font-display font-medium text-2xl md:text-3xl text-near-black mb-4">{p.title}</h2>
                      <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
                      <p className="font-body font-light text-sm leading-relaxed text-charcoal">{p.desc}</p>
                    </div>
                    <div>
                      <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-10 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] max-w-[380px] mx-auto">
                        <div className="flex justify-center mb-5">{p.icon}</div>
                        <span className="block font-display text-2xl font-semibold text-near-black mb-2">{p.statValue}</span>
                        <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">{p.statLabel}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <div className="bg-white border border-muted-stone border-t-3 border-t-antique-gold p-10 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] max-w-[380px] mx-auto">
                        <div className="flex justify-center mb-5">{p.icon}</div>
                        <span className="block font-display text-2xl font-semibold text-near-black mb-2">{p.statValue}</span>
                        <span className="font-body font-semibold text-[11px] text-charcoal tracking-widest uppercase">{p.statLabel}</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">{p.eyebrow}</span>
                      <h2 className="font-display font-medium text-2xl md:text-3xl text-near-black mb-4">{p.title}</h2>
                      <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
                      <p className="font-body font-light text-sm leading-relaxed text-charcoal">{p.desc}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
