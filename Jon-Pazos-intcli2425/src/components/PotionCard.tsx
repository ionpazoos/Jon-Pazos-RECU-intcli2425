import React from 'react';

type Props = {
    name: String;
    image: String;
    rarity: String;
    dropedBy: String;
    dropPercent: String;

};

const PotionCard: React.FC<Props> = ({
    name,
    image,
    rarity,
    dropedBy,
    dropPercent,
}) => {
    return (
        <div className='px-20 '>
            <div className=" flex  w-[200px] h-[200px] rounded shadow-lg hover:-translate-y-10 items-center">
                <img className="w-[90%] rounded-md" src={`${image}`} alt="image" />
                <div className=" py-6">
                    <div className="font-bold text-xl mb-2">Name:{name}</div>
                    <p className="text-gray-100 text-base">Rarity:{rarity}</p>
                    <p className="text-gray-100 text-base">Dropedby:{dropedBy}</p>
                    <p className="text-gray-100 text-base">DropPercent:{dropPercent}</p>
                </div>
            </div>
        </div>
    );

}
export default PotionCard;