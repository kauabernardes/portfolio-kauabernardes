import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://kauabernardes.dev';

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
}

const setMetaTag = (selector: string, attribute: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute(attribute, value);
  }
};

export const usePageMeta = ({ title, description, path }: PageMetaOptions) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_ORIGIN}${path ?? location.pathname}`;

  useEffect(() => {
    document.title = title;

    // Standard Meta
    setMetaTag('meta[name="title"]', 'content', title);
    setMetaTag('meta[name="description"]', 'content', description);

    // Canonical URL
    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl);

    // Open Graph (LinkedIn, WhatsApp, Discord, Facebook)
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

    // Twitter / X Card
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
  }, [title, description, canonicalUrl]);
};
