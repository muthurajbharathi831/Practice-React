import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hooksdemo from '../src/Components/useStatedemo'
import ParentComponent from '../src/Components/A'

import Loginform from '../src/Components/Login'

import UseEffectHook from '../src/Components/UseEffecthook'
import UseEffectdemo from '../src/Components/UseEffectdemo'
import UseContext from '../src/Components/UseContext'
import UseRefdemo from '../src/Components/UseRef'
import UseReducerdemo from '../src/Components/UseReducer'
import UsecallbackUsecase from '../src/Components/UsecallbackUsecase/Home'
import UsecallbackDemo from '../src/Components/UsecallbackDemo/Home'

function App() {
  return (
    <div className="App">
      {/* <Hooksdemo/>
      <ParentComponent/>
      <Loginform/> */}
       {/* <UseEffectHook/>  */}
      {/* <UseEffectdemo/> */}
      {/* <UseContext/> */}
      {/* <UseRefdemo/> */}
      {/* <UseReducerdemo/> */}
      {/* <UsecallbackUsecase/> */}
      <UsecallbackDemo/>
    </div>
  );
}

export default App;
