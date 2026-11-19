import React from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  Briefcase,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';
import { downloadFormattedResume } from '../utils/downloadFormattedResume';

export const AboutPage: React.FC = () => {
  const {
    profile,
    experiences,
    stackCategories,
    academics,
    certifications,
    creativeHighlight,
  } = portfolioData;

  usePageMeta({
    title: 'Sobre & Trajetória — Kauã Bernardes',
    description:
      'Conheça a experiência profissional, trajetória na Transpetro e Polícia Civil ES, formação no IFES, certificações e stack tecnológica de Kauã Bernardes.',
  });

  return (
    <div className="min-h-screen pt-32 pb-16 bg-carbon">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-16">
        {/* 1. Bio & Botão de Baixar Currículo Formatado */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ultramarine/30 text-xs font-semibold text-silver">
                <span className="w-2 h-2 rounded-full bg-vermilion" />
                <span>Trajetória & Qualificações</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-silver tracking-tight">
                Sobre mim
              </h1>
            </div>

            {/* Botão para Baixar Currículo Formatado */}
            <button
              type="button"
              onClick={downloadFormattedResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vermilion text-carbon text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity duration-200 self-start sm:self-end shrink-0"
            >
              <FileDown className="w-4 h-4" />
              <span>Baixar currículo</span>
            </button>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-carbon-surface border border-silver/10 space-y-3.5 text-base text-silver/80 leading-relaxed text-justify">
            {profile.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        {/* 2. Experiência & Trajetória (Timeline Conectada e Refinada) */}
        <section aria-labelledby="timeline-title" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="timeline-title" className="text-xl sm:text-2xl font-bold text-silver tracking-tight">
              Experiência e trajetória
            </h2>
            <span className="text-xs font-medium text-silver/45">
              {experiences.length} atuações
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-silver/15 space-y-5">
            {experiences.map((exp, idx) => {
              const nodeColors = ['bg-forest', 'bg-ultramarine', 'bg-vermilion', 'bg-forest'];
              const dotColor = exp.current ? 'bg-forest' : nodeColors[idx % nodeColors.length];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className="relative group"
                >
                  {/* Marcador delicado na linha do tempo */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[29px] sm:-left-[37px] top-6 w-2.5 h-2.5 rounded-full ${dotColor} ring-4 ring-carbon`}
                  />

                  <div className="p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 pb-3.5 border-b border-silver/10">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-base sm:text-lg font-bold text-silver">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest/20 text-xs font-semibold text-silver">
                              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                              Atual
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-silver/65">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-silver/85">
                            <Briefcase className="w-3.5 h-3.5 text-vermilion" />
                            {exp.company}
                          </span>
                          <span className="inline-flex items-center gap-1 text-silver/55">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-silver/[0.06] text-xs font-semibold text-silver/80 self-start shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-sm text-silver/75 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-vermilion/80 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. Stack Tecnológica */}
        <section aria-labelledby="stack-title" className="space-y-5">
          <h2 id="stack-title" className="text-xl sm:text-2xl font-bold text-silver tracking-tight">
            Tecnologias e ferramentas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stackCategories.map((cat, idx) => {
              const dotColors = ['bg-vermilion', 'bg-forest', 'bg-ultramarine', 'bg-silver'];
              return (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl bg-carbon-surface border border-silver/10 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${dotColors[idx % dotColors.length]}`} />
                    <h3 className="text-sm font-bold text-silver">{cat.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 rounded-full bg-silver/[0.06] text-xs font-medium text-silver/85"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Formação Acadêmica & Destaque Criativo */}
        <section aria-labelledby="education-title" className="space-y-5">
          <h2 id="education-title" className="text-xl sm:text-2xl font-bold text-silver tracking-tight">
            Formação acadêmica e destaques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academics.map((acad) => (
              <div
                key={acad.id}
                className="p-6 rounded-2xl bg-carbon-surface border border-silver/10 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-silver/60">
                    <span className="inline-flex items-center gap-1.5 text-silver/80 font-semibold">
                      <GraduationCap className="w-4 h-4 text-forest" />
                      Ensino Técnico & Médio
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-forest/15 text-silver/90">
                      {acad.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-silver">{acad.degree}</h3>
                    <p className="text-sm text-silver/65 mt-1">{acad.institution}</p>
                  </div>

                  {acad.description && (
                    <p className="text-sm text-silver/70 leading-relaxed pt-1">
                      {acad.description}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Destaque Criativo / Festival de Cinema */}
            <div className="p-6 rounded-2xl bg-carbon-surface border border-silver/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-silver/80">
                  <Sparkles className="w-4 h-4 text-vermilion" />
                  {creativeHighlight.badge}
                </span>
                <h3 className="text-base font-bold text-silver">
                  {creativeHighlight.title}
                </h3>
                <p className="text-sm text-silver/70 leading-relaxed">
                  {creativeHighlight.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cursos Complementares & Certificações (Suporta N itens independentes) */}
        <section aria-labelledby="certifications-title" className="space-y-5">
          <div className="flex items-center justify-between">
            <h2
              id="certifications-title"
              className="text-xl sm:text-2xl font-bold text-silver tracking-tight"
            >
              Cursos e certificações
            </h2>
            <span className="text-xs font-medium text-silver/45">
              {certifications.length} certificados
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-silver/65">
                      <Award className="w-3.5 h-3.5 text-vermilion" />
                      {cert.issuer}
                    </span>

                    {cert.workload && (
                      <span className="px-2.5 py-0.5 rounded-full bg-ultramarine/30 text-[11px] font-semibold text-silver/90">
                        {cert.workload}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-silver leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {(cert.year || cert.credentialUrl) && (
                  <div className="pt-2 border-t border-silver/10 flex items-center justify-between text-xs text-silver/55">
                    <span>{cert.year || 'Concluído'}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-silver/75 hover:text-vermilion transition-colors"
                      >
                        <span>Credencial</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
