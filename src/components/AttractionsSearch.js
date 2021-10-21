import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AttractionsSearch = () => {
    return (
        <div className="attractions__search-wrapper">
            <div className="attractions__search">
                <h1>Find and book a great experience</h1>
                <p>Discover more of your destination and make the most of your trip</p>
                <form action="" className="attractions__form">
                    <div className="attractions__field">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Destinations, museums, tours..." />
                        <button type="submit" className="attractions__submit">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AttractionsSearch
