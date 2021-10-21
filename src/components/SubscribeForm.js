import React from 'react'

const SubscribeForm = () => {
    return (
        <div className="contact">
            <h2 className="h2-title">Save time, save money!</h2>
            <p>Sign up and we'll send the best deals to you</p>
            <form action="" className="contact__form">
                <div className="contact__form-control">
                    <input type="text" placeholder="Your email"/>
                    <button type="submit">SUBSCRIBE</button>
                </div>
                <div className="contact__form-checkbox">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Send me a link to get the FREE Booking.com app!</label>
                </div>
            </form>
        </div>
    )
}

export default SubscribeForm
