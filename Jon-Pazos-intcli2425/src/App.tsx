import { potions } from './data/data'
import './App.css'
import Potionlist from './components/PotionList'

function App() {


  return (
    <>
    <Potionlist potions={potions} />
    </>
  )
}

export default App
