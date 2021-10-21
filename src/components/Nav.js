import React,{useState,useEffect,useCallback} from 'react'
import NavSlider from './NavSlider'
const Nav = () => {

    const [isSmall,setIsSmall] = useState(null)
    const [size,setSize] = useState(null)

    useEffect(()=>{
        if(size === null){
            const body = document.querySelector('body')
            setSize(body.clientWidth)
        }
        window.addEventListener("resize", () => {
            setSize(window.screen.width);
        })
        if(size > 768){
            setIsSmall(false)
        }else if(size < 768){
            setIsSmall(true)
        }   
        return () => {
            window.removeEventListener("resize", () => {});
        };
    },[isSmall,size])

    return (
        <div className="nav">
            <div className="nav__header">
                {!isSmall && 
                <div className="nav__lg">
                    <div className="nav__logo-lg">Booking<span>.com</span></div>
                    <div className="nav__group-lg">
                        <h3>PLN</h3>
                        <div className="nav__lang">
                            <img src="/lang-pl.png"/>   
                        </div>
                        <svg className="bk-icon -streamline-question_mark_circle" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                        <button className="btn-outline">List your property</button>
                        <button className="btn-white">Register</button>
                        <button className="btn-white">Sign In</button>
                    </div>
                </div>
                }
                {isSmall && 
                <div className="nav__sm">
                    <div className="nav__logo">Booking<span>.com</span></div>
                    <div className="nav__sm-group">
                        <svg className="bk-icon -streamline-question_mark_circle" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                        <div className="nav__sm-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                }
            </div>
            <NavSlider />
        </div>
    )
}

export default Nav
