import React,{ useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
const TaxiSearch = () => {

    const [isSet,setIsSet] = useState(false)

    const [time,setTime] = useState({
        hours:"18", 
        minutes:"00"
    })
    
    const [isListShow,setIsListShow] = useState(false)
    const [isTimeShow,setIsTimeShow] = useState(false)
    const [isHoursShow,setIsHoursShow] = useState(false)
    const [isMinutesShow,setIsMinutesShow] = useState(false)
    const [isOneWay,setIsOneWay] = useState(true)

    const [passagers,setPassagers] = useState(1)
    const [options,setOptions] = useState([])

    const [hours,setHours] = useState([])
    const [minutes,setMinutes] = useState([])

    const handleTime = (e) =>{
        setTime(prevState => ({
            ...prevState,
            [e.target.id]:e.target.innerText
        }))
    }


    const setOptionsArr = () =>{
        let tempOptions = []
        for(let i = 1; i <= 16; i++){
            tempOptions.push(i)
        }
        setOptions(tempOptions)
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
        if(!isSet){
            setOptionsArr()
            setTimeArrs()
        }
    },[isSet])

    return (
        <div className="taxi__search">
            <form action="" className="taxi__form">
                <div className="taxi__radio-group">
                    <div className="taxi__radio-field">
                        <input type="radio" name="way" id="" onChange={(e)=>{setIsOneWay(true)}}/>
                        <label htmlFor="">One-way</label>
                    </div>
                    <div className="taxi__radio-field">
                        <input type="radio" name="way" id="" onChange={(e)=>{setIsOneWay(false)}} />
                        <label htmlFor="">Return</label>
                    </div>
                </div>
                {isOneWay 
                ? <div className="taxi__one-way-serach">
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter pick-up location"/>
                    </div>
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter destination"/>
                    </div>
                    <div className="taxi__field">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="taxi__field"  onClick={()=>{setIsTimeShow(!isTimeShow)}}>
                        <FontAwesomeIcon icon={faClock} />
                        <input type="text" placeholder="12:00" value={`${time.hours}:${time.minutes}`}/>
                    </div>
                    {isTimeShow && 
                        <div className="taxi__time-field">
                            <p className="taxi__time-title">Pick-up time</p> 
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsHoursShow(!isHoursShow)
                                    setIsMinutesShow(false)
                                }}>
                                <p>{time.hours}</p>
                                <div className="taxi__hours" >
                                {isHoursShow && 
                                    <React.Fragment>
                                        {hours.map(hour => <p id="hours" onClick={(e)=>{handleTime(e)}}>{hour}</p>)}
                                    </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsMinutesShow(!isMinutesShow)
                                    setIsHoursShow(false)
                                }}>
                                <p>{time.minutes}</p>
                                <div className="taxi__minutes">
                                    {isMinutesShow && 
                                        <React.Fragment>
                                            {minutes.map(minute => <p id="minutes" onClick={(e)=>{handleTime(e)}}>{minute}</p>)}
                                        </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <button>Confirm</button>
                        </div>}
                    <div className="taxi__field" onClick={()=>{setIsListShow(!isListShow)}} >
                        <FontAwesomeIcon icon={faUserAlt} />
                        <input type="text" placeholder="1" value={passagers}/>
                        <div className="taxi__field-controls">
                            <FontAwesomeIcon icon={faChevronUp} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        {isListShow && <div className="taxi__options">
                                            <p>Passagers</p>
                                            {options.map(option => <p onClick={(e)=>setPassagers(e.target.innerText)}>{option}</p>)}
                                        </div>
                        }
                    </div>
                    <button>Search</button>
                </div>
                :  <div className="taxi__two-way__search">
                     <div className="taxi__one-way-serach">
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter pick-up location"/>
                    </div>
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter destination"/>
                    </div>
                    <div className="taxi__field">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="taxi__field"  onClick={()=>{setIsTimeShow(!isTimeShow)}}>
                        <FontAwesomeIcon icon={faClock} />
                        <input type="text" placeholder="12:00" value={`${time.hours}:${time.minutes}`}/>
                    </div>
                    {isTimeShow && 
                        <div className="taxi__time-field">
                            <p className="taxi__time-title">Pick-up time</p> 
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsHoursShow(!isHoursShow)
                                    setIsMinutesShow(false)
                                }}>
                                <p>{time.hours}</p>
                                <div className="taxi__hours" >
                                {isHoursShow && 
                                    <React.Fragment>
                                        {hours.map(hour => <p id="hours" onClick={(e)=>{handleTime(e)}}>{hour}</p>)}
                                    </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsMinutesShow(!isMinutesShow)
                                    setIsHoursShow(false)
                                }}>
                                <p>{time.minutes}</p>
                                <div className="taxi__minutes">
                                    {isMinutesShow && 
                                        <React.Fragment>
                                            {minutes.map(minute => <p id="minutes" onClick={(e)=>{handleTime(e)}}>{minute}</p>)}
                                        </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <button>Confirm</button>
                        </div>}
                    <div className="taxi__field" onClick={()=>{setIsListShow(!isListShow)}} >
                        <FontAwesomeIcon icon={faUserAlt} />
                        <input type="text" placeholder="1" value={passagers}/>
                        <div className="taxi__field-controls">
                            <FontAwesomeIcon icon={faChevronUp} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        {isListShow && <div className="taxi__options">
                                            <p>Passagers</p>
                                            {options.map(option => <p onClick={(e)=>setPassagers(e.target.innerText)}>{option}</p>)}
                                        </div>
                        }
                    </div>
                    <button>Search</button>
                </div>
                     <div className="taxi__divider"></div>
                     <div className="taxi__one-way-serach">
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter pick-up location"/>
                    </div>
                    <div className="taxi__field">
                        <FontAwesomeIcon icon={faMap} />
                        <input type="text" placeholder="Enter destination"/>
                    </div>
                    <div className="taxi__field">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="taxi__field"  onClick={()=>{setIsTimeShow(!isTimeShow)}}>
                        <FontAwesomeIcon icon={faClock} />
                        <input type="text" placeholder="12:00" value={`${time.hours}:${time.minutes}`}/>
                    </div>
                    {isTimeShow && 
                        <div className="taxi__time-field">
                            <p className="taxi__time-title">Pick-up time</p> 
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsHoursShow(!isHoursShow)
                                    setIsMinutesShow(false)
                                }}>
                                <p>{time.hours}</p>
                                <div className="taxi__hours" >
                                {isHoursShow && 
                                    <React.Fragment>
                                        {hours.map(hour => <p id="hours" onClick={(e)=>{handleTime(e)}}>{hour}</p>)}
                                    </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className="taxi__small-field" 
                            onClick={(e)=>{
                                    setIsMinutesShow(!isMinutesShow)
                                    setIsHoursShow(false)
                                }}>
                                <p>{time.minutes}</p>
                                <div className="taxi__minutes">
                                    {isMinutesShow && 
                                        <React.Fragment>
                                            {minutes.map(minute => <p id="minutes" onClick={(e)=>{handleTime(e)}}>{minute}</p>)}
                                        </React.Fragment>}
                                </div>
                                <div className="taxi__time-controls">
                                    <FontAwesomeIcon icon={faChevronUp} />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <button>Confirm</button>
                        </div>}
                    <div className="taxi__field" onClick={()=>{setIsListShow(!isListShow)}} >
                        <FontAwesomeIcon icon={faUserAlt} />
                        <input type="text" placeholder="1" value={passagers}/>
                        <div className="taxi__field-controls">
                            <FontAwesomeIcon icon={faChevronUp} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        {isListShow && <div className="taxi__options">
                                            <p>Passagers</p>
                                            {options.map(option => <p onClick={(e)=>setPassagers(e.target.innerText)}>{option}</p>)}
                                        </div>
                        }
                    </div>
                    <button>Search</button>
                </div>
                   </div> 
                }
            </form>
        </div>
    )
}

export default TaxiSearch
