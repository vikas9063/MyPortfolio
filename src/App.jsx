import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Skills from './components/skills/Skills'
import MyWorks from './components/myworks/MyWorks'
import Experience from './components/experience/Experience'
import ContactUs from './components/contactus/ContactUs'
import UpdateBanner from './components/UpdateBanner'

const App = () => {
  return (
    <main className='bg-black w-full text-gray-200'>
      <Header />
      <Banner />
      <Skills />
      <Experience />
      <MyWorks />
      <ContactUs />
      <UpdateBanner />
    </main>
  )
}

export default App