import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import FruitsPage from './components/pages/FruitsPage';
import VegetablesPage from './components/pages/VegetablesPage';
import BeefPage from './components/pages/BeefPage';
import BrandNames from './components/BrandNames/BrandNames';
import { DefaultGallery } from './components/Gallery/Gallery';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Banner></Banner>
            <BrandNames></BrandNames>
            <Category />
            <AboutUs></AboutUs>
            <DefaultGallery></DefaultGallery>
          </div>
        } />
        <Route path="/fruits" element={<FruitsPage />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/beef" element={<BeefPage />} />
      </Routes>
    </Router>
  )
}

export default App
