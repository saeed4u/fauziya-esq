'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Practice', href: '#practice' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Find which section is currently in view
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id
        }
      }

      setActiveSection(current)

      // Update URL hash without pushing to history (only when changed)
      const hash = current ? `#${current}` : ''
      const newUrl = window.location.pathname + hash
      if (window.location.pathname + (window.location.hash || '') !== newUrl) {
        window.history.replaceState(null, '', newUrl)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const linkClass = (href: string) => {
    const isActive = activeSection === href.slice(1)
    return `text-xs tracking-widest uppercase transition-colors duration-300 ${
      isActive
        ? 'text-[#c9a96e]'
        : 'text-[#6b6560] hover:text-[#f5f0e8]'
    }`
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0c0c]/85 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-sm font-medium tracking-widest uppercase text-[#f5f0e8] hover:text-[#c9a96e] transition-colors duration-300"
        >
          Fauziya Tijjani
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#c9a96e]"
                  transition={{ duration: 0.3, ease }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <ul className="flex md:hidden items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={linkClass(link.href).replace('text-xs', 'text-[10px]')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
