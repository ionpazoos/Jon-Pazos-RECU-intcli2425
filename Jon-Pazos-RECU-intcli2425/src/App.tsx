import { countVillagersByProfession } from './helpers/helpers'
import { megaEpicFortress } from './data/data';
import Professions from './components/Profesions';
import './App.css'
import WeaponFilter from './components/WeaponFilter';
import Display from './components/Display';

function App() {

  const professionsAndCount = countVillagersByProfession(megaEpicFortress);
  
  return (
    <>
    <WeaponFilter Weapons={[]} />
    <Professions profesions={professionsAndCount} />
    <Display DislayInfo={[]}/>

    </>
  )
}

export default App
