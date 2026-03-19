"use client";

import { useState } from "react";
import { Phone, CheckCircle, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = "Please enter a valid phone number";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  if (submitted) {
    return (
      <div className="rounded-xl p-8 text-center bg-green-50 border border-green-200">
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
        <h3 className="font-heading font-bold text-xl mb-2 text-gray-800">
          Message Received!
        </h3>
        <p className="text-sm mb-5 text-gray-600">
          Thank you — we&apos;ll be in touch shortly. For immediate help, call us directly.
        </p>
        <a href={BUSINESS.phone1Href} className="btn-gold mx-auto">
          <Phone className="w-4 h-4" />
          Call {BUSINESS.phone1}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          className={`input-field ${errors.name ? "input-error" : ""}`}
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-phone"
          type="tel"
          className={`input-field ${errors.phone ? "input-error" : ""}`}
          placeholder="(716) 555-0123"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
          autoComplete="tel"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="cf-service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <select
          id="cf-service"
          className="input-field bg-white"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Select a service...</option>
          <option value="locksmith">Locksmith Services</option>
          <option value="safes">Safe Sales & Service</option>
          <option value="automotive">Automotive Locksmith</option>
          <option value="emergency">Emergency Lockout</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          className="input-field resize-none"
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full justify-center py-3.5 text-base"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-400">
        For immediate help, call{" "}
        <a href={BUSINESS.phone1Href} className="font-semibold text-csl-navy hover:text-csl-gold transition-colors">
          {BUSINESS.phone1}
        </a>
      </p>
    </form>
  );
}
