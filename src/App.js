import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
