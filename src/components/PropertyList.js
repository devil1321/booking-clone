import React from 'react'
import Link from 'gatsby-link'
const PropertyList = () => {
    return (
        <div className="property">
            <div className="property__heading">
                <button>List your property</button>
            </div>
            <div className="property__list">
                <Link to="#">Mobile Version</Link>
                <Link to="#">Your Account</Link>
                <Link to="#">Makes changes to your booking online</Link>
                <Link to="#">Contact Customer Service</Link>
                <Link to="#">Become an affiliate</Link>
                <Link to="#">Booking.com for Bussines</Link>
            </div>
        </div>
    )
}

export default PropertyList
