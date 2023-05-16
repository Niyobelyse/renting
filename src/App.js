
import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup.jsx';
import Dashbord from './components/Dashbord';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';
import Rentallists from './components/Rentallists';

import Allproperties from './components/Allproperties';
import Layout from './Shared/Layout';
import Newrental from './components/Newrental';






function App() {
  
  return (
<div className='App'>
 


<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        
        <Route path="contactus" element={ <Contact/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="dashbord" element={ <Dashbord/> } />
        <Route path="footer2" element={ <Footer2/> } />
        <Route path="rentallists" element={ <Rentallists/> } />
        <Route path="allproperties" element={ <Allproperties/> } />
       
        <Route path='dashbordlayout' element={<Layout/>}>
        
             
              <Route index element={<Dashbord />}></Route>
              <Route path='new' element={<Newrental />}></Route>
              
        </Route>

</Routes>

</div>
  );
}

export default App;
