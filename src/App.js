import {Routes, Route} from 'react-router-dom';
import Home from './components/Routes/home/home.component';
import NavigationBar from './components/Routes/Navigation/navigation.component';
import Authentication from './components/Routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am The SHOP</h1>
};

const App = () => {
    return (
      <Routes>
        <Route path='/' element = {<NavigationBar />}>
          <Route index element = {<Home/>} />
          <Route path='shop' element = {<Shop/>} />
          <Route path='auth' element = {<Authentication/>} />
        </Route>
      </Routes>
    );
};

export default App;
