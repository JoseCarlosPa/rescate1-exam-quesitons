# Jeopardy Médico - Juego Educativo

## 📋 Descripción

Juego de Jeopardy diseñado específicamente para estudiantes de atención médica prehospitalaria básica (AAOS), con preguntas sobre temas médicos de emergencia.

## 🎮 Características del Juego

### Configuración del Juego
- **Número de Equipos**: Configurable de 1 a 6 equipos
- **Jugadores por Equipo**: Configurable de 1 a 8 jugadores por equipo
- **Personalización**: Nombres personalizables para equipos y jugadores

### Categorías del Juego
El juego incluye 6 categorías de preguntas:

1. **Anatomía** - Preguntas sobre estructuras y sistemas del cuerpo humano
2. **Fisiología** - Preguntas sobre el funcionamiento del cuerpo
3. **Técnicas** - Procedimientos y técnicas de atención prehospitalaria
4. **Casos Clínicos** - Escenarios realistas de emergencias médicas
5. **Farmacología** - Medicamentos y su administración
6. **Protocolos** - Procedimientos estandarizados de atención

### Valores de Puntos
- 100 puntos (Nivel Básico)
- 200 puntos (Nivel Fácil-Intermedio)
- 300 puntos (Nivel Intermedio)
- 400 puntos (Nivel Intermedio-Difícil)
- 500 puntos (Nivel Difícil)

## 🎯 Cómo Jugar

1. **Configuración Inicial**
   - Selecciona el número de equipos
   - Define cuántos jugadores habrá por equipo
   - Personaliza los nombres de equipos y jugadores

2. **Jugando**
   - El equipo en turno selecciona una pregunta del tablero
   - Se muestra la pregunta con 4 opciones de respuesta
   - El equipo selecciona una respuesta
   - Se muestra si es correcta o incorrecta con explicación

3. **Puntuación**
   - ✅ **Respuesta Correcta**: Se suman los puntos de la pregunta
   - ❌ **Respuesta Incorrecta**: Se restan los puntos de la pregunta
   - El turno pasa automáticamente al siguiente equipo

4. **Fin del Juego**
   - El juego termina cuando se han respondido todas las preguntas (30 total)
   - Se muestra el ganador y la tabla de posiciones final
   - Opción de reiniciar el juego

## 🎨 Interfaz

### Tablero de Juego
- Diseño estilo Jeopardy clásico con cuadrícula de categorías y valores
- Colores:
  - Azul/Morado: Fondo del tablero
  - Amarillo: Valores de puntos
  - Gris: Preguntas ya respondidas

### Modal de Preguntas
- Muestra la categoría y valor de puntos
- Indica qué equipo está respondiendo
- 4 opciones de respuesta con letras (A, B, C, D)
- Feedback inmediato con:
  - Indicador visual de correcto/incorrecto
  - Respuesta correcta
  - Explicación educativa

### Marcador
- Muestra todos los equipos con sus puntuaciones
- Indica el equipo en turno actual
- Lista de jugadores de cada equipo
- Actualización en tiempo real

## 📁 Estructura de Archivos

```
Jeopardy/
├── Jeopardy.page.tsx           # Componente principal del juego
├── Jeopardy.types.ts           # Tipos e interfaces de TypeScript
├── Jeopardy.constants.ts       # Preguntas y constantes del juego
└── components/
    ├── GameSetup.component.tsx     # Configuración inicial del juego
    ├── GameBoard.component.tsx     # Tablero de juego
    ├── Scoreboard.component.tsx    # Marcador de puntuaciones
    └── QuestionModal.component.tsx # Modal de preguntas y respuestas
```

## 🔧 Personalización

Para agregar más preguntas, edita el archivo `Jeopardy.constants.ts`:

```typescript
{
    id: "categoria-puntos",
    category: "Categoría",
    points: 100,
    question: "¿Tu pregunta aquí?",
    answer: "Respuesta correcta",
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    explanation: "Explicación de la respuesta"
}
```

## 🎓 Valor Educativo

- **Aprendizaje Activo**: Los estudiantes aprenden jugando
- **Competencia Amistosa**: Fomenta el trabajo en equipo
- **Refuerzo de Conocimientos**: Explicaciones detalladas en cada pregunta
- **Cobertura Completa**: Temas alineados con el currículo AAOS
- **Feedback Inmediato**: Los estudiantes aprenden de sus errores

## 🚀 Uso

1. Navega a la página principal
2. Haz clic en el botón "Jeopardy"
3. Configura el juego según tus necesidades
4. ¡Comienza a jugar y aprender!

## 📝 Notas

- El juego incluye 30 preguntas en total (6 categorías × 5 niveles)
- Las preguntas están basadas en el contenido del libro AAOS de atención médica prehospitalaria
- Todas las respuestas incluyen explicaciones educativas
- El sistema de puntuación fomenta el pensamiento estratégico

