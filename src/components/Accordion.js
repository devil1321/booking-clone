import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp} from '@fortawesome/free-solid-svg-icons'
import Link from 'gatsby-link'
const Accordion = ({icon,heading,text,link,href,isFunctional}) => {
    const [isOpen,setIsOpen] = useState(false) 
    return (
        <div className="accordion">
            <div className="accordion__heading" onClick={()=>{
                if(isFunctional){
                    setIsOpen(!isOpen)
                    }
                }}>
                <div className="accordion__heading-text">
                    <svg  id="info-icon" class="bk-icon -streamline-info_sign" fill="#923e01" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                    <img src={icon} />
                    <h3>{heading}</h3>
                </div>
                {isFunctional &&
                <React.Fragment>
                    {!isOpen && <FontAwesomeIcon icon = {faAngleDown} />}
                    {isOpen && <FontAwesomeIcon icon = {faAngleUp} />}
                </React.Fragment>
                }
            </div>
            {isOpen && <div className="accordion__text">
                            {text}
                            <Link to="#">Read more</Link>
                        </div>
            }
        </div>
    )
}

export default Accordion
