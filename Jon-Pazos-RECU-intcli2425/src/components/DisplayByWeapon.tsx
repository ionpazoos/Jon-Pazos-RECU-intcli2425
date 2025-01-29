import React from 'react';


type Tower = {
    name: string,
    guards: string[]
  }
type Props = {
  towersInfo: Tower[];
};

const DisplayWeapons: React.FC<Props> = ({ towersInfo }) => {
  return (
    <div className=" absolute mt-10  right-10 top-[20%] ">
       
        <ul className="list-disc relative right-10">
          {towersInfo.map((tower, index) => (
            <li key={index}>
             
                {tower.guards.map((guard, idx) => (
                  <li key={idx}>{guard}</li>
                ))}
        
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default DisplayWeapons;
