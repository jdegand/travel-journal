import './App.css';
import Navbar from './components/Navbar/Navbar';
import Location from './components/Location/Location';
import data from './data.js';

function App() {

  const locations = data.map(location => {
    return (
      <div>
        <Location key={location.id} {...location} />
      </div>
    )
  })

  return (
    <div className="App">
      <Navbar />
      {locations}
    </div>
  );
}

export default App;
