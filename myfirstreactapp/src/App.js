import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1/Comp1';
import ClassComp from './Components/ClassComp/ClassComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import HeaderComp from './Components/ClassComp/HeaderComp'
import Content from './Components/ClassComp/Content'
import Footer from './Components/ClassComp/Footer'

import StateComp from './Components/ClassComp/StateComp/StateComp'

function App() {
  return (
    <div className="App">
      <HeaderComp/>
     
      <StateComp/>
      <Footer/>
    </div>
  );
}

export default App;
