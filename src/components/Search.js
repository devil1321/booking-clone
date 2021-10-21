import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [formData,setFormData] = useState({
            cel:'',
            data1:'',
            data2:'',
            zameldowanie:'',
            wymeldowanie:'',
            dorosli:2,
            dzieci:0,
            pokoje:1
        })
    const [showList,setShowList] = useState(false)
    const [showMultiple,setShowMultiple] = useState(false)
    const [isDisabledDorosli,setIsDisabledDorosli] = useState(false)
    const [isDisabledDzieci,setIsDisabledDzieci] = useState(false)
    const [isDisabledPokoje,setIsDisabledPokoje] = useState(false)

    // form functions
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }
    const handleChange = (e) =>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const handleDororsliInc = () =>{
        setFormData(prevState => ({
            ...prevState,
            dorosli:formData.dorosli + 1 
        }))
    }
    const handleDororsliDec = () =>{
        setFormData(prevState => ({
            ...prevState,
            dorosli:formData.dorosli - 1 
        }))
    }
    const handleDzieciInc = () =>{
        setFormData(prevState => ({
            ...prevState,
            dzieci:formData.dzieci + 1 
        }))
    }
    const handleDzieciDec = () =>{
        setFormData(prevState => ({
            ...prevState,
            dzieci:formData.dzieci - 1 
        }))
    }
    const handlePokojeInc = () =>{
        setFormData(prevState => ({
            ...prevState,
            pokoje:formData.pokoje + 1 
        }))
    }
    const handlePokojeDec = () =>{
        setFormData(prevState => ({
            ...prevState,
            pokoje:formData.pokoje - 1 
        }))
    }
    useEffect(()=>{
        if(formData.dorosli === 0){ 
            setIsDisabledDorosli(true)
        }else{
            setIsDisabledDorosli(false)
        }
        if(formData.dzieci === 0){ 
            setIsDisabledDzieci(true)
        }else{
            setIsDisabledDzieci(false)
        }
        if(formData.pokoje === 0){ 
            setIsDisabledPokoje(true)
        }else{
            setIsDisabledPokoje(false)
        }
    },[formData])
    return (
        <div className="search">
            <div className="search__heading">
                <h1>Find deals on hotels, homes and much more...</h1>
                <p>From cosy country homes to funky city flats</p>
            </div>
        
                <form className="search__form" action="" onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
                <div className="search__form-wrapper">
                    <div className="search__field col-1">
                        <FontAwesomeIcon icon={faBed} />
                        <input type="text" name="cel-podrozy" onChange={(e)=>handleChange(e)} placeholder="Where are you going?"/>
                    </div>
                    <div className="search__date">
                        <div className="search__field col-2 date-1" >
                            <input type="date" name="date-1" id="zameldowanie"  onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="search__line"></div>
                        <div className="search__field col-2 date-2">
                            <input type="date" name="date-2" id="wymeldowanie"  onChange={(e)=>handleChange(e)} />
                        </div>
                    </div>
                    <div className="search__field col-4">
                        <FontAwesomeIcon className="person" icon={faChild} />
                        <div className="search__field-multiple">
                            <div>{formData.dorosli} adults</div>
                            <div className="search__dot"></div>
                            <div>{formData.dzieci} children</div>
                            <div className="search__dot"></div>
                            <div>{formData.pokoje} room</div>
                        </div>
                        <div className="search__icons-group" onClick={()=>{setShowMultiple(!showMultiple)}}>
                            <FontAwesomeIcon icon={faAngleUp} />
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        {showMultiple && <div className="search__multiple">
                                            <div className="search__multiple-row">
                                                <p>Adults</p>
                                                <div className="search__multiple-controls">
                                                    <div className={`btn-control ${isDisabledDorosli ? "disabled" : ""}`} onClick={()=>handleDororsliDec()}>-</div>
                                                    <div className="value">{formData.dorosli}</div>
                                                    <div className={`btn-control`} onClick={()=>handleDororsliInc()}>+</div>
                                                </div>
                                            </div>
                                            <div className="search__multiple-row">
                                                <p>Children</p>
                                                <div className="search__multiple-controls">
                                                    <div className={`btn-control ${isDisabledDzieci ? "disabled" : ""}`} onClick={()=>handleDzieciDec()}>-</div>
                                                    <div className="value">{formData.dzieci}</div>
                                                    <div className={`btn-control`} onClick={()=>handleDzieciInc()}>+</div>
                                                </div>
                                            </div>
                                            <div className="search__multiple-row">
                                                <p>Rooms</p>
                                                <div className="search__multiple-controls">
                                                    <div className={`btn-control ${isDisabledPokoje ? "disabled" : ""}`} onClick={()=>handlePokojeDec()}>-</div>
                                                    <div className="value">{formData.pokoje}</div>
                                                    <div className={`btn-control`} onClick={()=>handlePokojeInc()}>+</div>
                                                </div>
                                            </div>
                                        </div>}
                    </div>
                    <button className="search__btn-submit">Search</button>
                    </div>
                    <div className="search__checkbox">
                            <input type="checkbox" name="praca" id="checkbox" />
                            <label htmlFor="chechbox">I'm travelling for work</label>
                        </div>
                </form>
            </div>

    )
}

export default Search
