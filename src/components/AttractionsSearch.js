import React ,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AttractionsSearch = () => {
    const [isSearch,setIsSearch] = useState(false)
    const [isBrowser,setIsBrowser] = useState(false)
    useEffect(()=>{
        if(typeof window !== undefined){
            if(!isBrowser){
                setIsBrowser(true)
            }
        }
    },[isBrowser])
    return (
        <div className="attractions__search-wrapper">
            <div className="attractions__search">
                <h1>Find and book a great experience</h1>
                <p>Discover more of your destination and make the most of your trip</p>
                <form action="" className="attractions__form">
                    <div className="attractions__field">
                        <FontAwesomeIcon icon={faSearch} />
                        {isBrowser && window.innerWidth > 767 ? <input type="text" placeholder="Destinations, museums, tours..." /> : null}
                        {isBrowser && window.innerWidth < 768 ? <input onClick={() => setIsSearch(true)} type="text" placeholder="Destinations, museums, tours..." /> : null}
                        <button type="submit" className="attractions__submit">Search</button>
                    </div>
                    {isSearch &&
                        <div className="attractions__search-menu">
                              <h3>Search</h3>
                              <div className="atracctions__close " onClick={()=>{setIsSearch(false)}}>
                                    <span></span>
                                    <span></span>
                                </div>
                            <div className="attractions__menu-field">
                                <FontAwesomeIcon icon ={faSearch} />
                                <input type="text" />
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default AttractionsSearch
