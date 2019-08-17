import React, { Component, Fragment } from 'react'
import Header from '../../components/Header'

class HomeLayout extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        {this.props.children}
      </Fragment>
    )
  }
}

export default HomeLayout
