import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        axios.get('/api/get_session')
        .then( results => {
            if (results.data === 'User has been logged out') {
                this.props.history.push('/')
            } else {
                this.props.updateRedux(results.data, 'SET_SESSION_USERNAME', 'sessionUsername');
            }
        })
        .catch( err => {
            window.alert(err)
        })
    }

    render () {
        return (
            <div>
                {this.props.sessionUsername}
            </div>
        )
    }
}

export default connect(state => state, Actions)(Dashboard);