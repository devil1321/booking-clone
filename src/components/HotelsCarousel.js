import React,{useState,useEffect,useRef} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
const HotelsCarousel = () => {
    const [hotels,setHotels] = useState([]) 
    const [move,setMove] = useState(0)
    const [count,setCount] = useState(0)
    const data = useStaticQuery(graphql`
    {
      allHotels(limit: 10) {
        edges {
          node {
            id
            is_closed
            name
            photo {
              images {
                large {
                  url
                }
                medium {
                  url
                }
                original {
                  url
                }
                small {
                  url
                }
                thumbnail {
                  url
                }
              }
            }
            price
            price_level
            ranking
            ranking_category
            ranking_position
            rating
            timezone
            latitude
            longitude
            checkin
            checkout
          }
        }
      }
    }
  `)
   const carRef = useRef()
   const carItemRef = useRef()

   useEffect(()=>{
        let max = [...document.querySelectorAll('.hotels-c__item')]
        if(count > max.length - 3){
          setMove(0)
          setCount(0)
        }
        if(count < 0){
          setMove(move - (max.length * (carItemRef.current.clientWidth - 20)))
          setCount(max.length - 1)
        }
        carRef.current.style.transform = `translateX(${move}px)`
        setHotels(data.allHotels.edges)
   },[data,hotels,move,count])
    return (
        <div className="hotels-c">
            <h2 className="h2-title">Homes guests love</h2>
            <div className="hotels-c__next control" onClick={()=>{
                setMove(move - (carItemRef.current.clientWidth + 20))
                setCount(count + 1)
              }}>
              <FontAwesomeIcon icon={faChevronRight}/>
            </div>
            <div className="hotels-c__prev control" onClick={()=>{
                setMove(move + (carItemRef.current.clientWidth + 20))
                setCount(count - 1)
              }}>
              <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <div className="hotels-c__carousel-wrapper">
              <div className="hotels-c__carousel" ref={carRef}>
                  {hotels.map(hotel=>{
                      const { id, name, price, ranking, rating, timezone , photo } = hotel.node
                      if(photo === null){
                          return
                      }else{
                          return (
                              <div className="hotels-c__item" ref={carItemRef} key={id}>
                                  <div className="hotels-c__item-overlay"></div>
                                  <div className="hotels-c__image">
                                      <img src={photo.images.large.url}/>
                                  </div>
                                  <div className="hotels-c__item-text">
                                      <h2>{name}</h2>
                                      <div className="hotels-c_item-t-group">
                                          <h3>Price : <span className="badge-blue">{price}</span></h3>    
                                          <h3>Rating : <span className="badge-orange">{rating}</span></h3>
                                      </div>
                                      <h3 className="ranking">{ranking}</h3>
                                      <h3>{timezone}</h3>
                                  </div>
                              </div>
                              )
                      }
                  })}
              </div>
            </div>
        </div>
    )
}


export default HotelsCarousel
