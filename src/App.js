
import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup.jsx';
import Dashbord from './components/Dashbord';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';
import Rentallists from './components/Rentallists';
import Form from './components/Form';

import Layout from './Shared/Layout';
import Newrental from './components/Newrental';
import Managerlayout from './Shared/Managerlayout';
import Managerdashbord from './components/Managerdashbord';
import Landlordaccount from './components/Landlordaccount';






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
        <Route path="form" element={ <Form/> } />
        
       
        <Route path='dashbordlayout' element={<Layout/>}>
        
             
              <Route index element={<Dashbord />}></Route>
              <Route path='new' element={<Newrental />}></Route>
              
        </Route>
        <Route path='managerlayout' element={<Managerlayout/>}>
        
             
        <Route index element={<Managerdashbord />}></Route>
        <Route path='Landlordaccount' element={<Landlordaccount/>}></Route>
        
       </Route>

</Routes>

</div>
  );
}

export default App;
