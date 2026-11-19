import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group bg-carbon-surface border border-silver/10 hover:border-silver/25 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between gap-6">
      <div className="space-y-3">
        {/* Context & Year with delicate palette dot */}
        <div className="flex items-center justify-between gap-2 text-xs font-medium text-silver/60">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
            {project.context}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-ultramarine/25 text-silver/85">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-silver tracking-tight">{project.title}</h3>

        {/* Summary */}
        <p className="text-sm text-silver/75 leading-relaxed">{project.summary}</p>
      </div>

      {/* Footer: Rounded Pill Tags & Links */}
      <div className="pt-4 border-t border-silver/10 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 rounded-full bg-silver/[0.06] text-xs font-medium text-silver/85"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Código de ${project.title} no GitHub`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-silver/75 hover:text-vermilion transition-colors duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Código</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demonstração de ${project.title}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-silver/75 hover:text-vermilion transition-colors duration-200"
            >
              <span>Ver projeto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
