import { Route, Routes } from 'react-router-dom';
import DetailsComponent from './pages/DetailsComponent';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:companyId" element={<DetailsComponent />} />
      </Routes>
    </div>
  );
}
export default App;
