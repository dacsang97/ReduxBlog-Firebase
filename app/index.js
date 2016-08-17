import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hello } from './App'
import styles from '../public/style.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: 11,
    }
  }
  render() {
    return (
      <div className={styles.text}>
        {hello}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
