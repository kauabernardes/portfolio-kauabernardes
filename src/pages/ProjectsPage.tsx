import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { usePageMeta } from '../hooks/usePageMeta';

export const ProjectsPage: React.FC = () => {
  const { projects, profile } = portfolioData;

  usePageMeta({
    title: 'Projetos — Kauã Bernardes',
    description:
      'Visualize as soluções digitais, sistemas web full-stack e automações RPA desenvolvidas por Kauã Bernardes.',
  });

  return (
    <div className="min-h-screen pt-32 pb-16 bg-carbon">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-10">
        {/* Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-silver tracking-tight">
              Projetos
            </h1>
            <p className="text-base text-silver/65">
              Conheça as soluções que desenvolvi para resolver problemas e otimizar processos.
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-carbon-surface border border-silver/10 text-xs font-semibold text-silver/80 hover:text-silver hover:border-silver/25 transition-colors duration-200 self-start sm:self-end"
          >
            <span>Ver mais no GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
