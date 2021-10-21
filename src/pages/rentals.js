import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import RentalsSearch from '../components/RentalsSearch'
import Alert from '../components/Alert'
import RentalCard from '../components/RentalCard'
import AccordinonExtendend  from '../components/AccordionExtentend'
import SubscribeForm from '../components/SubscribeForm'
import PropertyList from '../components/PropertyList'
import Footer from '../components/Footer/Footer'
import { graphql } from "gatsby"

const Rentals = ({data}) => {
    const limitedToSix = data.limitedToSix.nodes
    const limitedToTweleve = data.limitedToTweleve.nodes

    const acorriodionNodes = [
      {
        node:{
          title:"What do I need to rent a car?",
          body:<div>
                  <p>When you’re booking the car, you just need a debit or credit card.</p>
                  <p>At the rental counter, you’ll need:</p>
                  <ul>
                    <li>Your passport</li>
                    <li>Your voucher</li>
                    <li>Each driver’s driving licence</li>
                    <li>The main driver’s credit card (some rental companies also accept debit cards, but most don’t).</li>
                  </ul>
                  <p>Important: Please make sure you check the car’s rental terms as well, as each rental company has its own rules. For example? They might need to see some extra ID. They might not accept certain types of credit card. Or they might not rent to any driver who hasn’t held their driving licence for 36 months or more.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"Am I old enough to rent a car?",
          body:<div>
                  <p>Most companies will rent you a car if you’re at least 21 (and some will rent to younger drivers). But if you’re under 25, you might still have to pay a ‘young driver fee’.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"Can I book a car for my partner, friend, colleague, etc?",
          body:<div>
                 <p>Of course. Just put their details in the ‘Driver Details’ form when you’re booking the car.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"Any tips on choosing the right car?",
          body:<div>
                  <ul>
                    <li>Think about where you’re going. An SUV might be great for cruising down a Texas freeway, but a smaller car’s probably much easier to drive in Rome.</li>
                    <li>See what other people think. You’ll find lots of reviews and ratings on our site, so find out what other customers liked (and didn’t like) about each rental company.</li>
                    <li>Each driver’s driving licence</li>
                    <li>Don’t forget the gearbox. In some countries, nearly everyone drives a manual car. In others, automatics are the norm. Make sure you rent one you can drive!</li>
                  </ul>
              </div>
        }
        
      },
      {
        node:{
          title:"Is the rental price all inclusive?",
          body:<div>
                <p>The price you see includes the car, mandatory cover (e.g. Theft Protection and Collision Damage Waiver) and mandatory fees (e.g. one-way fees, airport surcharges and local taxes).</p>
                <p>It also includes any extras you’ve already added (e.g. GPS or baby seats).</p>
                <p>It doesn’t include any extra cover you buy when you get to the rental counter.</p>
                <p>Tip: There’s a full price breakdown on the Payment page.</p>
              </div>
        }
        
      },
    ]

    return (
        <Layout className="rentals">
            <div className="rentals__header">
                <svg  id="info-icon" class="bk-icon -streamline-info_sign" fill="#923e01" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                <div className="rentals__header-text">
                    <h1>Clean cars. Flexible bookings. Socially distant rental counters.</h1>
                    <p>We’re working with our partners to keep you safe and in the driving seat.</p>
                    <Link to="cars-covid-update">Find out how</Link>
                </div>
            </div>
            <RentalsSearch />
            <Alert icon={'/rentals-icon.svg'} title={'Sign in to save 10% with Genius'} text={"You're eligible for discounts on select car rentals"} link="sign in now!" href="#"/>
            <div className="rentals__brands-wrapper">
                <h2>Popular car hire brands</h2>
                <div className="rentals__brands">
                    <img src="/europcar_logo_lrg.gif" alt="" />
                    <img src="/alamo_logo_lrg.gif" alt="" />
                    <img src="/sixt_logo_lrg.gif" alt="" />
                    <img src="/avis_logo_lrg.gif" alt="" />
                    <img src="/enterprise_logo_lrg.gif" alt="" />
                    <img src="/dollar_logo_lrg.gif" alt="" />
                    <img src="/thrifty_logo_lrg.gif" alt="" />
                    <img src="/sicily_by_car_logo_lrg.gif" alt="" />
                </div>
            </div>
            <div className="rentals__card-group">
              {limitedToSix.map(location => <RentalCard name={location.name} carPrice={location.carPrice} img={location.photo.images.original.url} rentalStart ={location.carRentalStart.slice(0,10)} rentalEnd={location.carRentalEnd.slice(0,10)} />)}
            </div>

            <div className="rentals__feature">
              <h2>World's biggest online car hire service</h2>
              <p>Why you can find the right car in the right place with us...</p>
              <div className="rentals__feature-items">
                <div className="rentals__feature-item">
                <svg class="bk-icon -iconset-international" fill="#FF8000" height="48" width="48" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm41.5 80H87.8a69.7 69.7 0 0 0 3.7-16h19.8a47.6 47.6 0 0 1-5.8 16zM64 109.6A62 62 0 0 1 52.9 96h22.2A62 62 0 0 1 64 109.6zM48.8 88a61.5 61.5 0 0 1-4.3-16h39a61.5 61.5 0 0 1-4.3 16zM16.7 72h19.8a69.7 69.7 0 0 0 3.7 16H22.5a47.6 47.6 0 0 1-5.8-16zm2-24H38a70.5 70.5 0 0 0-2 16H16a47.8 47.8 0 0 1 2.8-16zM64 18.4A61.8 61.8 0 0 1 79.2 40H48.8A61.8 61.8 0 0 1 64 18.4zM82 48a62.3 62.3 0 0 1 2 16H44a62.3 62.3 0 0 1 2-16zm10 16a70.5 70.5 0 0 0-1.9-16h19.2a47.8 47.8 0 0 1 2.8 16zm13.5-24H87.8a69.4 69.4 0 0 0-13.9-23 48.1 48.1 0 0 1 31.6 23zM54.1 17a69.4 69.4 0 0 0-13.9 23H22.5A48.1 48.1 0 0 1 54 17zM28.3 96h15.4a69.6 69.6 0 0 0 10.4 15 48 48 0 0 1-25.8-15zm45.6 15a69.6 69.6 0 0 0 10.4-15h15.4A48 48 0 0 1 74 111z"></path></svg>
                  <div className="rentals__feature-body">
                    <h3>60,000+</h3>
                    <p>locations</p>
                  </div>
                </div>
                <div className="rentals__feature-item">
                  <svg class="bk-icon -iconset-world" fill="#FF8000" height="48" width="48" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M110.4 32.7q-1.5-2.2-3.2-4.3l-1.7-2-3.8-3.8-2-1.8q-2.1-1.7-4.4-3.2a55.7 55.7 0 0 0-20-8.4l-2.7-.5a56.2 56.2 0 0 0-5.7-.6L64 8a56 56 0 0 0 0 112h2.9a56.2 56.2 0 0 0 5.6-.6l2.8-.5a55.7 55.7 0 0 0 20-8.5q2.2-1.5 4.3-3.2l2-1.7q2-1.8 3.8-3.8l1.8-2q1.7-2.1 3.2-4.3a56 56 0 0 0 0-62.7zM56 47c1-1 1.1.9 1.1 1-.1 1-.1 2 .9 2s1 2.1 1 3-3 2-3 1 1-1 1-2-1 0-1-1v-1c0-1-1 0-1-1a2.3 2.3 0 0 1 1-2zm-2 4.8c0-.8-.7-1 0-1.8 1-1 2.4 3 1 3-1 0-1 1-2 0-.7-.7.9-.3 1-1.1zM37 19.6c.2 1.7 1 6.4 2 6.4s0 2-1 3a3.7 3.7 0 0 0-1 3v3c0 2 0 3-2 3a3.7 3.7 0 0 1-3-2s-1-2 0-3c.7-.7-3.2-3.1-5.8-4.7A52.4 52.4 0 0 1 37 19.5zM24.5 30.2c1.5 1 4.5 5 4.5 5.8v2c0 1 2 0 1 2s-1 0-2 0 1 2 1 3-5-1-3-4c1-1.4-3.9-1.8-6.5-2a52.3 52.3 0 0 1 5-6.8zM12 64a51.9 51.9 0 0 1 1.8-13.5c2 .3 4.6 1 5.2 1.5s0 1 1 3 1-1 1-2 1-3 1-5 0-3 1-3 2 0 2 2 1 3 2 2 2 0 2 2 2 2 2 3-1 1-3 1-4 2-2 2 1 2 1 2l-4 4c-2 2-1 2-1 5s-2 2-3 1c-.7-.7-4.7-.4-6.8-.1L12 64zm29 27c0 2-1 2-3 4s-1 2-2 3a14.4 14.4 0 0 1-3 2l-3.2 3.2a52.1 52.1 0 0 1-15.4-23.5c1.6-1.4 4-3.4 4.6-2.7 1 1 1 2 2 3s4-2 4-2a3.5 3.5 0 0 1 4 1c2 2 2 1 3 1s2 1 3 3 3 1 5 2 3 1 3 2-2 2-2 4zm70-14c-1 1-3-.4-3 1 0 1-.1 3.8-1 2-1-2 0-5-1-5s-2-3-3-3-3 2-4 3-1 5-2 4-2-4-3-6c-.6-1.3-5-2-6-3-.7-.7-5-3-5-2a7.6 7.6 0 0 0 2 4c1 1 1 0 2 0 2 0 2 1 1 2s-4 3-6 3-2-3-3-5c-.6-1.3-1.9-3-3-1.4s2.3 5.6 3.6 7a6.5 6.5 0 0 0 3.8 1.7C86 80 80 85 79 87c-.9 1.8 0 2 0 3s-2 3-3 5-4 6-7 5a4.8 4.8 0 0 1-2-3c0-1.4-1-2-1-4 0-2.2 0-5-2-7-1-1-1-3-2-4-1.2-1.2-2.5 0-3.8.3a5.4 5.4 0 0 1-3.8-.1S50 79 50 77c0-1 1-3 2-4.7 1.9-3.4 2.7-3.4 3.9-4.4s2.6-1.8 3.8-1.4a28.8 28.8 0 0 0 4.3 1.1 10.3 10.3 0 0 1 3.4 1c.6.4 2-.1 3.3-.4.8 0 2.3.8 3.3.8s4-3 3-4-1-1-2-1-2 0-2-1a2.1 2.1 0 0 1 2-2h2c1 0 3 0 3-1 0-1.4 0-1-1-1s-1-1-2-1h-2c-1 0-1 2-2 3s-2 0-2 1 1 2 0 2a2.1 2.1 0 0 1-2-2c0-1 .1-.8-1-2s-1-1-2-1c0 0-1 0 0 1s2 1 2 2a1 1 0 0 1-1 1c-1 0 0-3-3-3-1 0-4 0-4 1s.4 3-1 3c-1 0-1 0-3-1-1.3-.6-1-3 0-3h1c1.4 0 1-1 1-2v-2s0-1 2-1c1 0 1-1 2-2s1-2 2-2 2 1 3 1 3 0 3-1-.7-1.3 0-2c1-1 2-2 3-2a1 1 0 0 0 1-1c0-1-3.3-.3-4-1-1-1 1-2 2-3s-1-1-1-1c-1 0-3 1.6-3 3 0 1 .3 5.4-1 6-2 1-2 0-2-1s1-1 0-2-1 1-2 1-1-2 0-3 3.5-10 8-10h3c1 0 3.3 2.3 4 3 1 1 1 2 0 2h-2s-1 0 0 1 1 2 2 2 1.7-1 1.8-2 3.2-3 4.2-3c3 0 4-1 5-1s1.1 1.1 2 0 0-2 0-3 2-2 2-1v2c0 1 1.2-.1 1.1-1s.9-1 1.9-2c.7-.7 5.5-1 8.2-1a51.7 51.7 0 0 1 11.3 40l-4.5 4c-1 1 1 1 0 2z"></path></svg>
                  <div className="rentals__feature-body">
                    <h3>160</h3>
                    <p>countries</p>
                  </div>
                </div>
                <div className="rentals__feature-item">
                <svg class="bk-icon -iconset-speech_bubble_solid" fill="#FF8000" height="48" width="48" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M64 16C33.1 16 8 35.7 8 60a39 39 0 0 0 14 29.1l-5.8 17.6a4 4 0 0 0 5.5 5l22-10.7a69.3 69.3 0 0 0 20.3 3c30.9 0 56-19.7 56-44S94.9 16 64 16z"></path></svg>
                  <div className="rentals__feature-body">
                    <h3>43</h3>
                    <p>languages spoken</p>
                  </div>
                </div>
                <div className="rentals__feature-item">
                <svg class="bk-icon -iconset-star" fill="#FF8000" height="48" width="48" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M117.4 56.3L89.6 77.5a1.7 1.7 0 0 0-.3 1.2l10.7 34.2c1.2 3.9-.8 5.7-1.6 6.3-.7.5-3.2 1.8-6.4-.6L64.3 97.4a1 1 0 0 0-.6 0l-27.8 21.2a6 6 0 0 1-3.6 1.4 4.7 4.7 0 0 1-2.7-.8c-.8-.6-2.8-2.4-1.6-6.3l10.6-34.2a1.7 1.7 0 0 0-.3-1.2L10.4 56.3c-3.1-2.4-2.5-5.1-2.3-6S9.6 47 13.5 47h34.3a1.3 1.3 0 0 0 .7-.6L59 12.2C60.2 8.4 62.9 8 63.9 8s3.7.4 4.9 4.2l10.6 34.3a1.3 1.3 0 0 0 .7.6h34.2c4 0 5.1 2.5 5.4 3.3s.9 3.5-2.3 6z"></path></svg>
                  <div className="rentals__feature-body">
                    <h3>3,500,000</h3>
                    <p>customer reviews</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rentals__accordion">
              <AccordinonExtendend description="Frequently asked questions" content={acorriodionNodes}/>
            </div>

            <div className="rentals__places">
              <h2>Top worldwide locations for car rental</h2>
              <div className="rentals__places-group">
                {limitedToTweleve.map(place => {
                  return <div className="rentals__place">
                            <img src={place.photo.images.original.url} alt="" />
                            <div className="rentals__place-text">
                              <p>{place.name}</p>
                              <p>Car hire from {place.carPrice}$ per day</p>
                            </div>
                          </div>})
              }
              </div>
            </div>

            <SubscribeForm />
            <PropertyList />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
  {
    limitedToSix: allLocations(filter: {name: {regex: "/Pattaya/"}}, limit: 6, skip: 12) {
      nodes {
        id
        name
        carPrice
        photo {
          images {
            original {
              url
            }
          }
        }
        carRentalStart(difference: "")
        carRentalEnd(difference: "")
      }
    }
    limitedToTweleve:allLocations(filter: {name: {regex: "/Pattaya/"}}, limit: 12, skip: 12) {
      nodes {
        id
        name
        carPrice
        photo {
          images {
            original {
              url
            }
          }
        }
        carRentalStart(difference: "")
        carRentalEnd(difference: "")
      }
    }
  }
`

export default Rentals
