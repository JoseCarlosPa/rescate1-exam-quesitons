# Memory Match - Juego de Memoria Médica

## Descripción
Memory Match es un juego educativo de memoria donde los estudiantes deben encontrar parejas de términos médicos de atención prehospitalaria con sus definiciones correspondientes.

## Características

### 🎮 Tres Niveles de Dificultad
- **Fácil**: 6 parejas (12 tarjetas)
- **Medio**: 12 parejas (24 tarjetas)
- **Difícil**: 18 parejas (36 tarjetas)

### 📊 Sistema de Puntuación
- Puntuación basada en movimientos y tiempo
- Estrellas según rendimiento (⭐⭐⭐, ⭐⭐, ⭐)
- Estadísticas detalladas al finalizar

### 🧠 Contenido Educativo
30 parejas de términos médicos en 8 categorías:
- **Anatomía**: Diafragma, Carina, Fémur, Nervio Vago, etc.
- **Fisiología**: Hemoglobina, Taquicardia, Hipoxia, Bradicardia, etc.
- **Signos**: Cianosis, Disnea, Apnea, Hemoptisis, Epistaxis
- **Condiciones**: Shock y otras condiciones médicas
- **Técnicas**: RCP, Intubación, Cricotirotomía
- **Equipamiento**: DEA, Collar Cervical
- **Evaluación**: SAMPLE y otros métodos
- **Farmacología**: Epinefrina, Aspirina, Glucosa, Nitroglicerina, Naloxona, Oxígeno

## Cómo Jugar

1. **Selecciona Dificultad**: Elige entre Fácil, Medio o Difícil
2. **Voltea las Tarjetas**: Haz clic en una tarjeta para voltearla
3. **Encuentra Parejas**: Une cada término con su definición correcta
4. **Memoriza**: Recuerda la ubicación de las tarjetas
5. **Completa el Juego**: Encuentra todas las parejas

## Mecánicas del Juego

### Identificación Visual
- **Tarjetas Verdes** (📘): Términos médicos
- **Tarjetas Naranjas** (📝): Definiciones
- **Tarjetas Amarillas** (✓): Parejas encontradas

### Validación de Parejas
- Solo se puede emparejar un término con su definición
- Las parejas correctas se resaltan en amarillo
- Las parejas incorrectas se voltean automáticamente

### Sistema de Temporizador
- Cronómetro automático al iniciar
- Se detiene al completar el juego
- Afecta la puntuación final

## Estructura de Archivos

```
MemoryMatch/
├── MemoryMatch.page.tsx        # Componente principal del juego
├── MemoryMatch.types.ts         # Definiciones TypeScript
├── MemoryMatch.constants.ts     # 30 parejas de términos médicos
└── components/
    ├── GameSetup.component.tsx        # Pantalla de configuración
    └── MemoryCardComponent.tsx        # Componente de tarjeta individual
```

## Tecnologías
- React 18+ con TypeScript
- React Hooks (useState, useEffect, useCallback)
- Tailwind CSS para estilos
- Animaciones CSS 3D (flip cards)

## Algoritmo de Puntuación

```typescript
const score = Math.max(0, 1000 - (movimientos * 10) - (tiempo * 2));

Clasificación:
- ⭐⭐⭐ (Excelente): > 800 puntos
- ⭐⭐ (Bueno): 500-800 puntos
- ⭐ (Completado): < 500 puntos
```

## Características Técnicas

### Optimizaciones
- Uso de `useCallback` para prevenir re-renders innecesarios
- Animaciones CSS en vez de JavaScript para mejor rendimiento
- Sistema de bloqueo de clics durante verificación

### Accesibilidad
- Diseño responsive (mobile-first)
- Grid adaptativo según dificultad
- Indicadores visuales claros
- Feedback inmediato de acciones

## Futuras Mejoras
- [ ] Sistema de récords personales
- [ ] Categorías personalizables
- [ ] Modo multijugador competitivo
- [ ] Efectos de sonido
- [ ] Integración con sistema de puntos del LMS
- [ ] Guardar progreso en Firebase
- [ ] Leaderboard global

## Beneficios Educativos
1. **Memorización Activa**: Refuerzo de terminología médica
2. **Asociación Conceptual**: Conectar términos con definiciones
3. **Aprendizaje Lúdico**: Gamificación del estudio
4. **Evaluación Informal**: Sin presión de examen formal
5. **Repetición Espaciada**: Jugar múltiples veces refuerza el aprendizaje

