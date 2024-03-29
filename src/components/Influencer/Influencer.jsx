import React from 'react'
import InfluencerSlider from './InfluencerSlider'
import '../../styles/Influencer.css'

const Influencer = () => {
  return (
    <section className='influencer-container'>
        <div>
            <h2>Who to follow</h2>
        </div>
        <InfluencerSlider />
    </section>
  )
}

export default Influencer