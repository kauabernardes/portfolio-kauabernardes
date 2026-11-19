import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';

export const HomePage: React.FC = () => {
  const { profile } = portfolioData;

  usePageMeta({
    title: 'Kauã Bernardes — Desenvolvedor de soluções digitais',
    description:
      'Portfólio de Kauã Bernardes — Desenvolvedor Full-Stack (TypeScript, Node.js, NestJS, React) e Especialista em Automação de Processos (RPA, Python, SAP PM).',
  });

  return (
    <div className="min-h-[calc(100vh-6rem)] pt-32 pb-16 bg-carbon flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 w-full space-y-16">
        {/* Clean, Objective Hero */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-6 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/15 text-xs font-semibold text-silver/90">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span>{profile.statusBadge}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-silver tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-silver/70">
              {profile.role}
            </p>
          </div>

          <p className="text-base text-silver/65 leading-relaxed ">
            {profile.subheadline}
          </p>

          {/* Two Primary Rounded CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vermilion text-carbon text-sm font-bold hover:opacity-90 transition-opacity duration-200"
            >
              <span>Entrar em contato</span>
            </Link>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-carbon-surface border border-silver/15 text-silver text-sm font-semibold hover:bg-silver/10 transition-colors duration-200"
            >
              <span>Visualizar sobre</span>
              <ArrowRight className="w-4 h-4 text-silver/70" />
            </Link>
          </div>
        </motion.section>

        {/* Minimalist Navigation Cards with Delicate Palette Dots */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.06 }}
          aria-label="Navegação rápida"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <Link
            to="/projetos"
            className="group p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-base font-bold text-silver">
                  <span className="w-2 h-2 rounded-full bg-vermilion" />
                  Projetos
                </span>
                <ArrowUpRight className="w-4 h-4 text-silver/50 group-hover:text-vermilion transition-colors" />
              </div>
              <p className="text-sm text-silver/65 leading-relaxed">
                Visualize as soluções web, sistemas full-stack e automações que já desenvolvi.
              </p>
            </div>
          </Link>

          <Link
            to="/sobre"
            className="group p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-base font-bold text-silver">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  Sobre
                </span>
                <ArrowUpRight className="w-4 h-4 text-silver/50 group-hover:text-forest transition-colors" />
              </div>
              <p className="text-sm text-silver/65 leading-relaxed">
                Conheça minha experiência profissional, formação no IFES e tecnologias.
              </p>
            </div>
          </Link>

          <Link
            to="/contato"
            className="group p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-base font-bold text-silver">
                  <span className="w-2 h-2 rounded-full bg-ultramarine" />
                  Contato
                </span>
                <ArrowUpRight className="w-4 h-4 text-silver/50 group-hover:text-silver transition-colors" />
              </div>
              <p className="text-sm text-silver/65 leading-relaxed">
                Acesse meu e-mail direto, perfil no LinkedIn e repositórios no GitHub.
              </p>
            </div>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};
