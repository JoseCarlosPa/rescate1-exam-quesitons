# 🎮 Página de Juegos Educativos

## Descripción

Página central para todos los juegos educativos de medicina prehospitalaria. Diseñada para ser escalable y permitir agregar nuevos juegos fácilmente.

## Estructura

```
Games/
└── Games.page.tsx    # Página principal de juegos
```

## Juegos Actuales

### ✅ Jeopardy Médico (Disponible)
- **Ruta**: `/jeopardy`
- **Tipo**: Multijugador por equipos
- **Características**: 30 preguntas, 6 categorías, sistema de puntos
- **Estado**: ✅ Completamente funcional

## Juegos Planeados

### 🔜 Trivia Rápida (Próximamente)
- Preguntas de opción múltiple contra el reloj
- Modo individual
- Sistema de puntuación basado en velocidad

### 🔜 Rompecabezas Anatómico (Próximamente)
- Juego de puzzle interactivo
- Enfocado en anatomía
- Diferentes niveles de dificultad

### 🔜 Memory Match (Próximamente)
- Juego de memoria con términos médicos
- Encuentra las parejas
- Modo práctica y modo competitivo

### 🔜 Simulador de Emergencias (Próximamente)
- Toma de decisiones en escenarios realistas
- Sistema de ramificación de decisiones
- Feedback educativo

### 🔜 Batalla de Protocolos (Próximamente)
- Modo multijugador online
- Competencia en tiempo real
- Ranking y estadísticas

## Cómo Agregar un Nuevo Juego

### 1. Crear la página del juego

```bash
src/pages/NuevoJuego/
├── NuevoJuego.page.tsx
├── NuevoJuego.types.ts
├── NuevoJuego.constants.ts
└── components/
```

### 2. Agregar la ruta en Router.constants.ts

```typescript
export enum AllRoutes {
    // ...existing routes...
    NUEVO_JUEGO = "/nuevo-juego"
}
```

### 3. Agregar la ruta en Router.component.tsx

```typescript
import NuevoJuego from "../../pages/NuevoJuego/NuevoJuego.page.tsx";

// En el componente Router:
<Route path={AllRoutes.NUEVO_JUEGO} element={<NuevoJuego/>}/>
```

### 4. Actualizar Games.page.tsx

Reemplaza una de las tarjetas "Próximamente" con:

```tsx
<NavLink 
    to={AllRoutes.NUEVO_JUEGO}
    className="group bg-gradient-to-br from-[color1] to-[color2] rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition duration-300 border-4 border-[accentColor]"
>
    <div className="text-center">
        <div className="bg-[accentColor] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
            <IconComponent className="text-[color] w-12 h-12"/>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
            Nombre del Juego
        </h2>
        <p className="text-gray-200 mb-4">
            Descripción breve del juego
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="bg-[color] text-[color] px-3 py-1 rounded-full text-sm font-semibold">
                Etiqueta 1
            </span>
            <span className="bg-[color] text-[color] px-3 py-1 rounded-full text-sm font-semibold">
                Etiqueta 2
            </span>
        </div>
        <div className="text-[accentColor] font-semibold text-lg">
            ¡Disponible ahora! →
        </div>
    </div>
</NavLink>
```

## Características de la Página

### ✨ Diseño Visual
- **Gradiente**: Fondo degradado de púrpura a azul
- **Tarjetas Interactivas**: Efecto hover con escala
- **Badges**: Etiquetas descriptivas para cada juego
- **Estado Visual**: Diferenciación clara entre disponibles y próximos

### 🎨 Estilos de Tarjetas

#### Juego Disponible
- Colores vibrantes con gradientes
- Borde amarillo/colorido
- Efecto hover con rotación de ícono
- Botón "¡Disponible ahora!"

#### Juego Próximamente
- Gradiente gris
- Opacidad reducida (60%)
- Badge "Próximamente" en naranja rotado
- Sin interacción

### 📱 Responsive
- **Mobile**: Grid de 1 columna
- **Tablet**: Grid de 2 columnas
- **Desktop**: Grid de 3 columnas

## Flujo de Usuario

1. Usuario hace clic en "Juegos" desde la página principal
2. Ve la galería de juegos disponibles y próximos
3. Puede hacer clic en cualquier juego disponible
4. El juego próximo muestra feedback visual
5. Botón "Volver al Inicio" para navegación fácil

## Beneficios del Sistema

### Para Desarrolladores
✅ Fácil de escalar
✅ Estructura clara y organizada
✅ Placeholders visuales para planificación
✅ Sistema modular

### Para Usuarios
✅ Vista clara de todos los juegos
✅ Saben qué está disponible y qué viene
✅ Interfaz atractiva y motivadora
✅ Fácil navegación

## Próximos Pasos

1. ✅ Implementar Jeopardy (Completado)
2. 🔜 Desarrollar Trivia Rápida
3. 🔜 Crear Rompecabezas Anatómico
4. 🔜 Implementar Memory Match
5. 🔜 Desarrollar Simulador de Emergencias
6. 🔜 Crear Batalla de Protocolos

## Paleta de Colores Sugerida para Nuevos Juegos

- **Trivia**: Verde (from-green-600 to-teal-600)
- **Puzzle**: Naranja (from-orange-600 to-red-600)
- **Memory**: Rosa (from-pink-600 to-purple-600)
- **Simulador**: Rojo (from-red-600 to-orange-600)
- **Batalla**: Morado oscuro (from-purple-700 to-indigo-700)

## Notas de Implementación

- Todos los juegos deben tener contenido educativo basado en AAOS
- Incluir explicaciones y feedback educativo
- Considerar modos individual y multijugador
- Implementar sistema de estadísticas/progreso (futuro)
- Mantener diseño coherente con el resto de la aplicación

