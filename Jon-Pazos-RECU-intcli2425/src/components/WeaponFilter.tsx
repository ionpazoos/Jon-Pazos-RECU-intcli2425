import React from 'react';

type Props = {
    Weapons: string[],
};

const WeaponFilter: React.FC<Props> = ({ Weapons }) => {
    return (
        <>
            <div className=" absolute  left-0 bg-orange-600 w-[60%] h-[100%] top-0">
                <h1 className=' text-4xl'>Citadel of eternal nigth</h1>
                <div>
                    <img src="/fortress.jpg" alt="image" />
                </div>
            </div>
        </>


    );
};

export default WeaponFilter;