import React from 'react'
import Link from 'gatsby-link'
const normalAlert = ({content,link,href}) => {
    return (
        <div className="alert-n">
            <p>{content}</p>
            <Link to={href}>{link}</Link>
        </div>
    )
}

export default normalAlert
