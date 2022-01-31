import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Detail from './views/details/Detail';
import Home from './views/home/Home';
function App() {
  return <div className='App mob:p-2 mob:pt-2  mob:w-screen font-mon pl-[96px] h-screen pr-[96px] pt-[36px] w-full'>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/description' element={<Navigate to="/home" />} />

      <Route path='/description/:id' element={<Detail />} />
    </Routes>

    <Footer />
  </div>;
}

export default App;
