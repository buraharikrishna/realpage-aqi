import './App.css';
import GelocalizedDetails from './components/GelocalizedDetails';
import SearchCities from './components/SearchCities';

function App() {
  return (
    <div className="App">
      <h3> Air Quality Index(AQI)</h3>
      <GelocalizedDetails/><br/>
      <SearchCities /><br/>
    </div>
  );
}

export default App;
