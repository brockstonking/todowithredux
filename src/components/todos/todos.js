import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';
import { Plus } from 'react-feather';

class Todos extends Component {
    constructor(props){
        super(props)
    }

    addTodo = () => {
        axios.post('/api/add_todo', { page_id: this.props.selectedPage, todo: this.props.addTodoItem })
        .then( results => {
            this.props.updateRedux(results.data, 'SET_PAGE_TODOS', 'pageTodos');
            this.showAdd();
            this.props.setInputs('', 'SET_ADD_TODO_ITEM', 'addTodoItem');
        })
        .catch( err => {
            window.alert(err)
        })
    }

    showAdd = () => {
        this.props.updateRedux(this.props.showAddTodo ? false : true, 'SET_SHOW_ADD_TODO', 'showAddTodo')
    }

    render () {
        let todos = this.props.pageTodos.map( e => {
            return <p>{ e.todo }</p>
        })

        let addOrCancel = 
        !this.props.selectedPage
        ? <div></div>
        : !this.props.showAddTodo
        ? <Plus />
        : <p>Cancel</p>;

        let addTodoInput = this.props.showAddTodo
        ? <div>
            <input 
                placeholder='Item' 
                style={{ padding: '3px' }} 
                onChange={ e => this.props.setInputs(e.target.value, 'SET_ADD_TODO_ITEM', 'addTodoItem') }
                value={this.props.addTodoItem}
            />
            <div onClick={ () => this.addTodo() }>Add</div>
        </div>
        : <div></div>;

        return (
            <div>
                <h3>Items:</h3>
                { todos }
                { addTodoInput }
                <div onClick={ () => this.showAdd() }>{ addOrCancel }</div>
            </div>
        )
    }
}

export default connect(state => state, Actions)(Todos);