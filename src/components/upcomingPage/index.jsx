import React from 'react'
import Header from '../../layout/header'
import { Link } from 'react-router-dom'

const UpcomingPage = () => {
    return (
        <section className='upcoming-page'>
            <Header />
            <h3>Under developemnt</h3>
            <p>This page is under developemnt. Please check back later.</p>
            <Link to='/'>Go to Home</Link>
        </section>
    )
}

export default UpcomingPage