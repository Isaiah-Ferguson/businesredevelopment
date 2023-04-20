import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs.js';
import ClassPage from './Components/ClassPage.js';
import './Components/styles.css'
import ContactUsPage from './Components/ContactUsPage';
import ScrollButton from './Components/ScrollButton';
function App() {
  return (
    <>

    <BrowserRouter>
    <ScrollButton/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/ClassPage' element={<ClassPage/>}/>
      <Route path='/ContactUsPage' element={<ContactUsPage/>}/>
    </Routes>
 
    </BrowserRouter>
    
    </>
  );
}

export default App;
