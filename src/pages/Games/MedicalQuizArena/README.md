# Medical Quiz Arena - Juego Multijugador Online

## Descripción
Medical Quiz Arena es un juego multijugador en tiempo real donde los jugadores compiten respondiendo preguntas de medicina prehospitalaria. El juego utiliza Firebase Firestore para sincronización en tiempo real.

## Características

### 🌐 Multijugador Online en Tiempo Real
- **2-8 jugadores** por sala
- Sincronización en tiempo real con Firebase Firestore
- Código de sala único para invitar amigos
- Chat en vivo durante el juego

### 🎮 Mecánicas de Juego
- **30+ preguntas** de medicina prehospitalaria
- **3 niveles de dificultad**: Fácil, Media, Difícil
- **8 categorías**: Anatomía, Farmacología, Trauma, Emergencias Cardíacas, Vía Aérea, Pediatría, Evaluación, Protocolos
- **Sistema de puntuación avanzado**:
  - Puntos base según dificultad (100/150/200)
  - Bonus por velocidad de respuesta
  - Multiplicador por racha de respuestas correctas
  - Penalización por respuestas incorrectas

### 🏆 Sistema de Ranking
- Leaderboard en tiempo real
- Estadísticas personales detalladas
- Precisión de respuestas
- Mejor racha de respuestas correctas

## Estructura de Archivos

```
MedicalQuizArena/
├── MedicalQuizArena.page.tsx          # Componente principal
├── MedicalQuizArena.types.ts          # Definiciones de tipos TypeScript
├── MedicalQuizArena.constants.ts      # Constantes y preguntas
├── useMedicalQuizArena.hook.ts        # Hook personalizado con lógica de Firestore
├── index.ts                            # Export del módulo
└── components/
    ├── JoinCreateModal.component.tsx   # Modal de inicio
    ├── WaitingRoom.component.tsx       # Sala de espera
    ├── GamePlay.component.tsx          # Juego activo
    └── Results.component.tsx           # Pantalla de resultados
```

## Flujo del Juego

### 1. Inicio
- El jugador elige **Crear Nueva Sala** o **Unirse a Sala**
- Si crea una sala, recibe un código único de 6 caracteres
- Si se une, ingresa el código de sala compartido

### 2. Sala de Espera
- Los jugadores pueden ver quién está en la sala
- Chat en vivo para comunicarse
- Cada jugador debe marcar "Listo"
- El host inicia el juego cuando todos están listos

### 3. Juego Activo
- Se muestra una pregunta con 4 opciones
- Temporizador de cuenta regresiva
- Los jugadores seleccionan su respuesta
- Feedback inmediato (correcto/incorrecto)
- Explicación de la respuesta correcta
- Ranking en tiempo real

### 4. Resultados
- Podio con los 3 mejores jugadores
- Estadísticas detalladas de cada jugador
- Opción de jugar de nuevo o volver al menú

## Tecnologías Utilizadas

### Frontend
- **React** con TypeScript
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **React Icons** para iconografía

### Backend
- **Firebase Firestore** para base de datos en tiempo real
- **Firebase Authentication** para gestión de usuarios

## Configuración de Firebase

### Colecciones de Firestore

#### `quizArenaRooms`
```typescript
{
  id: string,
  code: string,
  hostId: string,
  players: Player[],
  maxPlayers: number,
  status: 'waiting' | 'playing' | 'finished',
  currentQuestionIndex: number,
  totalQuestions: number,
  currentQuestion: Question | null,
  answers: PlayerAnswer[],
  createdAt: timestamp,
  startedAt?: timestamp,
  finishedAt?: timestamp
}
```

#### `quizArenaRooms/{roomId}/messages`
```typescript
{
  id: string,
  roomId: string,
  playerId: string,
  playerName: string,
  message: string,
  timestamp: timestamp,
  type: 'player' | 'system'
}
```

