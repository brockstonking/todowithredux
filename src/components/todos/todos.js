import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';

class Todos extends Component {
    constructor(props){
        super(props)
    }

    render () {
        let todos = this.props.pageTodos.map( e => {
            return <p>{ e.todo }</p>
        })
        return (
            <div>
                {todos}
            </div>
        )
    }
}

export default connect(state => state, Actions)(Todos);