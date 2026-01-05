import { useEffect } from "react";
import { useLocation } from "react-router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEO({
  title = "",
  description = "",
  keywords = "",
  image = "/estrella-de-la-vida.png",
  url = "",
  type = "website",
  author = "Alumnos Rescate 1",
  publishedTime = "",
  modifiedTime = "",
  section = "",
  tags = [],
  canonicalUrl = "",
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const location = useLocation();

  // Configuración base del sitio
  const siteName = "Alumnos R1  | EMT Exam";
  const baseUrl = "https://rescate1-examenes.web.app";
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const defaultDescription =
    "Plataforma educativa para estudiantes de Técnico en Urgencias Médicas. Aprende atención prehospitalaria con contenido basado en AAOS y estándares internacionales.";
  const defaultKeywords =
    "EMT, atención prehospitalaria, urgencias médicas, rescate, primeros auxilios, AAOS, medicina de emergencia, técnico en urgencias médicas, paramédico, SVB, soporte vital básico";

  // Construir título completo
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Construir descripción completa
  const fullDescription = description || defaultDescription;

  // Construir keywords completos
  const fullKeywords = keywords
    ? `${keywords}, ${defaultKeywords}`
    : defaultKeywords;

  // Función para actualizar meta tags
  const updateMetaTag = (
    property: string,
    content: string,
    isProperty = false
  ) => {
    if (!content) return;

    const selector = isProperty
      ? `meta[property="${property}"]`
      : `meta[name="${property}"]`;

    let element = document.querySelector(selector) as HTMLMetaElement;

    if (element) {
      element.content = content;
    } else {
      element = document.createElement("meta");
      if (isProperty) {
        element.setAttribute("property", property);
      } else {
        element.setAttribute("name", property);
      }
      element.content = content;
      document.head.appendChild(element);
    }
  };

  // Función para actualizar link tags
  const updateLinkTag = (rel: string, href: string) => {
    if (!href) return;

    let element = document.querySelector(
      `link[rel="${rel}"]`
    ) as HTMLLinkElement;

    if (element) {
      element.href = href;
    } else {
      element = document.createElement("link");
      element.rel = rel;
      element.href = href;
      document.head.appendChild(element);
    }
  };

  // Función para crear datos estructurados
  const createStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      name: fullTitle,
      description: fullDescription,
      url: currentUrl,
      image: `${baseUrl}${image}`,
      author: {
        "@type": "Organization",
        name: author,
        url: baseUrl,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/estrella-de-la-vida.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": currentUrl,
      },
      inLanguage: "es-MX",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: baseUrl,
      },
    };

    if (type === "article") {
      Object.assign(structuredData, {
        datePublished: publishedTime || new Date().toISOString(),
        dateModified: modifiedTime || new Date().toISOString(),
        articleSection: section,
        keywords: tags.length > 0 ? tags.join(", ") : fullKeywords,
      });
    }

    // Remover script anterior si existe
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Crear nuevo script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  useEffect(() => {
    // Actualizar título
    document.title = fullTitle;

    // Meta tags básicos
    updateMetaTag("description", fullDescription);
    updateMetaTag("keywords", fullKeywords);
    updateMetaTag("author", author);

    // Robots meta tag
    const robotsContent = [];
    if (noindex) robotsContent.push("noindex");
    if (nofollow) robotsContent.push("nofollow");
    if (robotsContent.length === 0) {
      robotsContent.push("index", "follow");
    }
    updateMetaTag("robots", robotsContent.join(", "));

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", fullDescription, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", `${baseUrl}${image}`, true);
    updateMetaTag("og:site_name", siteName, true);
    updateMetaTag("og:locale", "es_MX", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", fullDescription);
    updateMetaTag("twitter:image", `${baseUrl}${image}`);

    // Article specific meta tags
    if (type === "article") {
      updateMetaTag("article:author", author, true);
      updateMetaTag("article:section", section, true);
      if (publishedTime)
        updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime)
        updateMetaTag("article:modified_time", modifiedTime, true);
      tags.forEach((tag) => {
        const element = document.createElement("meta");
        element.setAttribute("property", "article:tag");
        element.content = tag;
        document.head.appendChild(element);
      });
    }

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl || currentUrl);

    // Crear datos estructurados
    createStructuredData();

    // Cleanup function
    return () => {
      // Limpieza opcional si es necesario
    };
  }, [
    fullTitle,
    fullDescription,
    fullKeywords,
    currentUrl,
    image,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    canonicalUrl,
    noindex,
    nofollow,
  ]);

  return null; // Este componente no renderiza nada visible
}
