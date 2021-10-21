import React,{useState,useEffect} from 'react'
import Layout from '../components/layout.js'
import Accordion from '../components/Accordion'
import AttractionsSearch from '../components/AttractionsSearch'
import Jumbotron from '../components/Jumbotron'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
const Attractions = ({data}) => {
    const locations = data.allLocations.nodes
    const [cities,setCities] = useState(['Pattaya','Warsaw','London','New York','Berlin','Rotterdam','Buenos Aires','Sydney'])
    const [search,setSearch] = useState('Pattaya')
    const [locationsCP,setLocationsCP] = useState(locations)
    const [isSet,setIsSet] = useState(false)

    const handleActive = (e) => {
        let categories = document.querySelectorAll('.attractions__nav-item')
        categories.forEach(item => item.classList.remove('active'))
        e.target.classList.add('active')
    }
    
    const handleLocation = () =>{
        let matches = locations.filter(location => location.name.includes(search))
        setLocationsCP(matches)
    }

    useEffect(()=>{
        handleLocation()
        if(!isSet && locations.lentgh > 0){
            setLocationsCP(locations)
            setIsSet(true)
        }
    },[search,isSet,locations])

    return (
        <Layout className="attractions">
            <Accordion isFunctional={true} heading="Coronavirus (COVID-19) Update" text="Please check local guidelines before planning your visit."/>
            <AttractionsSearch />         
            <div className="attractions__top">
                <h2>Top destinations</h2>
                {locations.slice(23,26).map(location => {
                    let fakeThings = Math.random() * 130
                    fakeThings = fakeThings.toFixed(0)
                    return  <div className="attractions__top-item">
                                <img src={location.photo.images.original.url} alt="" />
                                <div className="attractions__top-item-text">
                                    <h3>{location.name}</h3>
                                    <p>{fakeThings} things to do</p>
                                </div>
                            </div>
                    
                })}
            </div>
            
            <Jumbotron title="Sign in to save time" text="Your Booking.com account lets you book using your saved details" link="Sign in" href="#"/>
            <div className="attractions__covered-group">
                <div className="attractions__covered-item">
                    <svg viewBox="0 0 24 24" focusable="false" role="img" aria-hidden="true"><path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM21 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-9-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm10.066 1.277a7.5 7.5 0 0 1-3.077 2.05.75.75 0 0 0 .498 1.415 9 9 0 0 0 3.693-2.46.75.75 0 1 0-1.114-1.005zm1.798-6.466c.177.922.183 1.869.015 2.792a.75.75 0 1 0 1.476.268c.2-1.106.194-2.24-.019-3.344a.75.75 0 1 0-1.472.284zm-5.337-5.784a7.5 7.5 0 0 1 3.54 2.196.75.75 0 0 0 1.113-1.004 9.002 9.002 0 0 0-4.247-2.636.75.75 0 1 0-.406 1.444zM6.434 6.223a7.5 7.5 0 0 1 3.539-2.196.75.75 0 1 0-.406-1.444A9.001 9.001 0 0 0 5.32 5.219a.75.75 0 0 0 1.114 1.004zM4.636 12.69a7.602 7.602 0 0 1 0-2.878.75.75 0 1 0-1.472-.284 9.102 9.102 0 0 0 0 3.446.75.75 0 0 0 1.472-.284zm4.876 5.639a7.517 7.517 0 0 1-3.035-2.005.75.75 0 0 0-1.106 1.014 9.017 9.017 0 0 0 3.641 2.405.75.75 0 1 0 .5-1.414zM7.31 21.872A1.5 1.5 0 0 0 8.672 24h6.656a1.5 1.5 0 0 0 1.362-2.128l-3.314-8.217c-.361-.785-1.252-1.114-2.005-.767a1.5 1.5 0 0 0-.733.734l-3.343 8.283zm1.377.595l3.328-8.25-.015.033 3.313 8.217.015.033H8.672z"></path></svg>
                    <div className="attractions__covered-item-text">
                        <h3>Explore top attractions</h3>
                        <p>Experience the best of your destination, with attractions, tours, activities and more</p>
                    </div>
                </div>
                <div className="attractions__covered-item">
                    <svg viewBox="0 0 24 24" focusable="false" role="img" aria-hidden="true"><path d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.905 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.906-3.874a.75.75 0 0 0-1.2-.9zM8.25 16.5h-6a.75.75 0 0 1-.75-.75V3.765a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V8.25a.75.75 0 0 0 1.5 0V3.765a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 3.765V15.75A2.25 2.25 0 0 0 2.25 18h6a.75.75 0 0 0 0-1.5zm-7.5-9h16.5V6H.75v1.5zm5.243-3.75v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm7.5 0v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></path></svg>
                    <div className="attractions__covered-item-text">
                        <h3>Fast and flexible</h3>
                        <p>Book tickets online in minutes, with free cancellation on many attractions</p>
                    </div>
                </div>
                <div className="attractions__covered-item">
                    <svg viewBox="0 0 24 24" focusable="false" role="img" aria-hidden="true"><path d="m 14.44 15 c 0.225 -0.239 0.225 -0.611 0 -0.85 a 0.58 0.58 0 0 0 -0.83 0 c -0.367 0.33 -0.847 0.506 -1.34 0.49 c -0.493 0.016 -0.973 -0.16 -1.34 -0.49 a 0.58 0.58 0 0 0 -0.83 0 c -0.23 0.237 -0.23 0.613 0 0.85 c 0.58 0.57 1.367 0.88 2.18 0.86 c 0.806 0.015 1.585 -0.295 2.16 -0.86 z m 7.17 -6.49 c -0.073 -0.005 -0.147 -0.005 -0.22 0 L 21.25 8.19 C 19.245 3.091 13.487 0.583 8.388 2.588 C 5.716 3.638 3.631 5.795 2.67 8.5 H 2.39 a 2.16 2.16 0 0 0 -2.16 2.17 v 2.82 a 2.16 2.16 0 0 0 4.32 0 v -2.82 C 4.538 10.153 4.343 9.657 4 9.27 A 8.41 8.41 0 0 1 19.85 8.82 l 0.17 0.39 c -0.388 0.386 -0.601 0.913 -0.59 1.46 v 2.82 c 0.002 0.466 0.157 0.92 0.44 1.29 c -0.898 2.406 -2.847 4.27 -5.29 5.06 a 2.63 2.63 0 0 0 -4.715 2.332 A 2.63 2.63 0 0 0 14.83 21.35 c 2.86 -0.875 5.18 -2.985 6.32 -5.75 c 0.145 0.032 0.292 0.049 0.44 0.05 c 1.193 0 2.16 -0.967 2.16 -2.16 v -2.82 c 0 -1.185 -0.955 -2.149 -2.14 -2.16 z m -18.56 5 a 0.66 0.66 0 0 1 -1.32 0 v -2.84 a 0.66 0.66 0 0 1 1.32 0 z m 9.2 8.65 a 1.13 1.13 0 0 1 0 -2.26 c 0.613 0 1.114 0.488 1.13 1.1 c 0 0.626 -0.504 1.135 -1.13 1.14 z m 10 -8.65 a 0.66 0.66 0 0 1 -1.32 0 v -2.84 a 0.67 0.67 0 0 1 0.66 -0.66 c 0.365 0 0.66 0.295 0.66 0.66 z M 7.33 8.88 C 7.12 9.09 7.002 9.374 7 9.67 c 0.002 0.224 0.068 0.443 0.19 0.63 c 0.124 0.186 0.302 0.329 0.51 0.41 c 0.205 0.088 0.431 0.112 0.65 0.07 c 0.215 -0.049 0.412 -0.156 0.57 -0.31 C 9.08 10.313 9.188 10.11 9.23 9.89 C 9.27 9.672 9.25 9.447 9.17 9.24 A 1.13 1.13 0 0 0 7.33 8.88 z m 7.88 0 c -0.381 0.379 -0.44 0.974 -0.14 1.42 c 0.254 0.374 0.705 0.562 1.15 0.48 c 0.219 -0.046 0.42 -0.153 0.58 -0.31 c 0.153 -0.16 0.258 -0.362 0.3 -0.58 C 17.14 9.668 17.106 9.44 17 9.24 C 16.916 9.036 16.773 8.862 16.59 8.74 C 16.414 8.626 16.21 8.56 16 8.55 c -0.297 0 -0.581 0.119 -0.79 0.33 z"></path></svg>
                    <div className="attractions__covered-item-text">
                        <h3>Support when you need it</h3>
                        <p>Booking.com's global Customer Service team is here to help 24/7</p>
                    </div>
                </div>
            </div>
            
            <div className="attractions__nav-wrapper">
                <h2>Explore more destinations</h2>
                <p>Find things to do in cities around the world</p>
                <div className="attractions__nav">
                    {cities.map((city,index) => <span 
                        onClick={(e)=>{
                            setSearch(e.target.innerText)
                            handleActive(e)
                        }} 
                        className={`attractions__nav-item ${index === 0 ? `active` : ``}`}>{city}</span>)}
                </div>
            </div>
            <div className="attractions__main-group">
                {locationsCP.map(location => {
                    let fakeThings = Math.random() * 200
                    fakeThings = fakeThings.toFixed(0)

                    return <React.Fragment>
                           {location
                                ? <div className="attractions__attraction-item">
                                    <img src={location.photo.images.original.url} alt="" />
                                    <div className="attractions__attraction-text">
                                        <h3>{location.name}</h3>
                                        <p>{fakeThings} things to do</p>
                                    </div>
                                    </div>
                                : null
                            }
                            </React.Fragment>
                })}
            </div>


            <div className="attractions__footer-header">
                <Link to="#">About Booking.com</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Privacy & Cookie Statement</Link>
                <Link to="#">Attractions help centre</Link>
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allLocations {
      nodes {
        name
        photo {
          images {
            original {
              url
            }
          }
        }
      }
    }
  }
  `

export default Attractions
