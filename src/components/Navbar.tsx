import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navRoutes = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-carbon/85 backdrop-blur-md py-3.5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Brand with delicate vermilion dot */}
        <Link
          to="/"
          aria-label="Kauã Bernardes — Página Inicial"
          className="inline-flex items-center gap-2 text-silver font-bold text-base tracking-tight hover:opacity-85 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-vermilion" />
          <span>{portfolioData.profile.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-1 bg-carbon-surface/90 border border-silver/10 rounded-full px-2 py-1"
        >
          {navRoutes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              end={route.to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-silver/10 text-silver'
                    : 'text-silver/65 hover:text-silver'
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA: Entre em contato -> /contato */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contato"
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-vermilion text-carbon hover:opacity-90 transition-opacity duration-200"
          >
            Entre em contato
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menu"
          className="md:hidden p-2 rounded-xl bg-carbon-surface border border-silver/10 text-silver"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-3 p-4 rounded-2xl bg-carbon-surface border border-silver/10 space-y-2 shadow-xl">
          {navRoutes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              end={route.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-silver/10 text-silver' : 'text-silver/70'
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contato"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-vermilion text-carbon"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
