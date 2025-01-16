import { potions } from './data/data'
import './App.css'
import Potionlist from './components/PotionList'
import LevelFilter from './components/LevelFilter'

function App() {


  return (
    <>
    <div className='mb-10'>
    <Potionlist potions={potions} />
    </div>
    <LevelFilter/>
    </>
  )
}

export default App
