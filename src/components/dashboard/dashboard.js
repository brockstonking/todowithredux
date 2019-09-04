import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';
import Person from './../person/person';
import Pages from './../pages/pages';
import Todos from './../todos/todos';

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
                this.props.updateRedux(results.data.username, 'SET_SESSION_USERNAME', 'sessionUsername');
                this.props.updateRedux(results.data.user_id, 'SET_SESSION_USER_ID', 'sessionUserId');
                axios.get(`/api/get_people_and_groups/${ this.props.sessionUserId }`)
                .then( results => {
                    this.props.updateRedux(results.data, 'SET_SESSION_PEOPLE_AND_GROUPS', 'sessionPeopleAndGroups')
                })
                .catch( err => {
                    window.alert(err)
                })
            }
        })
        .catch( err => {
            window.alert(err)
        })
    }
    

    render () {
        return (
            <div style={ { display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto' } }>
                <Person />
                <Pages />
                <Todos />
            </div>
        )
    }
}

export default connect(state => state, Actions)(Dashboard);