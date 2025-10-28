import { useState, useEffect, useRef } from 'react';
import { FaCopy, FaUsers, FaPlay, FaSignOutAlt, FaCheck, FaTimes, FaUserTimes } from 'react-icons/fa';
import type { GameRoom, Player, ChatMessage } from '../MedicalQuizArena.types';

interface WaitingRoomProps {
    gameRoom: GameRoom;
    currentPlayer: Player | null;
    isHost: boolean;
    chatMessages: ChatMessage[];
    onSendMessage: (message: string) => void;
    onPlayerReady: (isReady: boolean) => void;
    onRemovePlayer: (playerId: string) => void;
    onStartGame: () => void;
    onLeaveRoom: () => void;
}

export default function WaitingRoom({
    gameRoom,
    currentPlayer,
    isHost,
    chatMessages,
    onSendMessage,
    onPlayerReady,
    onRemovePlayer,
    onStartGame,
    onLeaveRoom,
}: WaitingRoomProps) {
    const [message, setMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(gameRoom.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const allPlayersReady = gameRoom.players.every((p: Player) => p.isReady);
    const canStart = isHost && gameRoom.players.length >= 2 && allPlayersReady;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-3xl p-6 border-4 border-yellow-400 border-b-0">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">
                                🏥 Sala de Espera
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg flex items-center gap-2">
                                    <FaUsers className="text-yellow-300" />
                                    <span className="text-gray-600 font-semibold">
                                        {gameRoom.players.length}/{gameRoom.maxPlayers} Jugadores
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-200 text-sm mb-2">Código de Sala</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-white px-6 py-3 rounded-lg">
                                    <span className="text-3xl font-bold text-purple-600 tracking-widest">
                                        {gameRoom.code}
                                    </span>
                                </div>
                                <button
                                    onClick={handleCopyCode}
                                    className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-lg transition"
                                >
                                    {copied ? <FaCheck className="text-green-600" /> : <FaCopy className="text-purple-600" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Panel de jugadores */}
                    <div className="md:col-span-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-b-3xl rounded-tr-3xl p-6 border-4 border-yellow-400 border-t-0">
                        <h2 className="text-2xl font-bold text-gray-600 mb-4">Jugadores</h2>
                        <div className="grid gap-3">
                            {gameRoom.players.map((player: Player) => (
                                <div
                                    key={player.id}
                                    className="bg-white bg-opacity-20 rounded-xl p-4 flex items-center justify-between"
                                    style={{ borderLeft: `4px solid ${player.color}` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-4xl">{player.avatar}</div>
                                        <div>
                                            <p className="text-gray-600 font-bold text-lg">
                                                {player.name}
                                                {player.id === gameRoom.hostId && (
                                                    <span className="ml-2 text-yellow-400">👑</span>
                                                )}
                                                {player.id === currentPlayer?.id && (
                                                    <span className="ml-2 text-green-400">(Tú)</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            {player.isReady ? (
                                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    ✓ Listo
                                                </span>
                                            ) : (
                                                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    Esperando...
                                                </span>
                                            )}
                                        </div>
                                        {/* Botón de eliminar solo visible para el host y no para sí mismo */}
                                        {isHost && player.id !== currentPlayer?.id && player.id !== gameRoom.hostId && (
                                            <button
                                                onClick={() => onRemovePlayer(player.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition duration-200"
                                                title="Expulsar jugador"
                                            >
                                                <FaUserTimes />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botones de acción */}
                        <div className="mt-6 space-y-3">
                            {currentPlayer && (
                                <>
                                    {!currentPlayer.isReady ? (
                                        <button
                                            onClick={() => onPlayerReady(true)}
                                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                                        >
                                            <FaCheck />
                                            Marcar como Listo
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => onPlayerReady(false)}
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                                        >
                                            <FaTimes />
                                            No estoy Listo
                                        </button>
                                    )}
                                </>
                            )}

                            {isHost && (
                                <button
                                    onClick={onStartGame}
                                    disabled={!canStart}
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPlay />
                                    {canStart ? 'Iniciar Juego' : 'Esperando jugadores listos...'}
                                </button>
                            )}

                            <button
                                onClick={onLeaveRoom}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                            >
                                <FaSignOutAlt />
                                Salir de la Sala
                            </button>
                        </div>
                    </div>

                    {/* Chat */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 border-4 border-yellow-400 flex flex-col max-h-[600px]">
                        <h2 className="text-2xl font-bold text-gray-600 mb-4">Chat</h2>

                        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
                            {chatMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`p-2 rounded-lg ${
                                        msg.type === 'system'
                                            ? 'bg-yellow-500 bg-opacity-30 text-center'
                                            : 'bg-white bg-opacity-20'
                                    }`}
                                >
                                    {msg.type === 'system' ? (
                                        <p className="text-yellow-200 text-sm font-semibold">
                                            {msg.message}
                                        </p>
                                    ) : (
                                        <>
                                            <p className="text-yellow-300 font-semibold text-sm">
                                                {msg.playerName}
                                            </p>
                                            <p className="text-white">{msg.message}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                className="flex-1 px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border-2 border-white border-opacity-30 focus:border-yellow-400 focus:outline-none"
                                maxLength={200}
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-4 py-2 rounded-lg transition"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

