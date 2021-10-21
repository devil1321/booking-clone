import React,{useState} from 'react'
import Layout from '../components/layout'
import Accordion from '../components/Accordion'
import TaxiSearch from '../components/TaxiSearch'
import AccordionExtentend from '../components/AccordionExtentend'
import Tab from '../components/Tab'
import SubscribeForm from '../components/SubscribeForm'
import PropertyList from '../components/PropertyList'
import Footer from '../components/Footer/Footer'
const Taxi = () => {

    const acorriodionNodes = [
      {
        node:{
          title:"What happens if my flight is early or delayed?",
          body:<div>
                <p>Our Meet & Greet service means that if you provide your flight number when you're booking your airport taxi, we'll be able to track your flight and adjust your pick-up time automatically according to your actual arrival time. Once your flight has landed, your driver will wait for 45 minutes. This should give you plenty of time to pass through security, claim your baggage and head through to arrivals to meet your driver.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"What's included in the price?",
          body:<div>
                  <p>Our prices include all taxes, fees, gratuity and toll road charges. If you book an airport pick-up, prices also include Meet & Greet as standard, which means we'll track your flight and wait for 45 minutes from the time your flight arrives. If you book a return taxi to the airport – or any other non-airport pick-up – your driver will wait for 15 minutes after the scheduled pick-up time. Please note that you may have to pay an additional cost for certain special requests or any amendments you want to make to your journey.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"How do I pay?",
          body:<div>
                 <p>You pay for your airport taxi when you complete your booking online. This means that everything is confirmed and taken care of in advance so you don't need to worry about any unpleasant surprises or having cash on you when you arrive. Currently, we accept Visa, American Express and Mastercard, as well as most major debit cards. We also accept payment via PayPal.</p>
              </div>
        }
        
      },
      {
        node:{
          title:"Can I cancel my booking?",
          body:<div>
                 <p>Yes. You can always cancel your booking for free up to 24 hours prior to your scheduled pick-up time. Some of our partners allow a shorter window for free cancellation. Check your booking confirmation for more information.</p>
              </div>
        }
        
      }
    ]

    const [tabOneShow,setTabOneShow] = useState(true)
    const [tabTwoShow,setTabTwoShow] = useState(false)
    const [tabThreeShow,setTabThreeShow] = useState(false)

    const handleTab = (e) =>{
        const tabs = document.querySelectorAll('.taxi__tab')
        const btns = document.querySelectorAll('li')
        btns.forEach(btn => btn.classList.remove('active'))
        tabs.forEach(tab => tab.style.display = 'none')
        const activeTab =  document.querySelector(`.taxi__tab.${e.target.id}`)
        activeTab.style.display = 'flex'
        e.target.classList.add('active')
    }

    return (
        <Layout className="taxi">
            <Accordion isFunctional={true} heading="Protecting you during COVID-19" text="Your safety matters. From July 2020, we’re asking all customers to wear a face covering when travelling with us. If you don’t wear a face covering, your driver may not be able to start your journey. Where Coronavirus may affect your plans, here’s what you need to know about booking with us at this time."/>
            <div className="taxi__hero">
                <div className="taxi__overlay"></div>
                <div className="taxi__hero-text">
                    <h1>Book your airport taxi</h1>
                    <h3>Easy airport transfers to and from your accommodation</h3>
                    <TaxiSearch />
                </div>
            </div>
            <div className="taxi__feature">
                <div className="taxi__feature-item">
                    <div className="taxi__feature-logo">
                        <svg class="bk-icon -iconset-airplane" data-width="24" height="24" role="presentation" width="24" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M8.3 83.1l2.8-2.8a1 1 0 0 1 .7-.3h27.3l16-17.5-41.7-32a4 4 0 0 1-1.1-5.3l1.3-2.8a4 4 0 0 1 5.1-1.6l55.5 21.1L98 16a28.6 28.6 0 0 1 18-8 4 4 0 0 1 4 4 28.6 28.6 0 0 1-8 18L86.6 53.4l21 55.3a4 4 0 0 1-1.6 5.1l-2.7 1.4A4 4 0 0 1 98 114L66 72.3 48 89v27.3a1 1 0 0 1-.3.7l-2.8 2.8a1 1 0 0 1-1.6-.2L30.7 97.3 8.5 84.7a1 1 0 0 1-.2-1.6z"></path></svg>
                    </div>
                    <div className="taxi__feature-content">
                        <h3>Flight tracking</h3>
                        <p>Your driver tracks your flight and waits for you if it's delayed</p>
                    </div>
                </div>
                <div className="taxi__feature-item">
                    <div className="taxi__feature-logo">
                        <svg class="bk-icon -iconset-credit_card_back" data-width="24" height="24" role="presentation" width="24" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M108 24H20A12 12 0 0 0 8 36v56a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V36a12 12 0 0 0-12-12zm-88 8h88a4 4 0 0 1 4 4v4H16v-4a4 4 0 0 1 4-4zm88 64H20a4 4 0 0 1-4-4V56h96v36a4 4 0 0 1-4 4zM24 72h48v8H24z"></path></svg>
                    </div>
                    <div className="taxi__feature-content">
                        <h3>One clear price</h3>
                        <p>Your price is confirmed upfront – no extra costs, no cash required</p>
                    </div>
                </div>
                <div className="taxi__feature-item">
                    <div className="taxi__feature-logo">
                        <svg class="bk-icon -iconset-checkmark_bold" data-width="24" height="24" role="presentation" width="24" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M52 102a8 8 0 0 1-5.7-2.3l-28-28a8 8 0 0 1 11.4-11.4L52 82.7l46.3-46.4a8 8 0 0 1 11.4 11.4l-52 52A8 8 0 0 1 52 102z"></path></svg>
                    </div>
                    <div className="taxi__feature-content">
                        <h3>Tried and trusted</h3>
                        <p>We work with professional drivers and have 24/7 customer care</p>
                    </div>
                </div>
            </div>
            <div className="taxi__article">
                <h2>Airport transfers made easy</h2>
                <div className="taxi__article-main">
                    <div className="taxi__article-list">
                        <div className="taxi__article-item">
                            <img src="/car.svg" alt="" />
                            <div className="taxi__article-text">
                                <h3>Booking your airport taxi</h3>
                                <p>Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time</p>
                            </div>
                        </div>
                        <div className="taxi__article-item">
                            <img src="/person.svg" alt="" />
                            <div className="taxi__article-text">
                                <h3>Meeting your driver</h3>
                                <p>You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed</p>
                            </div>
                        </div>
                        <div className="taxi__article-item">
                            <img src="/trash.svg" alt="" />
                            <div className="taxi__article-text">
                                <h3>Arriving at your destination</h3>
                                <p>Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport</p>
                            </div>
                        </div>
                    </div>
                    <div className="taxi__article-image">
                        <span className="taxi__article-message">How does it work?</span>
                        <img src="/article-image.svg" alt="" />
                        <p>Enjoy your trip!</p>
                    </div>
                </div>
            </div>
            <div className="taxi__tabs">
                <h2>Airport taxis for any kind of trip</h2>
                <div className="taxi__tabs-nav">
                    <ul>
                        <li onClick={(e)=>{handleTab(e)}} id="one" className="active">1 - 3 passagers</li>
                        <li onClick={(e)=>{handleTab(e)}} id="two">4 - 7 passagers</li>
                        <li onClick={(e)=>{handleTab(e)}} id="three">All taxis</li>
                    </ul>
                </div>
                <div className="taxi__tabs-contnet">
                    <div className="taxi__tab one" >
                      <Tab isWide={true} title="Standard" subtitle="Skoda Octavia or similar" passagers={3} bags={2}/>
                      <Tab isWide={true} title="Executive" subtitle="Mercedes-Benz E-Class or similar" passagers={3} bags={2}/>
                    </div>
                    <div className="taxi__tab two">
                      <Tab title="People carrier" subtitle="Peugeot 5008 or similar" passagers={5} bags={5}/>
                      <Tab title="Executive people carrier" subtitle="Mercedes-Benz V-Class or similar" passagers={6} bags={6}/>
                      <Tab title="Large people carrier" subtitle="Ford Tourneo or similar" passagers={7} bags={7}/>
                    </div>
                    <div className="taxi__tab three">
                        <div className="taxi__tab-content-top">
                            <Tab isWide={true} title="Standard" subtitle="Skoda Octavia or similar" passagers={3} bags={2}/>
                            <Tab isWide={true} title="Executive" subtitle="Mercedes-Benz E-Class or similar" passagers={3} bags={2}/>
                        </div>
                        <div className="taxi__tab-content-bottom">
                            <Tab title="People carrier" subtitle="Peugeot 5008 or similar" passagers={5} bags={5}/>
                            <Tab title="Executive people carrier" subtitle="Mercedes-Benz V-Class or similar" passagers={6} bags={6}/>
                            <Tab title="Large people carrier" subtitle="Ford Tourneo or similar" passagers={7} bags={7}/>
                        </div>
                    </div>
                </div>
            </div>
            <AccordionExtentend description="Find out more about our airport taxi service" subtitle="See more FAQs on our" content={acorriodionNodes} link="help page" href="#"/>
            <SubscribeForm />
            <PropertyList />
            <Footer />
        </Layout>

    )
}

export default Taxi
