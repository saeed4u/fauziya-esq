'use client'

import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const links = [
  {
    label: 'Email',
    value: 'fauziya@tijjanilaw.com',
    href: 'mailto:fauziya@tijjanilaw.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/fauziyatijjani',
    href: 'https://linkedin.com/in/fauziyatijjani',
  },
]

export default function Contact() {
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
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium mb-8"
        >
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="font-semibold text-[#f5f0e8] leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
        >
          Let&apos;s Work Together
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
          className="text-[#6b6560] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-16"
        >
          Whether you are structuring a cross-border investment, navigating African
          trade regulations, or need expert counsel on a commercial matter — I am
          available to discuss how I can assist.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0"
        >
          {links.map((link, i) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
  )
}
