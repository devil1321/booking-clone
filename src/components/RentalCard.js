import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
const RentalCard = ({img,name,carPrice,rentalStart,rentalEnd}) => {
    return (
        <div className="rentals__card">
            <div className="rentals__card-image">
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
            <div className="rentals__card-text">
                <h3>{name}</h3>
                <div className="rentals__card-body">
                    <FontAwesomeIcon icon={faCarSide} size="2x" />
                    <p>Price: {carPrice}$</p>
                </div>
                <p>From <span>{rentalStart}</span> to <span>{rentalEnd}</span></p>
            </div>
        </div>
    )
}

export default RentalCard
