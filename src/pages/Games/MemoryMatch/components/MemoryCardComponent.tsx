import { MemoryCard } from '../MemoryMatch.types';

interface MemoryCardComponentProps {
    card: MemoryCard;
    index: number;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: (card: MemoryCard, index: number) => void;
    disabled: boolean;
}

export default function MemoryCardComponent({
                                                 card,
                                                 index,
                                                 isFlipped,
                                                 isMatched,
                                                 onClick,
                                                 disabled
                                             }: MemoryCardComponentProps) {
    const handleClick = () => {
        if (!disabled && !isFlipped && !isMatched) {
            onClick(card, index);
        }
    };

    return (
        <div
            className={`
                relative w-full aspect-[3/4] cursor-pointer transition-all duration-500
                ${disabled && !isFlipped && !isMatched ? 'cursor-not-allowed opacity-50' : ''}
            `}
            onClick={handleClick}
            style={{ perspective: '1000px' }}
        >
            <div
                className={`
                    relative w-full h-full transition-transform duration-500
                    ${isFlipped || isMatched ? 'rotate-y-180' : ''}
                `}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped || isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Card Back */}
                <div
                    className={`
                        absolute w-full h-full rounded-xl p-4
                        flex items-center justify-center
                        bg-gradient-to-br from-blue-600 to-purple-600
                        border-4 border-blue-400
                        shadow-lg hover:shadow-xl
                        ${!isFlipped && !isMatched ? 'hover:scale-105' : ''}
                    `}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="text-center">
                        <div className="text-6xl mb-2">🧠</div>
                        <div className="text-white font-bold text-lg">Memory</div>
                        <div className="text-blue-200 text-sm">Match</div>
                    </div>
                </div>

                {/* Card Front */}
                <div
                    className={`
                        absolute w-full h-full rounded-xl p-4
                        flex items-center justify-center
                        ${card.type === 'term'
                            ? 'bg-gradient-to-br from-green-500 to-teal-600'
                            : 'bg-gradient-to-br from-orange-500 to-red-600'
                        }
                        ${isMatched ? 'bg-gradient-to-br from-yellow-400 to-green-500' : ''}
                        border-4
                        ${card.type === 'term' ? 'border-green-400' : 'border-orange-400'}
                        ${isMatched ? 'border-yellow-400' : ''}
                        shadow-lg
                    `}
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="text-center">
                        {isMatched && (
                            <div className="absolute top-2 right-2 text-3xl">✓</div>
                        )}
                        <div className="text-white font-bold text-sm mb-2">
                            {card.type === 'term' ? '📘 TÉRMINO' : '📝 DEFINICIÓN'}
                        </div>
                        <div className="text-white text-xs md:text-sm leading-tight">
                            {card.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

