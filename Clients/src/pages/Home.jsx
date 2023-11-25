import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import Service from '../Components/ServiceSection'
import Header from '../Components/Header'
import Offer from '../Components/Offer'
import Footer from '../Components/Footer'
import PackageWrapper from '../Components/PackageWrapper'
import TrendingOffers from '../Components/TrendingOffers'
import WhyChooseUs from '../Components/WhyChooseUs'
import Brands from '../Components/Brands'
import FeaturesBanner from '../Components/FeaturesBanner'
import MobileApp from '../Components/MobileApp'
import CitieWrapper from '../Components/CitiesWrapper'
import BookingNotifier from '../Components/BookingNotifier'
import ScrollToTop from '../Components/ScrollToTop'


const Home = () => {


  useEffect(()=>{
    document.title = "Waasho - Home" 
   })
  return (
    <>
    <ScrollToTop/>
    <BookingNotifier/>
      <Header />
      <Slider />
      <TrendingOffers/>
      <CitieWrapper/>
      <Service />
      <PackageWrapper/>
      <WhyChooseUs/>
      <FeaturesBanner/>
      <Offer />
      {/* <Faq /> */}
      <MobileApp/>
      <Brands/>
      <Footer />
    </>
  )
}

export default Home