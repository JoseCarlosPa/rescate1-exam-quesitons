#!/usr/bin/env node

/**
 * Script de validación de SEO para EMT Exam
 * Valida que todas las páginas tengan configuración SEO apropiada
 */

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colores para output en consola
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateSEOImplementation() {
    log('🔍 Validando implementación de SEO...', 'blue');

    const issues = [];
    const warnings = [];
    const successes = [];

    // Cambiar al directorio raíz del proyecto
    const projectRoot = path.join(__dirname, '..');
    process.chdir(projectRoot);

    // 1. Verificar archivos esenciales
    const requiredFiles = [
        'public/sitemap.xml',
        'public/robots.txt',
        'public/manifest.json',
        'src/constants/seo.constants.ts',
        'src/hooks/useSEO.hook.ts',
        'src/components/SEO/SEO.component.tsx',
        'src/utils/seo.utils.ts'
    ];

    log('\n📁 Verificando archivos requeridos...', 'yellow');
    requiredFiles.forEach(file => {
        if (fs.existsSync(file)) {
            successes.push(`✅ ${file} existe`);
        } else {
            issues.push(`❌ ${file} no encontrado`);
        }
    });

    // 2. Verificar index.html
    log('\n📄 Verificando index.html...', 'yellow');
    if (fs.existsSync('index.html')) {
        const indexContent = fs.readFileSync('index.html', 'utf8');

        const requiredMetaTags = [
            {tag: 'meta name="description"', name: 'Meta description'},
            {tag: 'meta name="keywords"', name: 'Meta keywords'},
            {tag: 'meta property="og:title"', name: 'Open Graph title'},
            {tag: 'meta property="og:description"', name: 'Open Graph description'},
            {tag: 'meta name="twitter:card"', name: 'Twitter Card'},
            {tag: 'link rel="canonical"', name: 'Canonical URL'},
            {tag: 'application/ld+json', name: 'Structured data'}
        ];

        requiredMetaTags.forEach(({tag, name}) => {
            if (indexContent.includes(tag)) {
                successes.push(`✅ ${name} presente en index.html`);
            } else {
                issues.push(`❌ ${name} faltante en index.html`);
            }
        });

        // Verificar lang attribute
        if (indexContent.includes('lang="es-MX"') || indexContent.includes('lang="es"')) {
            successes.push('✅ Atributo lang configurado');
        } else {
            issues.push('❌ Atributo lang no configurado');
        }
    } else {
        issues.push('❌ index.html no encontrado');
    }

    // 3. Verificar sitemap.xml
    log('\n🗺️ Verificando sitemap.xml...', 'yellow');
    if (fs.existsSync('public/sitemap.xml')) {
        const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');

        // Contar URLs
        const urlMatches = sitemapContent.match(/<url>/g);
        const urlCount = urlMatches ? urlMatches.length : 0;

        if (urlCount > 40) {
            successes.push(`✅ Sitemap contiene ${urlCount} URLs`);
        } else if (urlCount > 20) {
            warnings.push(`⚠️ Sitemap contiene ${urlCount} URLs (recomendado: 40+)`);
        } else {
            issues.push(`❌ Sitemap contiene solo ${urlCount} URLs`);
        }

        // Verificar estructura
        if (sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
            successes.push('✅ Sitemap tiene estructura XML válida');
        } else {
            issues.push('❌ Sitemap tiene estructura XML inválida');
        }
    }

    // 4. Verificar robots.txt
    log('\n🤖 Verificando robots.txt...', 'yellow');
    if (fs.existsSync('public/robots.txt')) {
        const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');

        if (robotsContent.includes('Sitemap:')) {
            successes.push('✅ robots.txt referencia sitemap');
        } else {
            issues.push('❌ robots.txt no referencia sitemap');
        }

        if (robotsContent.includes('User-agent: *') && robotsContent.includes('Allow: /')) {
            successes.push('✅ robots.txt permite indexación');
        } else {
            warnings.push('⚠️ robots.txt puede estar bloqueando indexación');
        }
    }

    // 5. Verificar constants SEO
    log('\n📋 Verificando constants de SEO...', 'yellow');
    if (fs.existsSync('src/constants/seo.constants.ts')) {
        const constantsContent = fs.readFileSync('src/constants/seo.constants.ts', 'utf8');

        // Contar rutas configuradas
        const routeMatches = constantsContent.match(/\[AllRoutes\./g);
        const routeCount = routeMatches ? routeMatches.length : 0;

        if (routeCount > 40) {
            successes.push(`✅ ${routeCount} rutas con SEO configurado`);
        } else if (routeCount > 20) {
            warnings.push(`⚠️ ${routeCount} rutas con SEO configurado (recomendado: 40+)`);
        } else {
            issues.push(`❌ Solo ${routeCount} rutas con SEO configurado`);
        }
    }

    // 6. Verificar manifest.json
    log('\n📱 Verificando manifest.json...', 'yellow');
    if (fs.existsSync('public/manifest.json')) {
        try {
            const manifestContent = JSON.parse(fs.readFileSync('public/manifest.json', 'utf8'));

            const requiredFields = ['name', 'short_name', 'description', 'start_url', 'display', 'theme_color', 'icons'];
            requiredFields.forEach(field => {
                if (manifestContent[field]) {
                    successes.push(`✅ Manifest tiene campo ${field}`);
                } else {
                    issues.push(`❌ Manifest falta campo ${field}`);
                }
            });

            if (manifestContent.lang === 'es-MX') {
                successes.push('✅ Manifest configurado para es-MX');
            } else {
                warnings.push('⚠️ Manifest no especifica idioma es-MX');
            }
        } catch (e) {
            issues.push('❌ manifest.json tiene JSON inválido');
        }
    }

    // Mostrar resultados
    log('\n📊 RESULTADOS DE VALIDACIÓN SEO', 'blue');
    log('================================', 'blue');

    if (successes.length > 0) {
        log(`\n✅ ÉXITOS (${successes.length}):`, 'green');
        successes.forEach(success => log(success, 'green'));
    }

    if (warnings.length > 0) {
        log(`\n⚠️ ADVERTENCIAS (${warnings.length}):`, 'yellow');
        warnings.forEach(warning => log(warning, 'yellow'));
    }

    if (issues.length > 0) {
        log(`\n❌ PROBLEMAS CRÍTICOS (${issues.length}):`, 'red');
        issues.forEach(issue => log(issue, 'red'));
    }

    // Score final
    const totalChecks = successes.length + warnings.length + issues.length;
    const score = Math.round(((successes.length + warnings.length * 0.5) / totalChecks) * 100);

    log(`\n🎯 PUNTUACIÓN SEO: ${score}/100`, score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red');

    if (score >= 90) {
        log('🎉 ¡Excelente implementación de SEO!', 'green');
    } else if (score >= 70) {
        log('👍 Buena implementación de SEO, con mejoras menores', 'yellow');
    } else {
        log('🔧 Implementación de SEO necesita mejoras significativas', 'red');
    }

    log('\n📈 RECOMENDACIONES:', 'blue');
    log('- Verificar que todas las páginas usen useSEO() o SEOWrapper', 'blue');
    log('- Revisar Google Search Console después del deploy', 'blue');
    log('- Implementar Analytics para monitorear performance', 'blue');
    log('- Considerar más keywords long-tail específicos', 'blue');

    return {score, issues: issues.length, warnings: warnings.length, successes: successes.length};
}

// Ejecutar validación
validateSEOImplementation();