### Reglas de Seguridad Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reglas para salas de juego
    match /quizArenaRooms/{roomId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null;
      
      // Reglas para mensajes de chat
      match /messages/{messageId} {
        allow read: if true;
        allow create: if request.auth != null;
      }
    }
  }
}
```

## Uso del Hook

```typescript
const {
  state,
  createRoom,
  joinRoom,
  subscribeToRoom,
  subscribeToChat,
  addChatMessage,
  setPlayerReady,
  startGame,
  submitAnswer,
  nextQuestion,
  leaveRoom,
} = useMedicalQuizArena();
```

### Métodos Principales

- **createRoom(playerName, config)**: Crea una nueva sala de juego
- **joinRoom(roomCode, playerName)**: Une a un jugador a una sala existente
- **subscribeToRoom(roomId)**: Escucha cambios en tiempo real de la sala
- **subscribeToChat(roomId)**: Escucha mensajes del chat
- **setPlayerReady(roomId, playerId)**: Marca al jugador como listo
- **startGame(roomId)**: Inicia el juego (solo host)
- **submitAnswer(roomId, playerId, answer, questionId)**: Envía una respuesta
- **nextQuestion(roomId)**: Avanza a la siguiente pregunta (solo host)
- **leaveRoom(roomId, playerId)**: Sale de la sala

## Sistema de Puntuación

### Puntos Base
- **Fácil**: 100 puntos
- **Media**: 150 puntos
- **Difícil**: 200 puntos

### Bonus por Velocidad
- **< 5 segundos**: +50 puntos
- **5-10 segundos**: +25 puntos
- **> 10 segundos**: 0 puntos

### Multiplicador por Racha
- **3 correctas seguidas**: x1.5
- **5 correctas seguidas**: x2.0
- **7 correctas seguidas**: x2.5

### Penalización
- **Respuesta incorrecta**: -50 puntos

## Cómo Agregar Más Preguntas

Edita el archivo `MedicalQuizArena.constants.ts` y agrega nuevas preguntas al array `QUIZ_ARENA_QUESTIONS`:

```typescript
{
  id: 'qa-XX',
  category: 'Categoría',
  difficulty: 'Fácil' | 'Media' | 'Difícil',
  question: '¿Tu pregunta aquí?',
  answer: 'Respuesta correcta',
  options: [
    'Respuesta correcta',
    'Opción incorrecta 1',
    'Opción incorrecta 2',
    'Opción incorrecta 3'
  ],
  points: 100,
  timeLimit: 15,
  explanation: 'Explicación de la respuesta'
}
```

## Personalización

### Colores de Jugadores
Edita `PLAYER_COLORS` en `MedicalQuizArena.constants.ts`:

```typescript
export const PLAYER_COLORS = [
  '#FF6B6B', // Rojo
  '#4ECDC4', // Turquesa
  // Agrega más colores...
];
```

### Avatares
Edita `PLAYER_AVATARS` en `MedicalQuizArena.constants.ts`:

```typescript
export const PLAYER_AVATARS = [
  '👨‍⚕️', '👩‍⚕️', '🚑', '⚕️',
  // Agrega más emojis...
];
```

### Configuración del Juego
Edita `DEFAULT_GAME_CONFIG`:

```typescript
export const DEFAULT_GAME_CONFIG: GameConfig = {
  numberOfQuestions: 15,
  difficulty: 'mixed',
  categories: CATEGORIES,
  maxPlayers: 6,
};
```

## Solución de Problemas

### El juego no sincroniza
- Verifica la conexión a internet
- Revisa las reglas de seguridad de Firestore
- Confirma que Firebase está configurado correctamente

### Los jugadores no pueden unirse
- Verifica que el código de sala sea correcto (6 caracteres)
- Asegúrate de que la sala no esté llena
- Confirma que el juego no haya iniciado

### Errores de tipos TypeScript
- Ejecuta `npm run build` para verificar errores
- Asegúrate de que todos los tipos estén correctamente exportados

## Mejoras Futuras

- [ ] Modo torneos con eliminatorias
- [ ] Sistema de logros y badges
- [ ] Rankings globales persistentes
- [ ] Personalización de avatares
- [ ] Modo de práctica individual
- [ ] Preguntas con imágenes
- [ ] Sonidos y efectos de audio
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] Replay de partidas

## Licencia
Este proyecto es parte de la plataforma de educación en medicina prehospitalaria.

## Contacto
Para reportar bugs o sugerencias, contacta al equipo de desarrollo.

