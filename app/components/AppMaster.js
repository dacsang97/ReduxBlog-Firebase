import React, { Component, PropTypes } from 'react'
import Header from './template/Header'

class AppMaster extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

AppMaster.propTypes = {
  children: PropTypes.object,
}

export default AppMaster
