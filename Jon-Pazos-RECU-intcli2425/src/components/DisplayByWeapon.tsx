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
    <div className="mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
       (
        <ul className="list-disc pl-5">
          {towersInfo.map((tower, index) => (
            <li key={index}>
              <ul>
                {tower.guards.map((guard, idx) => (
                  <li key={idx}>{guard}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )
    </div>
  );
};

export default DisplayWeapons;
