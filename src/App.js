
import './App.css';
import HomePage from './Componentes/HomePage';
import { Routes, Route } from 'react-router-dom';
import BeersPage from './pages/BeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<BeersPage />} />
          <Route path="/beers/:id" element={<BeerDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
