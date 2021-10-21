import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
const RentalsSearch = () => {

    const [isDriverAgeShow, setIsDriverAgeShow] = useState(false)
    const [isDroppOffShow,setIsDropOffShow] = useState(false)

    useEffect(()=>{
        const pickup = document.querySelector('.pickup')
        const pickupInput = document.querySelector('.pickup input')
        const dropoff = document.querySelector('.dropoff')
        if(isDroppOffShow){
            pickup.style.width = '50%'
            dropoff.style.width = '50%'
            pickupInput.style.borderRight = "1px solid gray"
            pickup.style.borderRight = "0px solid gray"
        }else{
            pickup.style.width = '55%'
            pickupInput.style.borderRight = "0px solid gray"
            pickup.style.borderRight = "4px solid orange"
        }
    },[isDriverAgeShow,isDroppOffShow])

    return (
        <React.Fragment>
            <div className="rentals-search lg">
                <h2>Car hire for any kind of trip</h2>
                <p>Compare deals from the biggest car hire companies</p>
                <form className="rentals-search__form">
                    <div className="rentals-search__form-header">
                        <div className="rentals-search__radio">
                            <input type="radio" name="location" id="" onChange={()=>{setIsDropOffShow(false)}}/>
                            <label htmlFor="">Return to same location</label>
                        </div>
                        <div className="rentals-search__radio">
                            <input type="radio" name="location" id="" onChange={()=>{setIsDropOffShow(true)}} />
                            <label htmlFor="">Return to different location</label>
                        </div>
                    </div>
                    <div className="rentals-search__main-field">
                        <div className="rentals-search__field pickup">
                            <FontAwesomeIcon icon={faCar} />
                            <input type="text" />
                        </div>
                        {isDroppOffShow && <div className="rentals-search__field dropoff">
                                                <FontAwesomeIcon icon={faCar} />
                                                <input type="text" />
                                            </div>}
                        <div className="rentals-search__field">
                            <input type="date" name="" id="" />
                        </div>
                        <div className="rentals-search__field">
                            <input type="date" name="" id="" />

                        </div>
                        <button type="submit" className="rentals-search__submit">Search</button>
                    </div>
                    <div className="rentals-search__checkbox-wrapper">
                        <div className="rentals-search__checkbox">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Driver aged between 30 - 65</label>
                        </div>
                        <div className="rentals-search__drivers-age-field">
                            <div className="rentals-search__icon-circle" onClick={()=>{setIsDriverAgeShow(!isDriverAgeShow)}}>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                            {isDriverAgeShow && <div className="rentals-search__age-field">
                                                    <p>Driver`s age</p>
                                                    <input type="text" />
                                                </div>}
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default RentalsSearch
