import React, { useId } from 'react';
import { Potion } from '../types/Potion';

import PotionCard from './PotionCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

type Props = {
    level: Number,
};

const LevelFilter: React.FC<Props> = ({
level,

}) => {
    const lv = useId();
    return (
        <>
        <label className=' mr-5'> Enter lv:</label>
        <input
            type="number"
            id={lv}/>
        </>
    );
}
export default LevelFilter;