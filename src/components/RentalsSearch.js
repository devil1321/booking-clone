import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faProfile } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
const RentalsSearch = () => {

    const [isDriverAgeShow, setIsDriverAgeShow] = useState(false)
    const [isDroppOffShow,setIsDropOffShow] = useState(false)
    
    const [age,setAge] = useState([])
    const [hours,setHours] = useState([])
    const [minutes,setMinutes] = useState([])

    const [fromTime,setFromTime] = useState({
        hours:"18", 
        minutes:"00"
    })

    const [untilTime,setUntilTime] = useState({
        hours:"18", 
        minutes:"00"
    })

    const handleFromTime = (e) =>{
        setFromTime(prevState => ({
            ...prevState,
            [e.target.id]:e.target.innerText
        }))
    }
    const handleUntilTime = (e) =>{
        setUntilTime(prevState => ({
            ...prevState,
            [e.target.id]:e.target.innerText
        }))
    }

    const setAges = (startAge,endAge) =>{
        let ages = []
        for(let i = startAge; i < endAge; i++){
            ages.push(i)
        }
        setAge(ages)
    }

    const setTimeArrs = () =>{
        let minutes = []
        let hours = []
        for(let i = 0; i <= 23; i++){
            if(i < 10){
                var hour = `0${i}`
            }else{
                var hour = i
            }
            hours.push(hour)
        }
        setHours(hours)

        for(let i = 0; i <= 55; i+=5){
            if(i <= 5 ){
                var minute = `0${i}`
            }else{
                var minute = i
            }
            minutes.push(minute)
        }
        setMinutes(minutes)
    }
    
    useEffect(()=>{
        setAges(26,45)
        setTimeArrs()
        const pickup = document.querySelector('.pickup')
        const pickupInput = document.querySelector('.pickup input')
        const dropoff = document.querySelector('.dropoff')
        if(pickup){
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
    }
    },[isDriverAgeShow,isDroppOffShow])

    return (
        <React.Fragment>
        {window.innerWidth > 1024  
        ?   <div className="rentals-search lg">
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
        :   <div className="rentals-search-sm">
                <div className="rentals-search-sm__field">
                    <FontAwesomeIcon icon ={faCar} />
                    <p>Pickup location</p>
                </div>
                <div className="rentals-search-sm__field">
                    <div className="rentals-search-sm__field-inner">
                        <FontAwesomeIcon icon ={faCalendar} />
                        <input type="date" name="" id="" />   
                    </div>
                    <div className="reantals-seach-sm__time">
                        <p>{fromTime.hours} : {fromTime.minutes}</p>
                        <div className="rentals-search-sm__time-h">
                            {hours.map(h => <p>{h}</p>)}
                        </div>
                        <div className="rentals-search-sm__time-m">
                            {minutes.map(m => <p>{m}</p>)}
                        </div>
                    </div>
                </div>

                <div className="rentals-search-sm__field">
                    <div className="rentals-search-sm__field-inner">
                        <FontAwesomeIcon icon ={faCalendar} />
                        <input type="date" name="" id="" />   
                    </div>
                    <div className="reantals-seach-sm__time">
                        <p>{untilTime.hours} : {untilTime.minutes}</p>
                        <div className="rentals-search-sm__time-h">
                            {hours.map(h => <p>{h}</p>)}
                        </div>
                        <div className="rentals-search-sm__time-m">
                            {minutes.map(m => <p>{m}</p>)}
                        </div>
                    </div>
                </div>
             
                <div className="rentals-search-sm__field">
                    <FontAwesomeIcon icon ={faProfile} />
                    <p>Driver Age</p>
                    <div className="rentals-search-sm__driver-age">
                        {age.map(a => <p>{a}</p>)}
                    </div>
                </div>
            </div> 
        }
        </React.Fragment>
    )
}

export default RentalsSearch
