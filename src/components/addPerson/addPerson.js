import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';

class AddPerson extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <h3>People/Groups:</h3>
            </div>
        )
    }
}

export default connect(state => state, Actions)(AddPerson);