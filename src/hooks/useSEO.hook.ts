import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { getSEOData, SEOData } from '../constants/seo.constants';

interface UseSEOOptions {
  dynamicTitle?: string;
  dynamicDescription?: string;
  dynamicKeywords?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  section?: string;
  tags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const useSEO = (options: UseSEOOptions = {}) => {
  const location = useLocation();
  
  useEffect(() => {
    // Obtener datos SEO basados en la ruta actual
    const routeSEO = getSEOData(location.pathname);
    
    // Merge de datos de ruta con opciones dinámicas
    const seoData: SEOData & UseSEOOptions = {
      ...routeSEO,
      ...options,
      title: options.dynamicTitle || options.title || routeSEO.title,
      description: options.dynamicDescription || options.description || routeSEO.description,
      keywords: options.dynamicKeywords || options.keywords || routeSEO.keywords
    };

    // Configuración base
    const siteName = 'Alumnos R1 Gen 2025 | EMT Exam';
    const baseUrl = 'https://emtexam.vercel.app';
    const currentUrl = `${baseUrl}${location.pathname}`;
    
    // Función helper para actualizar meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      if (!content) return;
      
      const selector = isProperty 
        ? `meta[property="${property}"]`
        : `meta[name="${property}"]`;
      
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Función para actualizar link canonical
    const updateCanonical = (href: string) => {
      let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (element) {
        element.href = href;
      } else {
        element = document.createElement('link');
        element.rel = 'canonical';
        element.href = href;
        document.head.appendChild(element);
      }
    };

    // Construir título completo
    const fullTitle = seoData.title.includes(siteName) 
      ? seoData.title 
      : `${seoData.title} | ${siteName}`;

    // Actualizar título
    document.title = fullTitle;

    // Meta tags básicos
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);

    // Robots meta tag
    const robotsContent = [];
    if (options.noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    if (options.nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    updateMetaTag('robots', robotsContent.join(', '));

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', seoData.description, true);
    updateMetaTag('og:type', seoData.type || 'article', true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', `${baseUrl}${seoData.image || '/estrella-de-la-vida.png'}`, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', seoData.description);
    updateMetaTag('twitter:image', `${baseUrl}${seoData.image || '/estrella-de-la-vida.png'}`);

    // Article specific meta tags
    if (seoData.type === 'article') {
      updateMetaTag('article:section', seoData.section || '', true);
      if (options.publishedTime) {
        updateMetaTag('article:published_time', options.publishedTime, true);
      }
      if (options.modifiedTime) {
        updateMetaTag('article:modified_time', options.modifiedTime, true);
      }
      
      // Article tags
      const existingTags = document.querySelectorAll('meta[property="article:tag"]');
      existingTags.forEach(tag => tag.remove());
      
      if (seoData.tags && seoData.tags.length > 0) {
        seoData.tags.forEach((tag: string) => {
          const element = document.createElement('meta');
          element.setAttribute('property', 'article:tag');
          element.content = tag;
          document.head.appendChild(element);
        });
      }
    }

    // Canonical URL
    updateCanonical(currentUrl);

    // Datos estructurados para artículos
    if (seoData.type === 'article') {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (existingScript) {
        existingScript.remove();
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": seoData.title,
        "description": seoData.description,
        "url": currentUrl,
        "image": `${baseUrl}${seoData.image || '/estrella-de-la-vida.png'}`,
        "author": {
          "@type": "Organization",
          "name": "Alumnos Rescate 1",
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": siteName,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/estrella-de-la-vida.png`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "datePublished": options.publishedTime || new Date().toISOString(),
        "dateModified": options.modifiedTime || new Date().toISOString(),
        "articleSection": seoData.section,
        "keywords": seoData.tags?.join(', ') || seoData.keywords,
        "inLanguage": "es-MX",
        "isPartOf": {
          "@type": "WebSite",
          "name": siteName,
          "url": baseUrl
        },
        "about": {
          "@type": "Thing",
          "name": "Atención Prehospitalaria",
          "description": "Técnico en Urgencias Médicas y Atención de Emergencias"
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [location.pathname, options]);

  return {
    updateTitle: (newTitle: string) => {
      document.title = newTitle.includes('|') ? newTitle : `${newTitle} | Alumnos R1 Gen 2025`;
    },
    updateDescription: (newDescription: string) => {
      const element = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (element) {
        element.content = newDescription;
      }
    }
  };
};
