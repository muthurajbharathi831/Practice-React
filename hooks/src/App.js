import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hooksdemo from '../src/Components/useStatedemo'
import ParentComponent from '../src/Components/A'

import Loginform from '../src/Components/Login'

import UseEffectHook from '../src/Components/UseEffecthook'

function App() {
  return (
    <div className="App">
      {/* <Hooksdemo/>
      <ParentComponent/>
      <Loginform/> */}
      <UseEffectHook/>
    </div>
  );
}

export default App;
