'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo">
        <span className="lm">ai</span>
        <span>AINETTSIDE</span>
      </Link>
      <div className="nav-links">
        <Link href="/#demo">Demo</Link>
        <Link href="/#pricing">Pris</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/#bestill" className="nav-cta">BESTILL NÅ</Link>
      </div>
    </nav>
  );
}
