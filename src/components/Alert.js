import React,{useState} from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Alert = ({icon,home,title,text,link,href,close}) => {
    const [isClosed,setIsClosed] = useState(false)
    return (
        <React.Fragment>
        {!isClosed &&
        <div className="alert">
            <div className="alert__text">
                {home ? <svg class="bk-icon -iconset-logo_deal_badge midyeardeals-icon" height="36" width="36" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zM41 80c0-4.4 3.1-8 7-8s7 3.6 7 8-3.1 8-7 8-7-3.6-7-8zm18.5 23.6A4 4 0 0 1 54 105a4 4 0 0 1-1.4-5.5l18-30.1A4 4 0 0 1 76 68a4 4 0 0 1 1.4 5.5zm20.5.4c-3.9 0-7-3.6-7-8s3.1-8 7-8 7 3.6 7 8-3.1 8-7 8zm12-4.2V52.3a9.7 9.7 0 0 0-2.7-6.3l-6-5.5a24.6 24.6 0 0 1-9 7.2A10.5 10.5 0 1 1 53.4 50a10.4 10.4 0 0 1 .3-2.3A10.5 10.5 0 0 1 64 39.5a14 14 0 0 0 11.6-6.2l-6.2-5.7a8.1 8.1 0 0 0-10.8 0L38.7 46a9.7 9.7 0 0 0-2.7 6.3v47.5a45.4 45.4 0 0 1 7.2-76.2 19.2 19.2 0 0 0-.2 1.9 20.9 20.9 0 0 0 2.3 9.6l2.7-2.5A17.4 17.4 0 0 1 46.9 22v-.2a45.4 45.4 0 0 1 34.2 0v.2a17.5 17.5 0 0 1-13.6 20.6L64 43a7 7 0 0 0-5.5 2.7A21 21 0 0 0 85 25.5a19.2 19.2 0 0 0-.2-2A45.4 45.4 0 0 1 92 99.9z"></path></svg> : null }
                {icon ? <img src={icon} />: null}
                {title ? <h2>{title}</h2> : null}
                {text}
                <Link to={href}>{link}</Link>
            </div>
            <div className="alert__close" onClick={()=>setIsClosed(true)}>
                <span></span>
                <span></span>
            </div>
        </div>}
        </React.Fragment>
    )
}

export default Alert
