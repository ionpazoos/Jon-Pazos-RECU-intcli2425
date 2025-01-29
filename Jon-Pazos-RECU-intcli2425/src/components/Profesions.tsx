import React from 'react';

type Props = {
    profesions: Record<string, number>;
};

const Profesions: React.FC<Props> = ({ profesions }) => {
    return (
        <>
            <div className=" absolute  right-0 bg-slate-700 w-[40%] h-[20%] top-0">
                

            </div>

        </>


    );
};

export default Profesions;