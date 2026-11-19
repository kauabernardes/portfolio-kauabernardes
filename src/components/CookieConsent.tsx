import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_STORAGE_KEY = 'kb_portfolio_cookie_consent_v1';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!savedConsent) {
        setVisible(true);
      }
    } catch {
      // Caso o navegador bloqueie storage, não exibe o banner para não atrapalhar a experiência
      setVisible(false);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'essential') => {
    try {
      window.localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({ choice, timestamp: new Date().toISOString() })
      );
    } catch {
      // Ignora erro se o storage estiver restrito
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.22 }}
          role="region"
          aria-label="Aviso de privacidade e cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-sm"
        >
          <div className="p-5 rounded-2xl bg-carbon-surface/95 backdrop-blur-md border border-silver/15 shadow-2xl space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest" />
              <span className="text-xs font-bold text-silver">Privacidade & Cookies</span>
            </div>

            <p className="text-xs text-silver/70 leading-relaxed">
              Este site utiliza apenas armazenamento local essencial para melhorar sua navegação,
              sem rastreadores invasivos de terceiros.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleConsent('accepted')}
                className="px-4 py-1.5 rounded-full bg-vermilion text-carbon text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Aceitar
              </button>
              <button
                type="button"
                onClick={() => handleConsent('essential')}
                className="px-3.5 py-1.5 rounded-full bg-silver/[0.07] text-silver/80 hover:text-silver text-xs font-semibold transition-colors"
              >
                Apenas essenciais
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
