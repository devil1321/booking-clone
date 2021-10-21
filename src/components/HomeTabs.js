import React,{useEffect,useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
const HomeTabs = () => {
    const data = useStaticQuery(graphql`
    {
      allRestaurants {
        nodes {
          location_id
          name
        }
      }
      allHotels {
        nodes {
          name
          location_id
        }
      }
      allLocations(filter: {name: {regex: "/Pattaya/"}}) {
        nodes {
          location_id
          name
        }
      }
    }
  `)

  const isLocShow = () =>{
      setLocationShow(true)
      setHotelsShow(false)
      setRestaurantsShow(false)
  }
  const isHotShow = () =>{
    setLocationShow(false)
    setHotelsShow(true)
    setRestaurantsShow(false)
  }
  const isResShow = () =>{
    setLocationShow(false)
    setHotelsShow(false)
    setRestaurantsShow(true)
  }
  const setActive = (e) =>{
    const navBtns = document.querySelectorAll('.home-tabs__title')
    navBtns.forEach(btn=>{
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  const [locationShow,setLocationShow] = useState(true)
  const [hotelsShow,setHotelsShow] = useState(false)
  const [restaurantsShow,setRestaurantsShow] = useState(false)

  const locations = data.allLocations.nodes
  const hotels = data.allHotels.nodes
  const restaurants = data.allRestaurants.nodes

    return (
        <div className="home-tabs">

            <div className="home-tabs__group-t">
                <div onClick={(e)=>{
                  setActive(e)
                  isLocShow()
                  }} className="home-tabs__title active">Regions</div>
                <div onClick={(e)=>{
                  setActive(e)
                  isHotShow()
                  }} className="home-tabs__title">Cities</div>
                <div onClick={(e)=>{
                  setActive(e)
                  isResShow()
                  }} className="home-tabs__title">Places of interest</div>
            </div>

            <div className="home-tabs__group">
                {locationShow && <div className="home-table__locations">
                    {locations.map(location =>{
                        const {location_id , name} = location
                        return <Link to="" key={location_id}>{name},</Link>
                    })}
                </div>
                }

                {hotelsShow && <div className="home-table__hotels" >
                    {hotels.map(hotel =>{
                        const {location_id , name} = hotel
                        return <Link to="" key={location_id}>{name},</Link>
                    })}
                </div>
                }
                {restaurantsShow && <div className="home-table__restaurants" >
                    {restaurants.map(restaurant =>{
                        const {location_id , name} = restaurant
                        return <Link to="" key={location_id}>{name},</Link>
                    })}
                </div>
                }
            </div>
        </div>
    )
}

export default HomeTabs
