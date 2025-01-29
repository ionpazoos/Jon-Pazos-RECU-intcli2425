import React from 'react';

type Props = {
  villagersInfo: Record<string, number>;
};

const DisplayVillagers: React.FC<Props> = ({ villagersInfo }) => {
  return (
    <div className="mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl mb-4">Villagers by Profession</h2>
      {Object.keys(villagersInfo).length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul className="list-disc pl-5">
          {Object.entries(villagersInfo).map(([profession, count], index) => (
            <li key={index}>
              <strong>{profession}:</strong> {count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayVillagers;
