import React from 'react';
import { Potion } from '../types/Potion';
import PotionCard from './PotionCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // Asegúrate de tener los estilos base de la librería

type Props = {
    potions: Potion[];
};

const Potionlist: React.FC<Props> = ({ potions }) => {
    return (
        <div className="relative py-10">
            {/* Contenedor con estilo medieval */}
            <div className="relative border-t-2 border-b-2 border-white bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-md rounded-lg">
                <ScrollMenu
                    wrapperClassName="overflow-hidden"
                    itemClassName="mx-5"
                >
                    {potions.map((p, index) => (
                        <div
                            key={index}
                            className="inline-block p-2 hover:scale-105 transition-transform duration-300"
                        >
                            <PotionCard
                                name={p.name}
                                image={`${p.image}`}
                                rarity={p.rarity}
                                dropedBy={p.meta.availability.drop_rate.boss}
                                dropPercent={p.meta.availability.drop_rate.chance}
                            />
                        </div>
                    ))}
                </ScrollMenu>
            </div>

            {/* Efectos decorativos en los extremos */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Potionlist;