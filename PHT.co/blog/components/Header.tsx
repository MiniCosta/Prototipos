'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-pht-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-pht-gold uppercase tracking-wider">
            PHT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="../" className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors">
              Site Principal
            </a>
            <Link href="/blog" className="text-pht-gold uppercase text-sm font-bold hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/blog/categoria/marketing-juridico" className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors">
              Marketing Jurídico
            </Link>
            <Link href="/blog/categoria/captacao-clientes" className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors">
              Captação
            </Link>
            <Link href="/blog/categoria/gestao-escritorio" className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors">
              Gestão
            </Link>
            <Link href="/blog/categoria/redes-sociais" className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors">
              Redes Sociais
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <a 
              href="../" 
              className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Site Principal
            </a>
            <Link 
              href="/blog" 
              className="text-pht-gold uppercase text-sm font-bold hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/blog/categoria/marketing-juridico" 
              className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketing Jurídico
            </Link>
            <Link 
              href="/blog/categoria/captacao-clientes" 
              className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Captação
            </Link>
            <Link 
              href="/blog/categoria/gestao-escritorio" 
              className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gestão
            </Link>
            <Link 
              href="/blog/categoria/redes-sociais" 
              className="text-white uppercase text-sm font-bold hover:text-pht-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Redes Sociais
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
