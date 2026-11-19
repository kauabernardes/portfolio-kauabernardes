import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePageMeta } from '../hooks/usePageMeta';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  usePageMeta({
    title: 'Contato — Kauã Bernardes',
    description:
      'Entre em contato com Kauã Bernardes por e-mail, LinkedIn ou GitHub para oportunidades e projetos.',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] pt-32 pb-16 bg-carbon flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 w-full space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="space-y-3 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/15 text-xs font-semibold text-silver">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span>Canais diretos</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-silver tracking-tight">
            Contato
          </h1>
          <p className="text-base text-silver/65 leading-relaxed">
            Fique à vontade para entrar em contato por e-mail ou se conectar comigo nas redes
            abaixo.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1: E-mail (Delicate Vermilion #F24916 accent) */}
          <div className="p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-vermilion/15 flex items-center justify-center text-vermilion">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-silver">E-mail</h2>
                <p className="text-sm text-silver/65 break-all">{profile.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-silver/10">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-vermilion hover:opacity-85 transition-opacity"
              >
                <span>Enviar mensagem</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-silver/20">•</span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-xs font-semibold text-silver/70 hover:text-silver transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-forest" />
                    <span className="text-silver">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: LinkedIn (Delicate Ultramarine #13008C accent) */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ultramarine/35 flex items-center justify-center text-silver">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-silver">LinkedIn</h2>
                <p className="text-sm text-silver/65">in/kauabernardes</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-silver/10 text-xs font-semibold text-silver/75 group-hover:text-silver transition-colors">
              <span>Acessar perfil</span>
              <ArrowUpRight className="w-4 h-4 text-silver/50 group-hover:text-vermilion transition-colors" />
            </div>
          </a>

          {/* Card 3: GitHub (Delicate Forest #2F7347 accent) */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-carbon-surface border border-silver/10 hover:border-silver/25 transition-all duration-200 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-forest/20 flex items-center justify-center text-forest">
                <Github className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-silver">GitHub</h2>
                <p className="text-sm text-silver/65">github.com/kauabernardes</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-silver/10 text-xs font-semibold text-silver/75 group-hover:text-silver transition-colors">
              <span>Ver repositórios</span>
              <ArrowUpRight className="w-4 h-4 text-silver/50 group-hover:text-forest transition-colors" />
            </div>
          </a>
        </motion.div>

        {/* Subtle Location Note */}
        <div className="inline-flex items-center gap-2 text-xs text-silver/55 pt-2">
          <MapPin className="w-3.5 h-3.5 text-vermilion" />
          <span>{profile.location}</span>
        </div>
      </div>
    </div>
  );
};
