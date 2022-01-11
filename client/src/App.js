
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home/Home';

import UserList from './components/Pages/userlist/UserList';
import User from './components/Pages/Userpage/User';
import NewUser from './components/Pages/newUserPage/NewUser';
import ProductLists from './components/Pages/products/ProductLists';
import Product from './components/Pages/product/Product';
import { BrowserRouter as Router,  Route ,Routes} from "react-router-dom";
import NewProduct from './components/Pages/newProduct/NewProduct';


function App() {
  return (
    <>
    <Router>
     <Topbar/>
     <div className='container'>
     <Sidebar/>
     <Routes>
      <Route  path="/" element={ <Home/>}>
                
     </Route>
     <Route path="/users" element={ <UserList/>}>
    
     </Route>
     <Route path="/user/:userId" element={ <User/>}>
    
     </Route>
     <Route path="/newUser" element={ <NewUser/>}>
    
     </Route>
     <Route path="/products" element={<ProductLists/>}>
       
     </Route>
     <Route path="/product/:productId" element={<Product/>}>
    
     </Route>
     <Route path="/newProduct" element={ <NewProduct/>}>
    
     </Route>
     
     </Routes> 
     </div>

    </Router>
         </>
  );
}

export default App;
