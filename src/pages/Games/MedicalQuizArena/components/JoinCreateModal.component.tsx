import { useState } from 'react';
import { FaUsers, FaGamepad } from 'react-icons/fa';

interface JoinCreateModalProps {
    onCreateRoom: (playerName: string) => void;
    onJoinRoom: (roomCode: string, playerName: string) => void;
    onClose: () => void;
    loading: boolean;
    error: string | null;
}

export default function JoinCreateModal({
    onCreateRoom,
    onJoinRoom,
    onClose,
    loading,
    error,
}: JoinCreateModalProps) {
    const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');
    const [playerName, setPlayerName] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!playerName.trim()) return;

        if (mode === 'create') {
            onCreateRoom(playerName);
        } else if (mode === 'join') {
            if (!roomCode.trim()) return;
            onJoinRoom(roomCode.toUpperCase(), playerName);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-3xl shadow-2xl max-w-md w-full p-8 border-4 border-yellow-400">
                <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🏥</div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                        Medical Quiz Arena
                    </h2>
                    <p className="text-gray-300">
                        Compite en tiempo real con otros jugadores
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500 text-white p-3 rounded-lg mb-4 text-center">
                        {error}
                    </div>
                )}

                {mode === 'select' && (
                    <div className="space-y-4">
                        <button
                            onClick={() => setMode('create')}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-3 shadow-lg"
                        >
                            <FaGamepad className="text-2xl" />
                            <span className="text-lg">Crear Nueva Sala</span>
                        </button>

                        <button
                            onClick={() => setMode('join')}
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-3 shadow-lg"
                        >
                            <FaUsers className="text-2xl" />
                            <span className="text-lg">Unirse a Sala</span>
                        </button>

                        <button
                            onClick={onClose}
                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200"
                        >
                            Cancelar
                        </button>
                    </div>
                )}

                {(mode === 'create' || mode === 'join') && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Tu Nombre
                            </label>
                            <input
                                type="text"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                placeholder="Ingresa tu nombre"
                                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20  placeholder-gray-300 border-2 border-white border-opacity-30 focus:border-yellow-400 focus:outline-none"
                                maxLength={20}
                                required
                            />
                        </div>

                        {mode === 'join' && (
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Código de Sala
                                </label>
                                <input
                                    type="text"
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                    placeholder="Ej: ABC123"
                                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20  placeholder-gray-300 border-2 border-white border-opacity-30 focus:border-yellow-400 focus:outline-none uppercase text-center text-2xl font-bold tracking-widest"
                                    maxLength={6}
                                    required
                                />
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setMode('select')}
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200"
                            >
                                Atrás
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 disabled:opacity-50"
                            >
                                {loading ? 'Cargando...' : mode === 'create' ? 'Crear' : 'Unirse'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

