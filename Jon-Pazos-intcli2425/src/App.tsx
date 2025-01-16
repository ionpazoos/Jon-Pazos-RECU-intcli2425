import { potions } from './data/data'
import './App.css'
import PotionCard from './components/PotionCard'
import Potionlist from './components/PotionList'

function App() {


  return (
    <>
    <Potionlist potions={potions} />
    </>
  )
}

export default App
