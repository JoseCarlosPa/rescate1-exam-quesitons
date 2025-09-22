import {AllRoutes} from '../components/Router/Router.constants';

interface SitemapURL {
    url: string;
    changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    lastMod?: string;
}

const baseUrl = 'https://rescate1-examenes.web.app';
const currentDate = new Date().toISOString();

export const sitemapConfig: SitemapURL[] = [
    // Página principal
    {
        url: '/',
        changeFreq: 'weekly',
        priority: 1.0,
        lastMod: currentDate
    },

    // Páginas principales de alta prioridad
    {
        url: AllRoutes.GENERAL,
        changeFreq: 'weekly',
        priority: 0.9,
        lastMod: currentDate
    },
    {
        url: AllRoutes.RESOURCES,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },

    // Emergencias médicas (alta prioridad)
    {
        url: AllRoutes.AIRWAY_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.CARDIO_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.NEURO_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.PEDIATRIC_EMERGENCIES,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },

    // Fundamentos y bases teóricas
    {
        url: AllRoutes.LEGAL,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.COMMUNICATIONS,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.SEM,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.SECURITY_OF_PERSONAL,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.MEDIC_TERMS,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.HUMAN_BODY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.EVALUATION,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.MNEMOTECNIAS,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },

    // Técnicas y procedimientos
    {
        url: AllRoutes.AIRWAY_MANAGE,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.PHARMACOLOGY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.MED_ADMIN,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.SHOCK,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.REANIMATE_SVB,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.BLS,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },

    // Trauma y lesiones
    {
        url: AllRoutes.TRAUMA,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.IMMOBILIZATION,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.BLEEDING,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.HEAD_AND_COLUMN_INJURIES,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.STOP_THE_BLEED,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },

    // Otras emergencias médicas
    {
        url: AllRoutes.GASTRO_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.ENDOCRINE_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.8,
        lastMod: currentDate
    },
    {
        url: AllRoutes.INMUNO_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.TOXICOLOGY,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.AMBIENTAL_EMERGENCIES,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.PSIQUIATRIC_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },

    // Poblaciones especiales
    {
        url: AllRoutes.GINE_EMERGENCY,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.OBSTETRIC_CARE,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.GERIATRIC_EMERGENCIES,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.SPECIAL_NEEDS_PACIENT,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },

    // Trauma específico
    {
        url: AllRoutes.FACE_AND_NECK,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.SOFT_TISSUE,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.TORAX_INJURIES,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.FEET_INJURIES,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.ABDO_GENI_INJURIES,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },

    // Sistemas y operaciones
    {
        url: AllRoutes.TRANSPORT_OPERATIONS,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.INCIDENT_MANAGEMENT,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.TERRORIST_MANAGEMENT,
        changeFreq: 'monthly',
        priority: 0.6,
        lastMod: currentDate
    },

    // Páginas adicionales
    {
        url: AllRoutes.LIFE_SPEC,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.MEGA,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.MEDIC_VISION,
        changeFreq: 'monthly',
        priority: 0.7,
        lastMod: currentDate
    },
    {
        url: AllRoutes.LMS,
        changeFreq: 'weekly',
        priority: 0.7,
        lastMod: currentDate
    }
];

// Función para generar el XML del sitemap
export const generateSitemapXML = (): string => {
    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    const xmlFooter = '</urlset>';

    const urlEntries = sitemapConfig.map(({url, changeFreq, priority, lastMod}) => {
        const fullUrl = url === '/' ? baseUrl : `${baseUrl}${url}`;
        return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastMod || currentDate}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('');

    return `${xmlHeader}${urlEntries}
${xmlFooter}`;
};

// Función para generar robots.txt
export const generateRobotsTxt = (): string => {
    const allowedPaths = sitemapConfig.map(({url}) => `Allow: ${url}`).join('\n');

    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Allow important content
${allowedPaths}

# Allow assets
Allow: /assets/
Allow: /estrella-de-la-vida.png
Allow: /manifest.json

# Google and Bing specific settings
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1`;
};
