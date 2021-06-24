import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1/Comp1';
import ClassComp from './Components/ClassComp/ClassComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import HeaderComp from './Components/ClassComp/HeaderComp'
import Content from './Components/ClassComp/Content'
import Footer from './Components/ClassComp/Footer'

import StateComp from './Components/ClassComp/StateComp/StateComp'
import Acomp from './Components/ClassComp/ComponentsRelation/A'

import Parent from './Components/ChildtoParent/Parent'

import A from './Components/NestedParenttoChild/A'

import ChildtoParentDataPassDemo from './Components/ChildtoParent/Parent'

import ContextApiDemo from './Components/ContextApi/A'

function App() {
  return (
    <div className="App">
      {/* <HeaderComp/>
     
      <StateComp/>
      <Footer/> */}
      {/* <Acomp/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      {/* <ChildtoParentDataPassDemo/> */}
      <ContextApiDemo/>
    </div>
  );
}

export default App;
