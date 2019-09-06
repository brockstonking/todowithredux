import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../../ducks/reducer';
import { Menu } from 'react-feather';

class SingleTodo extends Component {
    constructor(props){
        super(props)

        this.state = {
            showEditAndDelete: false
        }
    }

    render () {
        return (
            <div style={{ display: 'flex' }}>
                <div onClick={ () => { this.setState({showEditAndDelete: true}) } } className='todosMenuIcon'>
                    <Menu />
                </div>
                <div onClick={ () => { this.setState({showEditAndDelete: false}) } }>
                    { this.props.todo }
                </div>
                <div style={ { height: this.state.showEditAndDelete ? '100px' : '0px', overflow: 'hidden' } }>
                    <div>Edit</div>
                    <div>Delete</div>
                </div>
            </div> 
        )
    }
}

export default connect(state => state, Actions)(SingleTodo);