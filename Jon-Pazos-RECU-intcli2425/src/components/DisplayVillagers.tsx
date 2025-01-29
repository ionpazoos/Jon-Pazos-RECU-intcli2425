import React from 'react';

type Props = {
  villagersInfo: Record<string, number>;
};

const DisplayVillagers: React.FC<Props> = ({ villagersInfo }) => {
  return (
    <div className=" absolute mt-10 p-4  right-10 top-[20%]">
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
