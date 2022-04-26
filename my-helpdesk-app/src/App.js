import './App.css';
import { Route, Routes } from 'react-router';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
