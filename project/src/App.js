import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import ClientPage from './components/client/ClientPage';
import PetsitterPage from './components/petsitter/PetsitterPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/client' element={<ClientPage />} />
          <Route path='/petsitter' element={<PetsitterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
