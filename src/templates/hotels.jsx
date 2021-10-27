import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import * as searchActions from '../APIController/actions/searchActions'
const Hotels = ({pageContext}) => {
    const { location_id } = pageContext
    console.log(location_id)
    const { search } = useSelector(state => state)
    console.log(search)
    const [hotels,setHotels] = useState(null)
    const [isFetched,setIsFetched] = useState(false)

    const fetchHotels = async(id) =>{
        const optionsHotel = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
            params: {
                location_id: id,
                adults: '1',
                rooms: '1',
                nights: '2',
                offset: '0',
                currency: 'USD',
                order: 'asc',
                limit: '30',
                sort: 'recommended',
                lang: 'en_US'
            },
            headers: {
                'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
        const fetchHotel = () => axios.request(optionsHotel);
        const resHotel = await fetchHotel()
        
        const randomDate = (start, end) => {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        // Math.ceil prevents the value from being 0;
        let month = Math.ceil(Math.random() * 12);
        let day = Math.ceil(Math.random() * 28);
        let year = 2021;

        //this ensures that the format will stay mm/dd/yyyy;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        //concatenates random dob in mm/dd/yyyy format;
        let dob = month + "/" + day + "/" + year;
        

        let checkin = randomDate(new Date(2021, 0, 1), new Date(dob))
        let checkout = randomDate(new Date(2021, 0, 2), new Date(dob))

        while (checkin.getTime() > checkout.getTime()) {
            checkout = randomDate(new Date(2012, 0, 2), new Date(dob))
        }
        console.log('hotels',resHotel.data.data)
        if(!resHotel['data']['errors']){
            let hotels = []
            resHotel.data.data.forEach(hotel =>{
                const newHotel = Object.assign({},hotel,checkin,checkout)
                hotels.push(newHotel)
            }) 
            console.log('HOTELS',hotels)
            setHotels(hotels)
        }
    }

    useEffect(()=>{
        if(!isFetched){
            fetchHotels(location_id)
            setIsFetched(true)
        }
        console.log(hotels)
    },[isFetched,hotels])
    return (
        <div>
            hhh
        </div>
    )
}


export default Hotels
