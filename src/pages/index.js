import React,{useState,useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

import Accordion from '../components/Accordion'
import Search from '../components/Search'
import Alert from '../components/Alert'
import SubscribeAlert from '../components/SubscribeAlert'
import SubscribeForm from '../components/SubscribeForm'
import PropertyList from '../components/PropertyList'
import HotelCarousel from '../components/HotelsCarousel'
import HomeTabs from '../components/HomeTabs'
import Footer from '../components/Footer/Footer'

const IndexPage = ({data}) => {

  const [locations,setLocations] = useState([])
  const [isClosed,setIsClosed] = useState(false)
  const [pages,setPages] = useState([])
  const [pagination,setPagination] = useState([])
  const [isSet,setIsSet] = useState(false)
  const [isSetPages,setIsSetPages] = useState(false)

  const slideV = () =>{
    if(isClosed === false){
      var slideCount = 0
      var slideMove = 0
      var slidesDOM = document.querySelector('.home__feature-group-s')
      var start = setInterval(()=>{
        if(slideCount <= 5 ){
          slideMove += 100 / 6
          slideCount += 1
          slidesDOM.style.transition = 'all 1s ease-in-out'
          slidesDOM.style.transform =`translateY(-${slideMove}%)`
        }
        if(slideCount > 5){
          slideCount = 0
          slideMove = 0
          slidesDOM.style.transition = 'none'
          slidesDOM.style.transform =`translateY(${0}px)`
        }
      },3000)
    }else{
      clearInterval(start)
    }
  }

  const setPagesToSix = (index) =>{
    switch(index){
      case 1:
        setPages(locations.slice(0,5))
        break
      case 2:
        setPages(locations.slice(5,10))
        break
      case 3:
        setPages(locations.slice(10,15))
        break
      case 4:
        setPages(locations.slice(15,20))
        break
      case 5:
        setPages(locations.slice(20,25))
        break
      case 6:
        setPages(locations.slice(25,30))
        break
      default:
        setPages(locations.slice(0,5))
        break
    }
  }

  const setPaginationItems = (max)=>{
    let items = []
    for(let i = 1 ; i < max; i++){
      items.push(i)
    }
    setPagination(items)
  }
  const setActive = (e) =>{
    const navBtns = document.querySelectorAll('.home__pagination')
    navBtns.forEach(btn=>{
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  useEffect(() => {
    if(!isSet){
      setPaginationItems(6)
      setIsSet(true)
    }
    if(isSet && !isSetPages){
      setPagesToSix(1)
      setIsSetPages(true)
    }
    slideV()
    console.log(pages)
    setLocations(data.allLocations.nodes)
  }, [locations,isClosed,isSet,pagination,pages])

  return(
  <Layout className="home">
    <Seo title="Home" />
    <Accordion isFunctional={true} heading="Coronavirus (COVID-19) Support" text="Please check for travel restrictions. Travel may be permitted only for certain purposes and in particular, touristic travel may not be allowed."/>
    <Search />
    <div className="main">
      <Alert home text={'Score huge savings worldwide.'} link={'Search today\'s deals'} href={"#"}/>
      <HotelCarousel />

      <div className="home__feature-wrapper-1">
          <h2 className="h2-title">Get inspiration for your next trip</h2>
          <div className="home__feature-1">
              {locations.slice(2,5).map(location =>{
                const {id,name, num_reviews , photo,location_id} = location
                if(photo === null){
                  return
                }else{
                  return(
                    <div key={id} className="home__feature-item grid-1">
                          <Link to={"/details/" + location_id}>
                            <div className="home__feature-image">
                              <div className="overlay"></div>
                              <img src={photo.images.large.url} alt="" />
                            </div>
                          </Link>
                      <div className="home__feature-text">
                        <h2>{name}</h2>
                        <h3>Reviews : {num_reviews}</h3>
                      </div>
                    </div>
                    )
                  }
              })}
          </div>
      </div>
      <div className="home__feature-wrapper-2">
          <div className="home__feature-2">
          {locations.slice(5,7).map(location =>{
            const {id,name, num_reviews , photo} = location
            if(photo === null){
              return
            }else{
              return(
                <div key={id} className="home__feature-item grid-2">
                  <div className="home__feature-image">
                  <div className="overlay"></div>
                    <img src={photo.images.large.url} alt="" />
                  </div>
                  <div className="home__feature-text">
                    <h2>{name}</h2>
                    <h3>Reviews : {num_reviews}</h3>
                  </div>
                </div>
                )
              }
          })}
        </div>
      </div>
      <div className="home__feature-wrapper-3">
        <h2 className="h2-title">Connect with other travellers</h2>
          <div className="home__feature-3">
            {locations.slice(10,14).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-3">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>

      <div className="home__feature-wrapper-4">
        <h2 className="h2-title">Connect with other travellers</h2>
          <div className="home__feature-4">
            {locations.slice(18,20).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-4">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>

      <div className="home__feature-wrapper-5">
          <div className="home__feature-5">
            {locations.slice(21,24).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-5">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>
   
      <div className="home__feature-wrapper-6">
        <h2 className="h2-title">Explore Asia</h2>
        <p>These popular destinations have a lot to offer</p>
          <div className="home__feature-6">
            {locations.slice(25,31).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-6">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>
      
      <SubscribeAlert />

      <div className="home__feature-wrapper-7">
        <h2 className="h2-title">Browse by location</h2>
          <div className="home__feature-7">
            {locations.slice(5,10).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-7">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>

        {!isClosed && 
        <div className="home__feature-wrapper-8">
          <div className="home__feture-circle-yellow"></div>
          <div className="home__feture-circle-blue"></div>
          <img src="/next-trip.png" alt="" />

          <div className="home__feature-group">
            <span>Find</span>
            <div className="home__feature-group-c">
              <div className="home__feature-group-s">
                <p className="slideDOM">homes</p>
                <p className="slideDOM">apartaments</p>
                <p className="slideDOM">villas</p>
                <p className="slideDOM">aparthotels</p>
                <p className="slideDOM">holiday homes</p>
                <p className="slideDOM">homes</p>
              </div>
            </div>
            <p>for your next trip</p>
            <button className="btn">Discover Home</button>
          </div>

          <div className="home__feature-close" onClick={()=>setIsClosed(true)}>
                <span></span>
                <span></span>
            </div>
        </div>}

        <div className="home__feature-wrapper-9">
        <h2 className="h2-title">Browse by location</h2>
          <div className="home__feature-9">
            {locations.slice(10,14).map(location =>{
              const {id,name, num_reviews , photo} = location
              if(photo === null){
                return
              }else{
                return(
                  <div key={id} className="home__feature-item grid-9">
                    <div className="home__feature-image">
                      <div className="overlay"></div>
                      <img src={photo.images.large.url} alt="" />
                    </div>
                    <div className="home__feature-text">
                      <h2>{name}</h2>
                      <h3>Reviews : {num_reviews}</h3>
                    </div>
                  </div>
                  )
                }
            })}
          </div>
        </div>
        <HomeTabs />

        <div className="home__discover">
          <h2 className="h2-title">Discover</h2>
          <div className="home__discover-heading">
            {pagination.map(page => {
              if(page == 1){
                return <div key={page} className="home__pagination active" onClick={(e)=>{
                  setPagesToSix(page)
                  setActive(e)
                  }}>{page}</div>
              }else{
               return <div key={page} className="home__pagination" onClick={(e)=>{
                 setPagesToSix(page)
                 setActive(e)
                 }}>{page}</div>
              }
            })}
            <div className="home__pagination">More Items...</div>            
          </div>
          <div className="home__discover-items">
            {pages.map(page=>{
              const {id,name, photo, timezone} = page
              return <div className="home__discover-item" key={id}>
                        <div className="home__discover-item-heading">{timezone}</div>
                        <div className="home__discover-item-image">
                          <img src={photo.images.original.url} alt="" />
                        </div>
                        <p>{name}</p>
                     </div>
            })}
          </div>
        </div>
        <SubscribeForm />
        <PropertyList />
    </div>
    <Footer />
  </Layout>
  )
}

export const query = graphql`
  {
    allLocations(filter: {name: {regex: "/Pattaya/"}}) {
      nodes {
        location_id
        id
        name
        timezone
        num_reviews
        web_url
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
      }
    }
  }
  `
export default IndexPage
