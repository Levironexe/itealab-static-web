import React from 'react'
import {Navbar} from './components/navbar'
import Hero from './components/hero'
import {About} from './components/about'
import Community from './components/what-we-do'
import HowOurTeamWork from './components/how-our-team-work'
import IteaLabSlider from './components/decoration-1'
import JoinUs from './components/join-us'
import News from './components/news'
import Footer from './components/footer'
import CustomCursor from './components/ui/custom-cursor'

const home = () => {
  return (
    <div className='bg-background cursor-none '>
      <CustomCursor/>
      <Navbar/>
      <Hero />
      <About/>
      <Community />
      <IteaLabSlider/>
      <HowOurTeamWork/>
      <JoinUs/> 
      <News/>
      <Footer/>
    </div>
  )
}

export default home