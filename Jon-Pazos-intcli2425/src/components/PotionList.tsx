import React from 'react';
import { Potion } from '../types/Potion';
import PotionCard from './PotionCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

type Props = {
    potions: Potion[];
};

const Potionlist: React.FC<Props> = ({
    potions,
}) => {
    return (
        <ScrollMenu>
            <div className='flex flex-row'>
            {potions.map(p => (
                <PotionCard 
                name={p.name} 
                image={`${p.image}`} 
                rarity={p.rarity} 
                dropedBy={p.meta.availability.drop_rate.boss} 
                dropPercent={p.meta.availability.drop_rate.chance}                
                />
            ))}
            </div>
        </ScrollMenu>
    );
}
export default Potionlist;