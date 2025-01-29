import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; 

type Props = {
  Weapons: string[];
  onWeaponSelect: (weapon: string) => void;
};

const WeaponFilter: React.FC<Props> = ({ Weapons = [], onWeaponSelect }) => {
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);

  const _onSelect = (option: { value: string }) => {
    setSelectedWeapon(option.value);
    onWeaponSelect(option.value);
  };

  return (
    <div className="absolute left-0 w-[60%] h-[100%] top-0 items-center p-6">
      <h1 className="absolute text-4xl font-semibol left-[40%]">Citadel of Eternal Night</h1>
      
      <div className="relative mt-40">
        <img src="fotress.jpeg" alt="Fortress" className="w-[70%]" />
      </div>
      
      <h2 className="text-2xl text-white mt-10">Select a Weapon Type</h2>
      
      <div className=" w-full max-w-xs">
        <Dropdown
          options={Weapons}
          onChange={_onSelect}
          value={selectedWeapon || 'defaultOption'}
          placeholder="Select an option"
          className="text-lg p-2 border rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  );
};

export default WeaponFilter;
