import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['estrella-de-la-vida.png', 'vite.svg'],
            workbox: {
                maximumFileSizeToCacheInBytes: 5242880, // Aumentamos el límite a 3MB
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 días
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            },
            manifest: {
                name: 'Alumnos R1 Gen 2025 | Examen Prueba',
                short_name: 'EMT Exam',
                description: 'Aplicación de estudio para Alumnos Rescate 1 | Gen 2025',
                theme_color: '#ff6900',
                icons: [
                    {
                        src: '/estrella-de-la-vida.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/estrella-de-la-vida.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    base: '/'
})
