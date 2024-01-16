import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import ClientPage from './components/client/ClientPage';
import PetsitterPage from './components/petsitter/PetsitterPage';
import AnimalForm from './components/client/AnimalForm';
import RequestForm from './components/client/RequestForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/client/:userId' element={<ClientPage />} />
          <Route path='/petsitter/:userId' element={<PetsitterPage />} />
          <Route path='/client/:userId/animalform' element={<AnimalForm />} />
          <Route path='/client/:userID/requestform' element={<RequestForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
