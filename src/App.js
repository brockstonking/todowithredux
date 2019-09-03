import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as Actions from './ducks/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';


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
      <Router>
        <div className="App">
          {routes}
        </div>
      </Router>
        
    )
  }
}

export default connect(state => state, Actions)(App);
