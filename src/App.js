import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Mimic from './pages/Home/Mimic';
import PersonalWebsite from './pages/Home/PersonalWebsite';
import WingIt from './pages/Home/WingIt';
import WmweWebsite from './pages/Home/WmweWebsite';
import CamCompanion from './pages/Home/CamCompanion';
import { BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
     
      <Header></Header>
  
     
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route path='/mimic' element={<Mimic></Mimic>}></Route>
      <Route path='/personalwebsite' element={<PersonalWebsite/>}></Route>
      <Route path='/wingit' element={<WingIt></WingIt>}></Route>
      <Route path='/wmwewebsite' element={<WmweWebsite></WmweWebsite>}></Route>
      <Route path='/camcompanion' element={<CamCompanion/>}></Route>
      <Route exact path="/website" element={<Home></Home>}></Route>
    </Routes>

    </Router>
    </div>
  );
}

export default App;
