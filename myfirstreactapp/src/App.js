import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1/Comp1';
import ClassComp from './Components/ClassComp/ClassComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import HeaderComp from './Components/ClassComp/HeaderComp'
import Content from './Components/ClassComp/Content'
import Footer from './Components/ClassComp/Footer'

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <Content/>
      <Content/>
      <Content/>
      
      <Comp1/>
      <ClassComp/>
      <Footer/>
    </div>
  );
}

export default App;
