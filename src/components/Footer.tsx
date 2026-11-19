import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon pt-12 pb-12 border-t border-silver/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-10">
        {/* Top Row: Brand Left + Pages & Contacts Columns Right */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
          {/* Left Side: Name & Title */}
          <div className="space-y-2">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-vermilion transition-transform duration-200 group-hover:scale-125" />
              <span className="text-base font-bold text-silver tracking-tight">
                {profile.name}
              </span>
            </Link>
            <p className="text-sm text-silver/65">{profile.subheadline}</p>
          </div>

          {/* Right Side: All Site Pages & Contacts Listed Together */}
          <div className="grid grid-cols-2 gap-12 sm:gap-16 text-sm">
            {/* Site Pages Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-silver/45">
                Páginas
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/"
                    className="text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projetos"
                    className="text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-silver/45">
                Contato
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1 text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    <span>E-mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-silver/40" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-silver/75 hover:text-vermilion transition-colors duration-200"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-silver/40" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-silver/75 hover:text-forest transition-colors duration-200"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-silver/40" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Ownership Tag */}
        <div className="pt-6 border-t border-silver/10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-2 text-xs text-silver/45">
          <p >
            © {currentYear} {profile.name}. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
};
