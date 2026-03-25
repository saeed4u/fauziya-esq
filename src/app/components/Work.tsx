'use client'

import { motion, Variants } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const cases = [
  {
    index: '001',
    tag: 'Trade Advisory',
    year: '2024',
    title: 'AfCFTA Market Access Strategy',
    description:
      'Advised a Ghanaian manufacturing conglomerate on leveraging preferential tariff schedules under the African Continental Free Trade Area Agreement for expanded market access into East and Southern African markets. Delivered a comprehensive legal compliance and entry roadmap.',
    outcome: 'Multi-market entry achieved',
  },
  {
    index: '002',
    tag: 'Investment Structuring',
    year: '2023',
    title: 'Cross-Border Joint Venture — West Africa',
    description:
      'Structured a joint venture between a Ghanaian entity and a European strategic investor for a logistics infrastructure project across three ECOWAS member states. Navigated bilateral investment treaty protections, local-content requirements, and regulatory approvals.',
    outcome: 'USD 12M investment closed',
  },
  {
    index: '003',
    tag: 'Dispute Resolution',
    year: '2023',
    title: 'International Commercial Arbitration',
    description:
      'Represented a Ghanaian trading company in international commercial arbitration proceedings before a recognised arbitral institution arising from a disputed commodity supply agreement with a European counterpart. Successfully argued force majeure and trade disruption provisions.',
    outcome: 'Favourable award obtained',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: i * 0.1,
    },
  }),
}

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
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
            Work
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
            Selected Work
          </h2>
        </motion.div>
      </div>

      {/* Case cards */}
      <div className="space-y-px">
        {cases.map((c, i) => (
          <motion.div
            key={c.index}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 bg-[#0c0c0c] border border-[#1e1e1e] p-8 md:p-10 hover:border-[#2a2a2a] hover:bg-[#0f0f0f] transition-all duration-300"
          >
            {/* Left meta */}
            <div className="md:col-span-3 flex flex-row md:flex-col gap-4 md:gap-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#3a3632] font-mono">
                {c.index}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]">
                {c.tag}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#3a3632] md:mt-auto">
                {c.year}
              </span>
            </div>

            {/* Right content */}
            <div className="md:col-span-9 flex flex-col gap-4">
              <h3 className="text-[#f5f0e8] font-medium text-xl leading-snug group-hover:text-[#c9a96e] transition-colors duration-300">
                {c.title}
              </h3>
              <p className="text-[#6b6560] text-sm leading-relaxed max-w-2xl">
                {c.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                <span className="text-xs text-[#f5f0e8]/60">{c.outcome}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
