import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import {useEffect} from 'react';

function App() {

  const {isLoggedIn} = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    isLoggedIn ? navigate('/') : navigate('/login');
  }, [isLoggedIn])

  return (
    <div className="App">
      <h1>Hello</h1>
      <AllRoutes />
    </div>
  );
}

export default App;
