import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Header from './components/header'
import CoinPage from './pages/CoinPage'
import Home from './pages/Home'

export default function MainRouter() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/coin/:id' element={<CoinPage />} />
            </Routes>
        </Router>
    </div>
  )
}
