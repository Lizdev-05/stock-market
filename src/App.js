import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stock from './components/stock/Stock';
import DetailsComponent from './pages/DetailsComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Stock />} />
        <Route path="/details/:companyId" element={<DetailsComponent />} />
      </Routes>
    </div>
  );
}
export default App;
