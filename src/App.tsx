import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/shop' element={<Shop/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
