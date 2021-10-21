import React,{useState} from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AccordionItem = ({title,body}) =>{
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className="accordion-ext__item">
           <div className="accordion-ext__heading" onClick={()=>{setIsOpen(!isOpen)}}>
              <h2>{title}</h2>
              {isOpen 
                  ? <FontAwesomeIcon icon={faChevronUp} />
                  : <FontAwesomeIcon icon={faChevronDown} />
              }
           </div>
          {isOpen && <div className="accordion-ext__body" >{body}</div>}
        </div>
    )
}

const AccordionExtentend = ({description,subtitle,content,link,href}) => {

    return (
        <div className="accordion-ext">
            <div className="accordion-ext__left-content">
                <h2 className="accordion-ext__title">{description}</h2>
                {subtitle ? <p>{subtitle} {link ? <Link to={href}>{link}</Link> : null}</p> : null}
            </div>
            <div className="accordion-ext__group">
                    {content.map(item=> {
                        const {title,body} = item.node
                        return <AccordionItem title={title} body={body}/>
                    })}
            </div>
        </div>
    )
}

export default AccordionExtentend
