import React from 'react'
import NavBar from './NavBar/NavBar'
import QualityFood from './QualityFood/QualityFood'
import OurStory from './OurStory/OurStory'
import TheBest from './theBestSect/TheBest'
import Items from './Items/Items'
import Testimonials from './Testimonials/Testimonials'
import NewsSection from './News/NewsSection'
import Forms from './Forms/Forms'
import Footer from './Footer/Footer'

export default function LandingPage() {
  return (
    <div>
        <NavBar/>
        <QualityFood/>
        <OurStory/>
        <TheBest/>
        <Items/>
        <Testimonials/>
        <NewsSection/>
        <Forms/>
        <Footer/>
    </div>
  )
}
