
import './App.css';
import Neav from './header.js';
import Mainc from './mainCard';
import Arr from './arrGame'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Favorit from './Library';
import Profile from './profile';

function App() {
  return (
    <div>
    <Neav/>
    <Router>
    <Routes>
   
      <Route path='/'Component={Arr}></Route>
      <Route path='/Library'Component={Favorit}></Route>
      <Route path='/profile'Component={Profile}></Route>

      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
