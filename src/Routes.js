import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/contactus'
import UpcomingPage from './components/upcomingPage'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path='*' element={<UpcomingPage />} />
        </Routes>
    )
}

export default Router
