"use client";

import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const links = [
  {
    label: "Email",
    value: "fauziya@tijjanilaw.com",
    href: "mailto:fauziya@tijjanilaw.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fauziyatijjani",
    href: "https://linkedin.com/in/fauziyatijjani",
  },
];

const matters = [
  "Cross-border Investment",
  "Trade Compliance (AfCFTA)",
  "Commercial Contract",
  "Investment Structuring",
  "General Inquiry",
];

type State = { status: "idle" | "success" | "error" };

async function submitConsultation(
  _prev: State,
  formData: FormData,
): Promise<State> {
  try {
    const res = await fetch(
      "https://api.narnia-farms.com/api/v1/fauzy/book-consultation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      },
    );
    return { status: res.ok ? "success" : "error" };
  } catch {
    return { status: "error" };
  }
}

const emptyFields = { name: "", email: "", phone: "", matter: "", message: "" };

function validateEmail(v: string): string | undefined {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
    ? undefined
    : "Enter a valid email address";
}

function validatePhone(v: string): string | undefined {
  const digits = v.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15
    ? undefined
    : "Enter a valid phone number (7–15 digits)";
}

export default function Contact() {
  const [{ status }, formAction, isPending] = useActionState<State, FormData>(
    submitConsultation,
    { status: "idle" },
  );

  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === "email" || name === "phone") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailErr = validateEmail(fields.email);
    const phoneErr = validatePhone(fields.phone);
    if (emailErr || phoneErr) {
      setErrors({ email: emailErr, phone: phoneErr });
      return;
    }
    setErrors({});
    formAction(new FormData(e.currentTarget));
  };

  const inputClass =
    "w-full bg-transparent border text-[#f5f0e8] text-sm px-4 py-3 placeholder-[#3a3632] focus:outline-none transition-colors duration-300";
  const fieldClass = (hasError?: string) =>
    `${inputClass} ${hasError ? "border-red-500 focus:border-red-400" : "border-[#1e1e1e] focus:border-[#c9a96e]"}`;

  return (
    <section id="contact" className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-[#1e1e1e] mb-16" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium mb-8"
        >
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="font-semibold text-[#f5f0e8] leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Let&apos;s Work Together
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
          className="text-[#6b6560] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-16"
        >
          Whether you are structuring a cross-border investment, navigating
          African trade regulations, or need expert counsel on a commercial
          matter — I am available to discuss how I can assist.
        </motion.p>

        {/* Consultation form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mb-16 text-left"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] font-semibold mb-6">
            Book a Consultation
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="border border-[#1e1e1e] px-8 py-12 text-center"
              >
                <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
                  Request Received
                </p>
                <p className="text-[#f5f0e8] text-sm leading-relaxed">
                  Thank you. I will be in touch shortly to confirm your
                  consultation.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1e1e1e]"
              >
                <div className="bg-[#0c0c0c]">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={fields.name}
                    onChange={update}
                    className={inputClass}
                  />
                </div>
                <div className="bg-[#0c0c0c] flex flex-col">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={fields.email}
                    onChange={update}
                    className={fieldClass(errors.email)}
                  />
                  {errors.email && (
                    <span className="px-4 pb-2 text-[11px] text-red-400">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="bg-[#0c0c0c] sm:col-span-2 flex flex-col">
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={fields.phone}
                    onChange={update}
                    className={fieldClass(errors.phone)}
                  />
                  {errors.phone && (
                    <span className="px-4 pb-2 text-[11px] text-red-400">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="bg-[#0c0c0c] sm:col-span-2">
                  <select
                    name="matter"
                    required
                    value={fields.matter}
                    onChange={update}
                    className={`${inputClass} ${fields.matter ? "text-[#f5f0e8]" : "text-[#3a3632]"}`}
                  >
                    <option value="" disabled>
                      Nature of Matter
                    </option>
                    {matters.map((m) => (
                      <option
                        key={m}
                        value={m}
                        className="bg-[#0c0c0c] text-[#f5f0e8]"
                      >
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bg-[#0c0c0c] sm:col-span-2">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Brief description of your matter"
                    value={fields.message}
                    onChange={update}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="bg-[#0c0c0c] sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full px-8 py-4 text-xs tracking-[0.3em] uppercase text-[#0c0c0c] bg-[#c9a96e] hover:bg-[#f5f0e8] disabled:opacity-50 transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isPending ? "Sending…" : "Request Consultation"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="sm:col-span-2 text-xs text-red-400 pt-2">
                    Something went wrong. Please try emailing directly.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0"
        >
          {links.map((link, i) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex flex-col items-center gap-1 px-10 py-6"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] group-hover:text-[#c9a96e] transition-colors duration-300">
                  {link.label}
                </span>
                <span className="text-[#f5f0e8] text-sm group-hover:text-[#c9a96e] transition-colors duration-300">
                  {link.value}
                </span>
              </a>
              {i < links.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-[#1e1e1e]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 h-px bg-[#1e1e1e]"
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-[#3a3632]"
        >
          <span>© 2025 Fauziya Tijjani Esq</span>
          <span>Accra, Ghana</span>
          <span>Private Legal Practice</span>
        </motion.div>
      </div>
    </section>
  );
}
