import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as Actions from './ducks/reducer';

import Auth from './components/auth/auth';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount = () => {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize () {
      this.props.setMobile(window.innerWidth <= 760)
  }
  
  render(){
    return (
        <div className="App">
          <Auth />
        </div>
    )
  }
}

export default connect(state => state, Actions)(App);
