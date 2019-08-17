import React from 'react'
import HomeLayout from './layouts/HomeLayout'
import Dashboard from './pages/private/Dashboard'
import './scss/index.scss'

function App () {
  return (
    <HomeLayout>
      <Dashboard />
    </HomeLayout>
  )
}

export default App
