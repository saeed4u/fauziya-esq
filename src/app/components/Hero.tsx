'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 max-w-7xl mx-auto">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex-1 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text content */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-8 font-medium"
          >
            Legal Practitioner &amp; Trade Law Expert
          </motion.p>

          {/* Main display heading */}
          <motion.h1
            variants={item}
            className="font-semibold leading-[1.0] tracking-tight text-[#f5f0e8]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
          >
            Fauziya
            <br />
            <span className="text-[#c9a96e]">Tijjani</span>
            <span className="text-[#6b6560]"> Esq.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={item}
            className="mt-10 mb-8 h-px w-24 bg-[#1e1e1e]"
          />

          {/* Tagline */}
          <motion.p
            variants={item}
            className="max-w-lg text-[#6b6560] text-base md:text-lg leading-relaxed"
          >
            Navigating the legal complexities of African international trade and
            investment — from Accra and across the continent.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="mt-10 flex items-center gap-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#f5f0e8] border border-[#2a2a2a] px-6 py-3 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#practice"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#practice')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-xs tracking-widest uppercase text-[#6b6560] hover:text-[#f5f0e8] transition-colors duration-300"
            >
              View Practice Areas →
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 md:ml-auto overflow-hidden"
        >
          <Image
            src="/fauziya.jpg"
            alt="Fauziya Tijjani Esq"
            fill
            className="object-cover object-top grayscale-[20%]"
            priority
          />
          {/* Subtle vignette at bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(12,12,12,0.5) 0%, transparent 40%)',
            }}
          />
          {/* Gold border accent */}
          <div className="absolute bottom-0 left-0 w-12 h-px bg-[#c9a96e]" />
          <div className="absolute bottom-0 left-0 w-px h-12 bg-[#c9a96e]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 pb-10 flex items-center gap-4"
      >
        <div className="flex flex-col items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#c9a96e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ))}
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#6b6560]">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
