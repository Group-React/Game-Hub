import logo from './logo.svg';
import './App.css';
import Neav from './header.js';
import Mainc from './mainCard';
import { enableDismissTrigger } from './test';
import Arr from './arrGame';
import Footer from './fotter';

function App() {
  return (
    <div>
      <Arr/>
      <Neav/>
      
      <Mainc/>
      <Footer/>
      <enableDismissTrigger/>
      
    </div>
  );
}

export default App;
