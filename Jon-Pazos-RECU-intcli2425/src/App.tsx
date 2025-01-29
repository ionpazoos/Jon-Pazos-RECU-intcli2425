import { potions } from './data/data'
import './App.css'
import Potionlist from './components/PotionList'
import FiltersBox from './components/filtersBox'
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({
    rarity: '',
    dropChance: '',
    boss: '',
});
const [filteredPotions, setfilteredPotions] = useState(potions);

const filterPotions = (potions: Potion[], filters: { rarity: string; dropChance: string; boss: string }) => {
  return potions.filter((potion) => {
      // Filtrar por rareza
      const rarityMatch = filters.rarity ? potion.rarity === filters.rarity : true;

      // Filtrar por porcentaje mínimo de drop
      const dropChanceMatch = filters.dropChance
          ? parseFloat(potion.meta.availability.drop_rate.chance) >= parseFloat(filters.dropChance)
          : true;

      // Filtrar por jefe
      const bossMatch = filters.boss
          ? potion.meta.availability.drop_rate.boss.toLowerCase().includes(filters.boss.toLowerCase())
          : true;

      return rarityMatch && dropChanceMatch && bossMatch;
  });
};

const handleFilterChange = (filterName: string, value: string) => {
    if (filterName === 'reset') {
        setFilters({ rarity: '', dropChance: '', boss: '' });
    } else {
        setFilters({ ...filters, [filterName]: value });
        setfilteredPotions(filterPotions(potions, filters));
    }
};


  return (
    <>
    <div className='mb-10'>
    <Potionlist potions={filteredPotions} />
    </div>
    <FiltersBox onFilterChange={handleFilterChange} />
    </>
  )
}

export default App
