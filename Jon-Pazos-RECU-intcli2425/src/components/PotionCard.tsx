import React from 'react';

type Props = {
    name: string;
    image: string;
    rarity: string;
    dropedBy: string;
    dropPercent: string;
};

const PotionCard: React.FC<Props> = ({
    name,
    image,
    rarity,
    dropedBy,
    dropPercent,
}) => {
    return (
        <div className="p-6 flex justify-center items-center">
            <div className="relative w-[250px] h-[350px] rounded-lg border border-white bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* Decoración del borde */}
                <div className="absolute inset-0 border-2 border-white rounded-lg opacity-70 pointer-events-none"></div>

                {/* Imagen de la poción */}
                <img
                    className="w-[80%] mx-auto mt-6 rounded-md border border-gray-600 shadow"
                    src={image}
                    alt={`${name}`}
                />

                {/* Contenido de texto */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h2 className="font-serif text-white text-2xl tracking-wide uppercase">
                        {name}
                    </h2>
                    <p className="text-gray-300 text-base mt-2">
                        <span className="text-gray-400 font-medium">Rarity:</span>{' '}
                        <span className="text-white">{rarity}</span>
                    </p>
                    <p className="text-gray-300 text-base">
                        <span className="text-gray-400 font-medium">Dropped by:</span>{' '}
                        <span className="text-white">{dropedBy}</span>
                    </p>
                    <p className="text-gray-300 text-base">
                        <span className="text-gray-400 font-medium">Drop Rate:</span>{' '}
                        <span className="text-white">{dropPercent}</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PotionCard;