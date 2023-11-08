import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Usp from './Usp'
import Counter from './Counter'
import Reviews from './Reviews'
import Tabs from './Tabs'
import Faqs from './Faqs'
import ContactForm from './ContactForm'
import Process from './Process'

export default function Home() {
  return (
    <>
    <Banner/>
    <Counter/>
    <Process/>
    <Services/>
    <Usp/>
    <Tabs/>
    <Reviews/>
    <Faqs/>
    </>
  )
}
