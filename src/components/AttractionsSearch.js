import React ,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AttractionsSearch = () => {
    const [isSearch,setIsSearch] = useState(false)
    const [isSmall,setIsSmall] = useState(false)

    const handleWindow = () =>{
        if(typeof window !== undefined){
            if(window.innerWidth < 768){
                setIsSmall(true)
            }else{
                setIsSmall(false)
            }
        }
    }

    useEffect(()=>{
        handleWindow()
    },[])
    return (
        <div className="attractions__search-wrapper">
            <div className="attractions__search">
                <h1>Find and book a great experience</h1>
                <p>Discover more of your destination and make the most of your trip</p>
                <form action="" className="attractions__form">
                    <div className="attractions__field">
                        <FontAwesomeIcon icon={faSearch} />
                        {!isSmall && <input type="text" placeholder="Destinations, museums, tours..." /> }
                        {isSmall &&  <input onClick={() => setIsSearch(true)} type="text" placeholder="Destinations, museums, tours..." />}
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
