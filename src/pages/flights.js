import React from 'react'
import Layout from '../components/layout'
import NormalAlert from '../components/normalAlert'
import FlightSearch from '../components/FlightSearch'
const Flights = () => {
    return (
        <Layout>
            <div className="flights">
                <div className="flights__content">
                    <NormalAlert content="Coronavirus (COVID-19) may affect your travel plans." link="Learn More" href="#" />
                    <h1>Find and book your next flight</h1>
                    <p>When the moment's right, we're here</p>
                    <FlightSearch />
                </div>
            </div>
        </Layout>
    )
}

export default Flights
