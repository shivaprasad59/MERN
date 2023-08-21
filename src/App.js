import 'bootstrap/dist/css/bootstrap.css'
import SignUp from './components/SignUp';
import Mobiles from './components/Mobiles';
import { Route, Routes } from 'react-router-dom';
import Television from './components/Television';
import Eleother from './components/Eleother';
import Home from './components/Home';
import Login from './components/Login';
import Electronics from './components/Electronics';
import Fridges from './components/Fridges';
import Airconditioners from './components/Airconditioners';
import HomeandFashion from './components/HomeandFashion';
import Book from './components/Book';
import Medicine from './components/Medicine';
import BuyMedicine from './components/BuyMedicine';
import OnlineAppointment from './components/OnlineAppointment';
import Head from './components/Head';
import WomenDress from './components/WomenDress';
import Footwear from './components/Footwear';
import Fashion from './components/Fashion';
import Kids from './components/Kids';
import Novels from './components/Novels';
import Education from './components/Education';
import Cart from './components/Cart';
//import './App.css'
import BuyItem from './BuyItem';
 function App() {
  return (
   <div className=''>
  

    <Routes>
        <Route path='head' element={<Head/>} /> 
      <Route path="/" element={<Home/>}/>
      <Route path='login' element={<Login/>} />
      <Route path="signup" element ={<SignUp/>}/>
      <Route path="electronics" element={<Electronics/>}> 
        <Route path="mobiles" element={<Mobiles/>} />
        <Route path="televisions" element={<Television/>} />
        <Route path="eleothers" element={<Eleother/>} />
      </Route>
      <Route path="homeandfashion" element={<HomeandFashion/>}> 
        <Route path="airconditioners" element={<Airconditioners/>} />
        <Route path="fridges" element={<Fridges/>} />
        <Route path="fashion" element={<Fashion/>}>
          <Route path="femaledress" element={<WomenDress/>}/>
          <Route path="footwear" element={<Footwear/>}/>
        </Route>
      </Route>
      <Route path="books" element={<Book/>}>
        <Route path="kids" element={<Kids/>}/>
        <Route path="novels" element={<Novels/>} />
        <Route path="education" element={<Education/>} />
      </Route>
      <Route path="medicine" element={<Medicine/>}>
        <Route path="buymedicine" element={<BuyMedicine/>} />
        <Route path="onlineappointment" element={<OnlineAppointment/>} />
      </Route>
      <Route path="cart" element={<Cart/>}/>
      <Route path="buyItem" element={<BuyItem/>} />
    </Routes>
   </div>
  );

  
}

export default App;
