import React from 'react'
import Link from 'gatsby-link'

const FooterFoot = () => {
    return (
        <div className="footer">
            <p>Copyright © 1996–2021 Booking.com™. All rights reserved.</p>
            <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
            <div className="footer__logos">
                <img src="/booking.png" alt="logo" />
                <img src="/priceline.png" alt="logo" />
                <img src="/kayak.png" alt="logo" />
                <img src="/agoda.png" alt="logo" />
                <img src="/rentalcars.png" alt="logo" />
                <img src="/opentable.png" alt="logo" />
            </div>
        </div>
    )
}

export default FooterFoot
