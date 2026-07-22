"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

interface FormFields {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  volume: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  // Derive initial service from URL param — done once in useState initializer
  // to avoid calling setState inside a useEffect (lint: react-hooks/set-state-in-effect).
  const getInitialService = () => {
    const p = searchParams.get("service");
    if (p === "laundry") return "Premium Laundry Services";
    if (p === "drycleaning") return "Luxury Dry Cleaning";
    if (p === "linen" || p === "proposal") return "Linen Management";
    if (p === "hygiene" || p === "consultation") return "Hygiene Solutions";
    return "";
  };

  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    service: getInitialService(),
    volume: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!fields.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!fields.companyName.trim()) tempErrors.companyName = "Company Name is required";

    // Email Validation
    if (!fields.email.trim()) {
      tempErrors.email = "Email Address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(fields.email)) {
        tempErrors.email = "Enter a valid email address";
      }
    }

    // Phone Validation
    if (!fields.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else {
      const phoneRegex = /^[0-9+\s-]{8,15}$/;
      if (!phoneRegex.test(fields.phone)) {
        tempErrors.phone = "Enter a valid phone number (digits only, 8-15 chars)";
      }
    }

    if (!fields.industry) tempErrors.industry = "Please select your industry";
    if (!fields.service) tempErrors.service = "Please select the service required";
    if (!fields.volume) tempErrors.volume = "Please select your monthly volume";
    if (!fields.message.trim()) tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    // All fields are sent directly as individual query params and JSON body.

    try {
      const scriptUrl = ""; //script url

      // We encode parameters as both URLSearchParams (for e.parameter query params)
      // and JSON (for e.postData.contents) to support any style of Google Apps Script setup.
      const queryParams = new URLSearchParams({
        "Name": fields.fullName,
        "Company": fields.companyName,
        "Email": fields.email,
        "Phone": fields.phone,
        "Industry": fields.industry,
        "Service": fields.service,
        "Volume": fields.volume,
        "Message": fields.message
      });

      const finalUrl = `${scriptUrl}?${queryParams.toString()}`;

      const jsonBody = JSON.stringify({
        "Name": fields.fullName,
        "Company": fields.companyName,
        "Email": fields.email,
        "Phone": fields.phone,
        "Industry": fields.industry,
        "Service": fields.service,
        "Volume": fields.volume,
        "Message": fields.message
      });

      // mode: 'no-cors' prevents CORS preflight OPTIONS request failure on redirect
      await fetch(finalUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain"
        },
        body: jsonBody
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Google Sheet submission error:", err);
      setSubmitError("Failed to submit enquiry due to a network connection issue. Please try again or contact us directly at info@pristinecare.in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border-l-4 border-antique-gold border-y border-r border-muted-stone p-10 text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)] transition-all duration-300">
        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-antique-gold)" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="font-display font-semibold text-2xl text-near-black mb-4">Enquiry Received</h3>
        <p className="font-body font-light text-sm leading-relaxed text-charcoal mb-8">
          Thank you, {fields.fullName}. Your commercial enquiry for {fields.companyName} has been logged in our system. A commercial representative will review your requirements and reach out within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFields({
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              industry: "",
              service: "",
              volume: "",
              message: "",
            });
          }}
          className="px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase bg-[#162A40] text-white border border-[#162A40] hover:bg-transparent hover:text-[#162A40] transition-all duration-300 min-w-[200px]"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-muted-stone p-6 md:p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.04)]" noValidate>
      <div className="flex flex-col md:flex-row gap-6 mb-2">
        <div className="w-full md:w-1/2 mb-4">
          <label htmlFor="fullName" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold ${errors.fullName ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.fullName}</span>}
        </div>

        <div className="w-full md:w-1/2 mb-4">
          <label htmlFor="companyName" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold ${errors.companyName ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.companyName}
            onChange={handleChange}
            required
          />
          {errors.companyName && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.companyName}</span>}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-2">
        <div className="w-full md:w-1/2 mb-4">
          <label htmlFor="email" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold ${errors.email ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.email}</span>}
        </div>

        <div className="w-full md:w-1/2 mb-4">
          <label htmlFor="phone" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold ${errors.phone ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.phone}</span>}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-2">
        <div className="w-full md:w-1/3 mb-4">
          <label htmlFor="industry" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Industry</label>
          <select
            id="industry"
            name="industry"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold appearance-none bg-[url("data:image/svg+xml;charset=UTF-8,%3Csvg_xmlns='http://www.w3.org/2000/svg'_viewBox='0 0 24 24'_fill='none'_stroke='%234A4A4A'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'%3E%3C/polyline%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_16px_center] bg-[size:16px] pr-10 ${errors.industry ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select Industry</option>
            <option value="Luxury Hospitality">Luxury Hospitality</option>
            <option value="Healthcare & Medical Institutions">Healthcare & Medical Institutions</option>
            <option value="Corporate Offices">Corporate Offices</option>
            <option value="Industrial Facilities">Industrial Facilities</option>
            <option value="Premium Residential Communities">Premium Residential Communities</option>
            <option value="Educational Institutions">Educational Institutions</option>
          </select>
          {errors.industry && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.industry}</span>}
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <label htmlFor="service" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Service Required</label>
          <select
            id="service"
            name="service"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold appearance-none bg-[url("data:image/svg+xml;charset=UTF-8,%3Csvg_xmlns='http://www.w3.org/2000/svg'_viewBox='0 0 24 24'_fill='none'_stroke='%234A4A4A'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'%3E%3C/polyline%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_16px_center] bg-[size:16px] pr-10 ${errors.service ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Premium Laundry Services">Premium Laundry Services</option>
            <option value="Luxury Dry Cleaning">Luxury Dry Cleaning</option>
            <option value="Linen Management">Linen Management</option>
            <option value="Hygiene Solutions">Hygiene Solutions</option>
          </select>
          {errors.service && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.service}</span>}
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <label htmlFor="volume" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Monthly Volume</label>
          <select
            id="volume"
            name="volume"
            className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold appearance-none bg-[url("data:image/svg+xml;charset=UTF-8,%3Csvg_xmlns='http://www.w3.org/2000/svg'_viewBox='0 0 24 24'_fill='none'_stroke='%234A4A4A'_stroke-width='2'_stroke-linecap='round'_stroke-linejoin='round'%3E%3Cpolyline_points='6_9_12_15_18_9'%3E%3C/polyline%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_16px_center] bg-[size:16px] pr-10 ${errors.volume ? "border-[#d32f2f]" : "border-muted-stone"
              }`}
            value={fields.volume}
            onChange={handleChange}
            required
          >
            <option value="">Select Volume</option>
            <option value="Under 500 Kg">Under 500 Kg</option>
            <option value="500–2000 Kg">500–2000 Kg</option>
            <option value="2000–5000 Kg">2000–5000 Kg</option>
            <option value="Above 5000 Kg">Above 5000 Kg</option>
          </select>
          {errors.volume && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.volume}</span>}
        </div>
      </div>

      <div className="w-full mb-6">
        <label htmlFor="message" className="block font-body font-semibold text-[11px] text-near-black mb-2 uppercase tracking-widest">Message Details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full px-4 py-3 font-body font-light text-sm text-near-black bg-white border outline-none transition-all duration-300 focus:border-antique-gold resize-y ${errors.message ? "border-[#d32f2f]" : "border-muted-stone"
            }`}
          value={fields.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="block font-body text-xs text-[#d32f2f] mt-1.5">{errors.message}</span>}
      </div>

      {submitError && (
        <div className="mb-6 p-4 border border-[#d32f2f] bg-[#d32f2f]/5 text-[#d32f2f] font-body text-sm rounded">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 text-xs font-body font-semibold tracking-wider uppercase bg-antique-gold text-near-black border border-antique-gold hover:bg-transparent hover:text-antique-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}
