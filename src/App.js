
import './App.css';
import Neav from './header.js';
import Mainc from './mainCard';
import Arr from './arrGame'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Favorit from './Library';

function App() {
  return (
    <div>
    <Neav/>
    <Router>
    <Routes>
      <Route path='/Store'Component={Arr}></Route>
      <Route path='/Library'Component={Favorit}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
