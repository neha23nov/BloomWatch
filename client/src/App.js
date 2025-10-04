import logo from './logo.svg';
import './App.css';
import Box from './components/box_plants';
import './index.css'
import Box_grid from './components/box_grid';
import { Plants_screen } from './components/plants_screen';
import VegetationData from './components/vegetationdata';
import LowVegetationData from './components/low_vegetation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Plants_screen/> */}
        <VegetationData/>
        {/* <LowVegetationData/> */}

      </header>
    </div>
  );
}

export default App;
