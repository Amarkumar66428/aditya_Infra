import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/contactus'
import UpcomingPage from './components/upcomingPage'

// About Us pages
import AboutOverview from './pages/about/Overview'
import AboutHistory from './pages/about/History'

// Projects pages
import ProjectsCurrent from './pages/projects/Current'
import ProjectsCompleted from './pages/projects/Completed'
import ProjectsUpcoming from './pages/projects/Upcoming'

// Suppliers page
import Suppliers from './pages/suppliers'

// Career pages
import CareerJobs from './pages/career/Jobs'
import CareerWhyJoin from './pages/career/WhyJoin'
import CareerBenefits from './pages/career/Benefits'
import CareerApply from './pages/career/Apply'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            
            {/* About Us routes */}
            <Route path="/about/overview" element={<AboutOverview />} />
            <Route path="/about/history" element={<AboutHistory />} />
            
            {/* Projects routes */}
            <Route path="/projects/current" element={<ProjectsCurrent />} />
            <Route path="/projects/completed" element={<ProjectsCompleted />} />
            <Route path="/projects/upcoming" element={<ProjectsUpcoming />} />
            
            {/* Suppliers route */}
            <Route path="/suppliers" element={<Suppliers />} />
            
            {/* Career routes */}
            <Route path="/career/jobs" element={<CareerJobs />} />
            <Route path="/career/why-join" element={<CareerWhyJoin />} />
            <Route path="/career/benefits" element={<CareerBenefits />} />
            <Route path="/career/apply" element={<CareerApply />} />
            
            <Route path='*' element={<UpcomingPage />} />
        </Routes>
    )
}

export default Router
