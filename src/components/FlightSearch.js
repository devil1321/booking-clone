import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'gatsby-link'
import { useStaticQuery, graphql } from "gatsby"

const FlightSearch = () => {
    const data = useStaticQuery(graphql`
    {
        allLocations(filter: {name: {regex: "/Pattaya/"}}) {
        edges {
          node {
            id
            name
            flight
            arrival
          }
        }
      }
    }
  `)
    const [browser,setBrowser] = useState('')
    const [isBrowser,setIsBrowser] = useState(false)

    const [isEconomyOpen, setIsEconomyOpen] = useState(false)
    const [isAdultOpen, setIsAdultOpen] = useState(false)
    const [searchPlaces,setSearchPlaces] = useState([])
    const [searchList,setSearchList] = useState([])
    const [searchListFrom,setSeachListFrom] = useState([])

    const [isAccordionOpen,setIsAccordionOpen] = useState(true)
    const [isSearchOpen,setIsSearchOpen] = useState(false)
    const [isSearchWhereOpen,setIsSearchWhereOpen] = useState(false)
    const [isDateShow,setIsDateShow] = useState(false)
  
    const [isAccordionOpenMultiple,setIsAccordionOpenMultiple] = useState(true)
    const [isSearchOpenMultiple,setIsSearchOpenMultiple] = useState(false)
    const [isSearchWhereOpenMultiple,setIsSearchWhereOpenMultiple] = useState(false)
    const [isDateShowMultiple,setIsDateShowMultiple] = useState(false)
    const [isChoiceSm,setIsChoiceSm] = useState(false)
    const [isFromSm,setIsFromSm] = useState(false)
    const [isWhereSm,setIsWhereSm] = useState(false)
    const [isFromAccordion,setIsFromAccordion] = useState(false)
    const [isMultiple,setIsMultiple] = useState(false)

    const [pClass,setPClass] = useState('Economy')
    const [formData,setFormData] = useState({
        places:[]
    })
    const handleSearch = (e) =>{
        let searchText = e.target.value
        const places = data.allLocations.edges
        let tempPlaces = places.filter(place =>{
            let searchPlace = place.node.name
            const regex = new RegExp(`^${searchText}`,'gi')
            return searchPlace.match(regex) 
        })
        if(e.target.classList.contains('from-input')){
            setSearchList([...tempPlaces])
          
        }else if(e.target.classList.contains('where-input')){
            setSeachListFrom([...tempPlaces])
           console.log(searchListFrom)
        }
    }
   
    const handlePlace = (e) =>{
        let placeCheckbox = e.target.parentElement.lastChild
        if(placeCheckbox.checked){
            let tempPlaces = [...searchPlaces]
            tempPlaces.push(placeCheckbox.name)
            setSearchPlaces(tempPlaces)
        }else{
            let tempPlaces = [...searchPlaces]
            tempPlaces = tempPlaces.filter(placeItem => placeItem !== placeCheckbox.name)
            setSearchPlaces(tempPlaces)
        }
    }
    const handleRemove = (e) =>{
        e.stopPropagation()
        let removedPlace = e.target.parentElement.parentElement.firstChild.innerHTML
        let tempPlaces = [...searchPlaces]
        tempPlaces = tempPlaces.filter(place => place !== removedPlace)
        setSearchPlaces(tempPlaces)
    }
    
    const handleChange = (e) =>{
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
        setFormData(prevState =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleStyles = () =>{
        if(browser.innerWidth > 767){
        const mainInner = document.querySelectorAll('.flight-s__main-inner')
        const inputs = document.querySelectorAll('.flight-s__input')
            const date_1 = mainInner[0].querySelector('.flight-s__input.date')
            
            if(!isMultiple){
            mainInner[0].style.border = '4px solid orange'
            inputs.forEach(input => {
                input.style.borderRight = '4px solid orange'
            })
            date_1.style.borderRight = "4px solid orange"
        }else{
            const date_2 = mainInner[1].querySelector('.flight-s__input.date')
            mainInner[0].style.border = '4px solid orange'
            mainInner[1].style.border = '4px solid orange'
            mainInner[0].style.borderBottom = '4px solid grey'
            mainInner[1].style.borderTop = '0px'
            inputs.forEach(input =>{
                input.style.borderRight = '4px solid grey'
            })
            date_1.style.borderRight = 0
            date_2.style.borderRight = 0
        }
    }
    }
    const renderMenu = (way) =>{
        return(
            <div className="flight-s__from-sm">
            <p className="flight-s__from-cancel" onClick={()=>{
                setIsFromSm(false)
                setIsWhereSm(false)
                }}>Anuluj</p>
            <h3>{way} lecisz ?</h3>
            <input type="text" />
            <div className="flight-s__from-sm-accordion">
                <div className="flight-s__from-sm-acccordion-header" onClick={()=>{setIsFromAccordion(!isFromAccordion)}}>
                <p>W twoim wyszukiwaniu (1)</p>
                {isFromAccordion 
                    ? <FontAwesomeIcon icon ={faChevronUp} />
                    : <FontAwesomeIcon icon ={faChevronDown} />
                }
                </div>
                {isFromAccordion && 
                    <div className="flighs-s__accordion-text">
                        <p>Warszawa Wszystkie Lotniska</p>
                        <input type="checkbox" name="" id="" /> 
                    </div>}
            </div>
        </div>
        )
    }
    
    useEffect(()=>{
        if(searchPlaces.length == 0){
            setIsSearchOpen(false)
        }
        if(typeof window !== undefined){
            if(!isBrowser){
                setBrowser(window)
                setIsBrowser(true)
            }
        }
        handleStyles()
    },[searchPlaces,searchListFrom,formData,isMultiple,browser])
    
    return (
        <div className="flight-s">
            {browser.innerWidth > 767 ? <form action="" className="flight-s__form" onSubmit = {(e)=>{handleSubmit(e)}}>
                <div className="flight-s__header">
                    <div className="flight-s__radio">
                        <input type="radio" onClick={()=>{setIsMultiple(false)}} name="choice" value="round-trip" id="" />
                        <label htmlFor="" >Round trip</label>
                    </div>
                    <div className="flight-s__radio">
                        <input type="radio" onClick={()=>{setIsMultiple(false)}} name="choice" value="one-wat" id="" />
                        <label htmlFor="" >One way</label>
                    </div>
                    <div className="flight-s__radio">
                        <input onClick={()=>setIsMultiple(true)} type="radio" name="choice" value="multi-city" id="" />
                        <label htmlFor="">Multi-city</label>
                    </div>
                    <div className="flight-s__select" onClick={()=>{
                            setIsEconomyOpen(!isEconomyOpen)
                        }}>Economy
                        <FontAwesomeIcon icon={faChevronDown} />
                        {isEconomyOpen && <div className="flight-s__menu-economy" onMouseLeave = {()=>{setIsEconomyOpen(false)}}>
                            <p onClick={(e)=>{setPClass(e.target.dataset.class)}} data-class="Economy">Economy</p>
                            <p onClick={(e)=>{setPClass(e.target.dataset.class)}} data-class="Premium Econom">Premium Economy</p>
                            <p onClick={(e)=>{setPClass(e.target.dataset.class)}} data-class="Bussines">Bussines</p>
                            <p onClick={(e)=>{setPClass(e.target.dataset.class)}} data-class="First Class">First Class</p>
                        </div>
                        }
                    </div>
                    <div className="flight-s__select" onClick={()=>{
                        setIsAdultOpen(!isAdultOpen)
                    }}>Adult
                        <FontAwesomeIcon icon={faChevronDown} />
                        {isAdultOpen && <div className="flight-s__menu-person" onMouseLeave = {()=>{setIsAdultOpen(false)}}>
                            <div className="flight-s__person-content">

                                <div className="flight-s__person-text">
                                    <p>Adults</p>
                                    <p>Age 18+</p>
                                </div>

                                <div className="flight-s__person-buttons">
                                    <div className="flight-s__person-inc">+</div>
                                    <div>2</div>
                                    <div className="flight-s__person-dec">-</div>
                                </div>

                            </div>
                            <div className="flight-s__person-content">
                                <div className="flight-s__person-text">
                                    <p>Children</p>
                                    <p>Age 18+</p>
                                </div>
                                <div className="flight-s__person-buttons">
                                    <div className="flight-s__person-inc">+</div>
                                    <div>1</div>
                                    <div className="flight-s__person-dec">-</div>
                                </div>
                            </div>
                            <div className="flight-s__person-footer">
                                <p></p>
                                <button>Done</button>
                            </div>
                        </div>}
                    </div>
                </div>

                <div className="flight-s__main">
                    <div className="flight-s__main-inner">
                        <div className="flight-s__input">

                            <div className="flight-s__input-wrapper">
                                <input type="text" placeholder="Where from?" value="" onClick = {(e)=>{setIsSearchOpen(true)}}/>
                            </div>
                            {isSearchOpen && <div className="flight-s__input-menu">
                            <div className="handle-state" onMouseLeave = {()=>{setIsSearchOpen(false)}}>
                                <div className="flight-s__input-header">
                                    {searchPlaces.map(place =>{
                                        return <div className="flight-s__badge"><span className="flight-s__badge-text">{place}</span> <div className="remove-badge" onClick = {(e)=>{handleRemove(e)}}><FontAwesomeIcon icon={faTimes}/></div></div>
                                    })}
                                    <input className="from-input" type="text" onInput={(e)=>{handleSearch(e)}} />
                                </div>
                                {searchList.length > 0 && <div className="flight-s__accordion">
                                    <div className="flight-s__accordion-h">
                                        <p>Included in your search ({searchPlaces.length})</p>
                                        {searchList.length > 0 && isAccordionOpen ? 
                                        <FontAwesomeIcon onClick = {()=>{setIsAccordionOpen(!isAccordionOpen)}} icon={ faChevronUp } />
                                        :
                                        <FontAwesomeIcon onClick = {()=>{setIsAccordionOpen(!isAccordionOpen)}} icon={ faChevronDown } />
                                        }
                                    </div>
                                   {isAccordionOpen && <div className="flight-s__accordion-c">
                                        {searchList.map(place => {
                                            return <div key={place.node.id} className="flight-s__input-menu-item">
                                                        <div className="flight-s__input-menu-text" >
                                                            <FontAwesomeIcon icon={faPlane} />
                                                            {place.node.name}                                                                                       
                                                        </div>
                                                        <input type="checkbox" name={place.node.name} id="" onChange={(e)=>{handlePlace(e)}}/>
                                                    </div>
                                        })}
                                    </div>
                                   }
                                </div>
                                }
                            </div>
                            </div>}
                            <div className="hide-border"></div>
                        </div>
                        <div className="flight-s__icons">
                            <div className="flight-s__icons-inner"> 
                                <div className="flight-s__icon">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                                <div className="flight-s__icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flight-s__input">
                            <div className="flight-s__input-wrapper">
                                <input className="where-input" type="text" placeholder="Where from?" onClick={()=>{setIsSearchWhereOpen(true)}} onChange={(e)=>{handleSearch(e)}} />
                            </div>
                            {isSearchWhereOpen && <div className="flight-s__input-from" onMouseLeave = {()=>{setIsSearchWhereOpen(false)}}>
                                <input type="text" />
                            </div>}
                            {isSearchWhereOpen && searchListFrom.length > 0 ? (<div className="flight-s__where-from" onMouseLeave = {()=>{setIsSearchWhereOpen(false)}}>
                                {searchListFrom.map(place=>{
                                    return <p key={place.node.id}>{place.node.name}</p>
                                })}
                            </div>) : null}
                        </div>
                        <div className="flight-s__input date" onClick={()=>{setIsDateShow(true)}}>When?
                           {isDateShow && <div className="date-input" onMouseLeave={()=>{setIsDateShow(false)}}>
                                <input className="date-main" type="date" />
                                <input className="date-main" type="date" />
                            </div>}
                        </div>
                        {!isMultiple && <button className="flight-s__submit">Search</button>}

                    </div>
                    {!isMultiple && <div className="flight-s__checkbox">
                        <label class="container">Direct flights only
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>}
                </div>
              
               {isMultiple && <div className="flight-s__main-multiple">
                    <div className="flight-s__main-inner">
                        <div className="flight-s__input">

                            <div className="flight-s__input-wrapper">
                                <input type="text" placeholder="Where from?" value="" onClick = {(e)=>{setIsSearchOpenMultiple(true)}}/>
                            </div>
                            {isSearchOpenMultiple && <div className="flight-s__input-menu">
                            <div className="handle-state" onMouseLeave = {()=>{setIsSearchOpenMultiple(false)}}>
                                <div className="flight-s__input-header">
                                    {searchPlaces.map(place =>{
                                        return <div className="flight-s__badge"><span className="flight-s__badge-text">{place}</span> <div className="remove-badge" onClick = {(e)=>{handleRemove(e)}}><FontAwesomeIcon icon={faTimes}/></div></div>
                                    })}
                                    <input className="from-input" type="text" onInput={(e)=>{handleSearch(e)}} />
                                </div>
                                {searchList.length > 0 && <div className="flight-s__accordion">
                                    <div className="flight-s__accordion-h">
                                        <p>Included in your search ({searchPlaces.length})</p>
                                        {searchList.length > 0 && isAccordionOpenMultiple ? 
                                        <FontAwesomeIcon onClick = {()=>{setIsAccordionOpenMultiple(!isAccordionOpenMultiple)}} icon={ faChevronUp } />
                                        :
                                        <FontAwesomeIcon onClick = {()=>{setIsAccordionOpenMultiple(!isAccordionOpenMultiple)}} icon={ faChevronDown } />
                                        }
                                    </div>
                                   {isAccordionOpenMultiple && <div className="flight-s__accordion-c">
                                        {searchList.map(place => {
                                            return <div key={place.node.id} className="flight-s__input-menu-item">
                                                        <div className="flight-s__input-menu-text" >
                                                            <FontAwesomeIcon icon={faPlane} />
                                                            {place.node.name}                                                                                       
                                                        </div>
                                                        <input type="checkbox" name={place.node.name} id="" onChange={(e)=>{handlePlace(e)}}/>
                                                    </div>
                                        })}
                                    </div>
                                   }
                                </div>
                                }
                            </div>
                            </div>}
                            <div className="hide-border"></div>
                        </div>
                        <div className="flight-s__icons">
                            <div className="flight-s__icons-inner"> 
                                <div className="flight-s__icon">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                                <div className="flight-s__icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flight-s__input">
                            <div className="flight-s__input-wrapper">
                                <input className="where-input" type="text" placeholder="Where from?" onClick={()=>{setIsSearchWhereOpenMultiple(true)}} onChange={(e)=>{handleSearch(e)}} />
                            </div>
                            {isSearchWhereOpenMultiple && <div className="flight-s__input-from" onMouseLeave = {()=>{setIsSearchWhereOpenMultiple(false)}}>
                                <input type="text" />
                            </div>}
                            {isSearchWhereOpenMultiple && searchListFrom.length > 0 ? (<div className="flight-s__where-from" onMouseLeave = {()=>{setIsSearchWhereOpenMultiple(false)}}>
                                {searchListFrom.map(place=>{
                                    return <p key={place.node.id}>{place.node.name}</p>
                                })}
                            </div>) : null}
                        </div>
                        <div className="flight-s__input date" onClick={()=>{setIsDateShowMultiple(true)}}>When?
                           {isDateShowMultiple && <div className="date-input" onMouseLeave={()=>{setIsDateShowMultiple(false)}}>
                                <input className="date-main" type="date" />
                                <input className="date-main" type="date" />
                            </div>}
                        </div>
                      

                    </div>
                </div>}

            </form>
            :<form className="flight-s__form-sm">
                {!isMultiple &&  
                    <div className="flight-s__header">
                        <div className="flight-s__radio sm">
                            <input type="radio" onClick={()=>{setIsMultiple(false)}} name="choice" value="round-trip" id="" />
                            <label htmlFor="" >Round trip</label>
                        </div>
                        <div className="flight-s__radio">
                            <input type="radio" onClick={()=>{setIsMultiple(false)}} name="choice" value="one-wat" id="" />
                            <label htmlFor="" >One way</label>
                        </div>
                        <div className="flight-s__radio">
                            <input onClick={()=>setIsMultiple(true)} type="radio" name="choice" value="multi-city" id="" />
                            <label htmlFor="">Multi-city</label>
                        </div>
                    </div>}
                    <div className="flight-s__field">
                        <div className="flight-s__input-field">
                            <input type="text" placeholder="Where from ?" onClick={()=>{setIsFromSm(true)}}/>
                            <div className="flight-s__divider"></div>
                            <input type="text" placeholder="Where to ?"onClick={()=>{setIsWhereSm(true)}}/>
                            <div className="flight-s__v-divider">
                                <div className="flight-s__v-dot"></div>    
                                <div className="flight-s__v-line"></div>    
                                <div className="flight-s__v-dot"></div>    
                            </div>
                            <div className="flight-s__icons-sm">
                                    <div className="flight-s__icons-inner"> 
                                    <div className="flight-s__icon">
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </div>
                                    <div className="flight-s__icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {isMultiple && 
                         <div className="flight-s__input-field">
                         <input type="text" placeholder="Where from ?"/>
                         <div className="flight-s__divider"></div>
                         <input type="text" placeholder="Where to ?"/>
                         <div className="flight-s__v-divider">
                             <div className="flight-s__v-dot"></div>    
                             <div className="flight-s__v-line"></div>    
                             <div className="flight-s__v-dot"></div>    
                         </div>
                         <div className="flight-s__icons">
                                 <div className="flight-s__icons-inner"> 
                                 <div className="flight-s__icon">
                                     <FontAwesomeIcon icon={faArrowLeft} />
                                 </div>
                                 <div className="flight-s__icon">
                                     <FontAwesomeIcon icon={faArrowRight} />
                                     </div>
                                 </div>
                             </div>
                     </div>}
                        <div className="flight-s__field">
                            <FontAwesomeIcon icon={faUser} />
                            <span>When ? </span>
                            <input type="date" name="" id="" />
                        </div> 
                        <div className="flight-s__field class" onClick={()=>{setIsChoiceSm(!isChoiceSm)}}>
                            <p>1 {pClass}</p>
                        </div>
                        <button>Search</button>
                        {isFromSm && renderMenu('Skąd')}
                        {isWhereSm && renderMenu('Dokąd')}
                        {isChoiceSm &&
                            <div className="flight-s__choice-sm-menu">
                                <div className="flight-s__choice-close" onClick={()=>{setIsChoiceSm(false)}}>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h3>Whose travel?</h3>
                                <p>Travelers</p>
                                <div className="flight-s__choice-field">
                                    <div className="flight-s__choice-text">
                                        <p>Adult</p>
                                        <p>Older than 18</p>
                                    </div>
                                    <div className="flight-s__choice-count">
                                        <div>-</div>
                                        <div>1</div>
                                        <div>+</div>
                                    </div>
                                </div>
                                <div className="flight-s__choice-field">
                                    <div className="flight-s__choice-text">
                                        <p>Children</p>
                                        <p>From 0 to 17 years old</p>
                                    </div>
                                    <div className="flight-s__choice-count">
                                        <div>-</div>
                                        <div>1</div>
                                        <div>+</div>
                                    </div>
                                </div>
                                <h3>Travel Class</h3>
                                <div className="flight-s__choice-radio">
                                    <input name="class " value="Economy" type="radio" checked/>
                                    <label htmlFor="">Economy</label>
                                </div>
                                <div className="flight-s__choice-radio">
                                    <input name="class"  value="Economy Premium" type="radio" />
                                    <label htmlFor="">Economy Premium</label>
                                </div>
                                <div className="flight-s__choice-radio">
                                    <input name="class" value="Business" type="radio"  />
                                    <label htmlFor="">Business</label>
                                </div>
                                <div className="flight-s__choice-radio">
                                    <input name="class" value="First Class" type="radio"  />
                                    <label htmlFor="">First Class</label>
                                </div>
                                <hr />
                                <button>Done</button>
                              </div>
                            }
                    
            </form>}


        <div className="flight-s__content-inner">
            <div className="flight-s__cards">
                <div className="flight-s__card">
                    <FontAwesomeIcon icon={faFile} />
                    <div className="flight-s__card-text">
                        <h3>Huge selection</h3>
                        <p>Easily compare 1000s of flights, all in one place</p>
                    </div>
                </div>
                <div className="flight-s__card">
                    <FontAwesomeIcon icon={faSearch} />
                    <div className="flight-s__card-text">
                        <h3>No hidden fees</h3>
                        <p>Always know exactly what you’re paying for</p>
                    </div>
                </div>
                <div className="flight-s__card">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                    <div className="flight-s__card-text">
                        <h3>More flexibility</h3>
                        <p>Keep your travel dates open with flexible ticket options</p>
                    </div>
                </div>
            </div>

            <div className="flight-s__credentials">
                <Link to="#">About Booking.com</Link>
                <Link to="#">Terns & Conditions</Link>
                <Link to="#">Privacy & Cookie statement</Link>
                <Link to="#">Flights Help</Link>
            </div>
        </div>
        
        </div>
    )
}

export default FlightSearch
