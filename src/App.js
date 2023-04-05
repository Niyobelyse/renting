
import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Signup';
import Signup from './components/Signup.jsx';

function App() {
  return (
<div className='App'>
<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />

</Routes>
</div>
  );
}

export default App;
