import React from 'react'
import HeroContent from '../../../components/HeroContent'
import TimeCard from '../../../components/TimeCard'

const Dashboard = props => {
  return (
    <section className='hero dashboard'>
      <HeroContent />
      <section className='section'>
        <div className='container'>
          <div class='columns'>
            <div class='column'>
              <h3>Previous Attendance</h3>
              <TimeCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard
