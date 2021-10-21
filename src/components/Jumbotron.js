import React from 'react'
import Link from 'gatsby-link'
const Jumbotron = ({title,text,link,href}) => {
    return (
        <div className="jumbotron">
            <h2>{title}</h2>
            <p>{text}</p>
            {link ? <Link to={href}>{link}</Link> : null}
        </div>
    )
}

export default Jumbotron
