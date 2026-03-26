'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const credentials = [
  { label: 'Jurisdiction', value: 'Ghana Bar Association' },
  { label: 'Specialisation', value: 'African International Trade & Investment Law' },
  { label: 'Training', value: 'LLM — South Africa' },
  { label: 'Practice', value: 'Ghanaian Private Legal Practice' },
  { label: 'Region', value: 'West Africa & Continental Africa' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section border top */}
      <div className="h-px bg-[#1e1e1e] mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        {/* Left: label column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="md:col-span-3"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
            About
          </p>
        </motion.div>

        {/* Right: content column */}
        <div className="md:col-span-9 space-y-14">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative w-full aspect-[3/4] max-w-sm overflow-hidden"
          >
            <Image
              src="/fauziya.jpg"
              alt="Fauziya Tijjani"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p
              className="text-[#f5f0e8] leading-relaxed"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}
            >
              Hey, I&apos;m Fauziya Tijjani Esq, a Ghanaian private legal practitioner
              and an African International trade and Investment law expert. I am a lawyer
              and a trained expert in African trade and investment law from South Africa.
              I operate in the Ghanaian private legal practice space.
            </p>
          </motion.div>

          {/* Secondary bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-[#6b6560] text-base leading-relaxed max-w-2xl"
          >
            With a practice rooted in the realities of African commerce and international
            frameworks such as the AfCFTA, I advise businesses, investors, and institutions
            on cross-border transactions, trade compliance, and investment structuring
            across the continent. My work bridges the pragmatic demands of Ghanaian
            legal practice with the strategic scope of pan-African trade law.
          </motion.p>

          {/* Credentials grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-[#1e1e1e]"
          >
            {credentials.map((c, i) => (
              <div
                key={i}
                className="py-5 pr-6 border-b border-[#1e1e1e] flex flex-col gap-1"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632]">
                  {c.label}
                </span>
                <span className="text-[#f5f0e8] text-sm">{c.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
