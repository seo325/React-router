
import { BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const isLogin = true ;

function App() {
  return (
   <BrowserRouter>
  <Links/>
  <NavLinks/>
   <Switch>
   {/* <Route path="/login"
    render= {()=> (isLogin ? <Redirect to ="/"/> : <Login /> )}
   /> */}
   <Route path = "/login"/>
   <Route path='/profile/:id' Component={Profile}/>
   <Route path='/profile' Component={Profile}/>
   <Route path='/about' Component={About}/>
   <Route path='/' Component={Home}/>
   <Route  Component={NotFound}/>


   </Switch>

   </BrowserRouter>
  );
}

export default App;
