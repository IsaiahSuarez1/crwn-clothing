import {Routes, Route} from 'react-router-dom';
import Home from './components/Routes/home/home.component';
import NavigationBar from './components/Routes/Navigation/navigation.component';
import Authentication from './components/Routes/authentication/authentication.component';
import Shop from './components/Routes/shop/shop.component';
import Checkout from './components/Routes/checkout/checkout.component';

const App = () => {
    return (
      <Routes>
        <Route path='/' element = {<NavigationBar />}>
          <Route index element = {<Home/>} />
          <Route path='shop' element = {<Shop/>} />
          <Route path='auth' element = {<Authentication/>} />
          <Route path='checkout' element = {<Checkout/>} />
        </Route>
      </Routes>
    );
};

export default App;
