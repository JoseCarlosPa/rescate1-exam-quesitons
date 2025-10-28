# 🎯 Trivia Médica - Juego Interactivo

## Descripción
Trivia Médica es un juego educativo interactivo diseñado para estudiantes de medicina prehospitalaria. El juego permite a los usuarios poner a prueba sus conocimientos respondiendo preguntas contra el reloj en diferentes niveles de dificultad.

## Características Principales

### 🎮 Modos de Juego
- **4 Niveles de Dificultad:**
  - 😊 **Fácil**: 10 preguntas, 30 segundos por pregunta
  - 😐 **Medio**: 15 preguntas, 25 segundos por pregunta
  - 😰 **Difícil**: 20 preguntas, 20 segundos por pregunta
  - 🔥 **Experto**: 30 preguntas, 15 segundos por pregunta

### 💡 Comodines Disponibles
Cada jugador tiene acceso a 3 comodines que puede usar durante el juego:
1. **50/50**: Elimina 2 respuestas incorrectas
2. **⏭️ Saltar**: Salta una pregunta difícil sin penalización
3. **⏰ +15s**: Añade 15 segundos extra al tiempo actual

### 🏆 Sistema de Puntuación
- **Puntos Base**: 100 puntos por respuesta correcta
- **Bonus de Tiempo**: 10 puntos por cada segundo restante
- **Bonus de Racha**: 50 puntos adicionales por 3 o más respuestas correctas consecutivas
- **Racha Visual**: Indicador de racha que aparece cuando alcanzas 3 respuestas correctas seguidas

### 📊 Características del Juego
- ⏱️ **Temporizador Visual**: Barra de progreso que cambia de color cuando queda poco tiempo
- ✅❌ **Feedback Inmediato**: Animación visual que muestra si la respuesta fue correcta o incorrecta
- 📖 **Explicaciones**: Muestra la explicación de la respuesta correcta cuando fallas
- ⏸️ **Pausa**: Opción para pausar el juego en cualquier momento
- 📈 **Estadísticas Finales**: Resumen completo del desempeño al finalizar

### 📱 Interfaz Responsiva
- Diseño adaptable a diferentes tamaños de pantalla
- Animaciones suaves y atractivas
- Gradientes modernos y coloridos
- Iconos y emojis para mejor experiencia visual

## Estadísticas Finales

Al terminar el juego, el usuario recibe:
- 🎯 **Respuestas Correctas**: Número de aciertos vs total de preguntas
- 📊 **Precisión**: Porcentaje de respuestas correctas
- ⏱️ **Tiempo Promedio**: Tiempo promedio por pregunta
- 💯 **Puntuación**: Porcentaje de puntuación sobre el máximo posible

### Mensajes de Desempeño
- 🌟 90%+: "¡Excelente! Dominas el tema a la perfección!"
- 👏 80-89%: "¡Muy bien! Tienes un conocimiento sólido!"
- 💪 60-79%: "¡Buen trabajo! Sigue practicando!"
- 📚 <60%: "¡No te rindas! La práctica hace al maestro!"

## Estructura de Archivos

```
Trivia/
├── Trivia.page.tsx              # Componente principal del juego
├── Trivia.types.ts              # Definiciones de tipos TypeScript
├── Trivia.constants.ts          # Configuraciones y constantes
├── components/
│   ├── GameSetup.component.tsx  # Pantalla de configuración inicial
│   └── QuestionCard.component.tsx # Componente de tarjeta de pregunta
└── README.md                    # Este archivo
```

## Tecnologías Utilizadas
- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🎭 Animaciones CSS personalizadas
- 📦 React Router para navegación

## Flujo del Juego

1. **Configuración**: El jugador selecciona la dificultad y categorías
2. **Juego**: Responde preguntas usando los botones A, B, C, D
3. **Comodines**: Puede usar comodines estratégicamente
4. **Feedback**: Recibe retroalimentación inmediata después de cada respuesta
5. **Resultados**: Ve sus estadísticas finales y puede jugar de nuevo

## Integración con el Sistema

El juego utiliza las preguntas existentes del sistema (`allQuestions.ts`) que contiene más de 2000 preguntas de diferentes categorías de medicina prehospitalaria.

## Mejoras Futuras Potenciales
- 🌐 Modo multijugador en tiempo real
- 🏅 Sistema de ranking y logros
- 📊 Historial de partidas
- 🎯 Modo práctica por categorías específicas
- 💾 Guardado de progreso
- 🔊 Efectos de sonido y música de fondo

## Autor
Desarrollado como parte del sistema educativo de medicina prehospitalaria.

## Notas
- El juego está optimizado para navegadores modernos
- Se recomienda jugar en pantalla completa para mejor experiencia
- Las preguntas son aleatorias en cada partida para mayor variedad

