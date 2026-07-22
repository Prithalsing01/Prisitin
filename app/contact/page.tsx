import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Pristine Care B2B Laundry & Linen Management",
  description: "Reach Pristine Care commercial laundry department. Request proposals, schedule consultations, and discuss bulk laundry requirements.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center text-white bg-[#07182B]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_linen.png"
            alt="Pristine Care concierge service linen"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07182B]/75 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6">
          <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-2 block">
            CONTACT US
          </span>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-white mb-2">
            Let&apos;s Begin the Conversation
          </h1>
          <p className="font-body font-light text-base md:text-lg text-white/95 max-w-2xl leading-relaxed">
            We work with hotels, hospitals, corporates and institutional clients across India. Reach us to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Contact Details */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Details & Google Maps */}
            <div className="flex flex-col">
              <span className="font-body font-medium text-xs tracking-[0.12em] text-antique-gold uppercase mb-3 block">
                COMMERCIAL DIVISION
              </span>
              <h2 className="font-display font-medium text-2xl md:text-3xl text-near-black leading-tight">
                Corporate Headquarters
              </h2>
              <div className="w-15 h-px bg-antique-gold my-6 opacity-80"></div>
              
              <div className="mt-8 mb-8 flex flex-col gap-6">
                <div>
                  <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-near-black mb-1.5">
                    Office Address
                  </h4>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                    Plot No. 74/74A/1, Block F-2, MIDC<br />
                    Pimpri Colony, Pimpri-Chinchwad<br />
                    Maharashtra – 411018
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-near-black mb-1.5">
                    GST Number
                  </h4>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                    27ABJFP4261C1ZB
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-near-black mb-1.5">
                    Electronic Mail
                  </h4>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                    info@pristinecare.in
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-xs tracking-wider uppercase text-near-black mb-1.5">
                    GST Number
                  </h4>
                  <p className="font-body font-light text-sm text-charcoal leading-relaxed">
                    27ABJFP4261C1ZB
                  </p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="p-2.5 border border-muted-stone bg-white shadow-sm mt-4">
                <iframe
                  title="Pristine Care Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.018673737638!2d73.7987!3d18.6271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90f2c4b1c3d%3A0x1234567890abcdef!2sMIDC%20Pimpri%20Colony%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411018!5e0!3m2!1sen!2sin!4v1718485292434!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <Suspense fallback={<div className="bg-white border border-muted-stone p-8 text-center shadow-sm font-body text-sm text-charcoal">Loading enquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
