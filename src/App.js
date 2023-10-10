
import './App.css';
import Neav from './header.js';
import Mainc from './mainCard';
import Arr from './arrGame'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Favorit from './Library';
import Profile from './profile';
import Information from './arrNews';

function App() {
  return (
    <div>
    <Neav/>
    <Router>
    <Routes>
   
      <Route path='/'Component={Arr}></Route>
      <Route path='/Library'Component={Favorit}></Route>
      <Route path='/profile'Component={Profile}></Route>
      <Route path='/News'Component={Information}></Route>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
