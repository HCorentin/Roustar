import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TourPage from './pages/TourPage.jsx'
import './index.css'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour/:artist" element={<TourPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
