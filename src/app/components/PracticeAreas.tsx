'use client'

import { motion, Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const areas = [
  {
    number: '01',
    title: 'International Trade Law',
    description:
      'Advising on WTO obligations, AfCFTA implementation, import/export regulations, trade remedies, and cross-border compliance for businesses operating in African markets.',
  },
  {
    number: '02',
    title: 'Investment Law',
    description:
      'Structuring foreign direct investments, bilateral investment treaty (BIT) analysis, investor-state dispute prevention, and investment protection strategies across African jurisdictions.',
  },
  {
    number: '03',
    title: 'Corporate & Commercial',
    description:
      'Company formation, joint ventures, mergers and acquisitions, corporate governance, and transactional advisory for businesses entering or expanding within Ghana and the broader West African region.',
  },
  {
    number: '04',
    title: 'Dispute Resolution',
    description:
      'International commercial arbitration, mediation, and litigation support for trade and investment disputes, with experience navigating both domestic Ghanaian courts and international forums.',
  },
  {
    number: '05',
    title: 'Contract Drafting & Review',
    description:
      'Drafting, reviewing, and negotiating commercial contracts, trade agreements, distribution arrangements, and service-level agreements tailored to African business environments.',
  },
  {
    number: '06',
    title: 'Regulatory Compliance',
    description:
      'Navigating Ghanaian and regional regulatory requirements for market entry, sectoral licensing, customs compliance, and ongoing operational adherence across multiple African jurisdictions.',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="h-px bg-[#1e1e1e] mb-16" />

      {/* Section header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="md:col-span-3"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
            Practice
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="md:col-span-6"
        >
          <h2
            className="font-semibold text-[#f5f0e8] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Areas of Practice
          </h2>
        </motion.div>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]"
      >
        {areas.map((area) => (
          <motion.div
            key={area.number}
            variants={cardVariant}
            className="bg-[#0c0c0c] p-8 md:p-10 flex flex-col gap-6 group hover:bg-[#111] transition-colors duration-300 cursor-default"
          >
            <span className="text-[#c9a96e] text-xs tracking-[0.25em] font-mono">
              {area.number}
            </span>
            <h3 className="text-[#f5f0e8] text-lg font-medium leading-snug group-hover:text-[#c9a96e] transition-colors duration-300">
              {area.title}
            </h3>
            <p className="text-[#6b6560] text-sm leading-relaxed flex-1">
              {area.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
