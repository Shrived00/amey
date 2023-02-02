// import About from './pages/about';
// import About from './page/about';
// import Home from './home';
import SliderLeft from './SliderLeft.js'
import "./FontAwesome"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import './App.css';
import Footer from './footer';
import Navbar from './pages/Navbar';
import Contact from './pages/contact.js';
import Searchbar from './pages/searchbar'
import Feature from './pages/featuremovie';
import Login from './components/Login';
import Signin from './components/Signup';



function App() {
  return (
    <>
    {/* <Home/> */}
      
    <BrowserRouter>
    <Routes>
      
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/searchbar" element={<Searchbar />} />
    <Route exact path="/featuremovie" element={<Feature />} />
    {/* <Route exact path="/login" element={<Login />} /> */}
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signin" element={<Signin />} />
    <Route exact path="/home" element={<Home />} />

    </Routes>
    </BrowserRouter>     
    
        {/* <Route path={'/about'}>
          <Navbar />  
          <About />
        </Route>
      
        </Router>
        <Footer/> */}

    {/* <Router>
      <Switch>
        <Route exact path={'/'}>
          <Navbar />
          <Home />
        </Route>
        <Route path={'/about'}>
          <Navbar />  
          <About />
        </Route>
      </Switch>
    </Router>
    <Footer/> */}
    {/* <SliderLeft/> */}
    </>
    

  );
}

export default App;
