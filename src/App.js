import {Routes, Route} from 'react-router-dom';
import Home from './components/Routes/home/home.component';
import NavigationBar from './components/Routes/Navigation/navigation.component';
import SignIn from './components/Routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am The SHOP</h1>
};

const App = () => {
    return (
      <Routes>
        <Route path='/' element = {<NavigationBar />}>
          <Route index element = {<Home/>} />
          <Route path='shop' element = {<Shop/>} />
          <Route path='sign-in' element = {<SignIn/>} />
        </Route>
      </Routes>
    );
};

export default App;
