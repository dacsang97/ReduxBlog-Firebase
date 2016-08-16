import {hello} from './App';
import styles from '../public/style.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <div className={styles.text}>
        {hello}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
