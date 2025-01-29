// src/App.tsx
import { useState } from 'react';
import { countVillagersByProfession, getAllWeapons, getTowerAndWardsByWeaponType } from './helpers/helpers';
import { megaEpicFortress } from './data/data';
import WeaponFilter from './components/WeaponFilter';
import DisplayVillagers from './components/DisplayVillagers';
import DisplayByWeapons from './components/DisplayByWeapon';

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null); // Estado para el arma seleccionada
  const [showVillagers, setShowVillagers] = useState<boolean>(false); // Controlar si se muestra la vista de villagers o torres

  const professionsAndCount = countVillagersByProfession(megaEpicFortress);
  const weapons = getAllWeapons(megaEpicFortress);
  const towers = selectedWeapon ? getTowerAndWardsByWeaponType(megaEpicFortress, selectedWeapon) : [];

 
  const handleWeaponSelect = (weapon: string) => {
    setSelectedWeapon(weapon); 
    setShowVillagers(false); 
  };

  
  const toggleView = () => {
    setShowVillagers((prev) => !prev); 
    setSelectedWeapon(null); 
  };

  return (
    <div>
      <WeaponFilter Weapons={weapons} onWeaponSelect={handleWeaponSelect} />
      

      <button onClick={toggleView} className="  absolute right-10 mt-20 p-3 bg-blue-500 text-white rounded">
        SHOW VILLAGERS PROFESION AND WORKERS
      </button>

      <div className="mt-10">
    
        {showVillagers && (
          <DisplayVillagers villagersInfo={professionsAndCount} />
        )}

        {selectedWeapon && !showVillagers && (
          <DisplayByWeapons towersInfo={towers} />
        )}
      </div>
    </div>
  );
}

export default App;
