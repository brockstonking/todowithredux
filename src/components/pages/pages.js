import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';
import { Plus } from 'react-feather';

class Pages extends Component {
    constructor(props){
        super(props)
    }

    setTodos = (page_id) => {
        axios.get(`/api/get_page_todos/${ page_id }`)
        .then( results => {
            this.props.updateRedux(results.data, 'SET_PAGE_TODOS', 'pageTodos');
        })
        .catch( err => {
            window.alert(err)
        })
    }

    showAdd = () => {
        this.props.updateRedux(this.props.showAddPage ? false : true, 'SET_SHOW_ADD_PAGE', 'showAddPage')
    }

    addPage = () => {

    }

    render () {
        let pages = this.props.personPages.map( e => {
            return <div onClick={ () => this.setTodos(e.page_id) }>
                <p>{e.page_name}</p>
            </div>
        })

        let addPageInput = this.props.showAddPage 
        ? <div>
            <input 
                placeholder='Page name' 
                style={{ padding: '3px' }} 
                onChange={ e => this.props.setInputs(e.target.value, 'SET_ADD_PAGE_NAME', 'addPageName') }
                value={this.props.addPageName}
            />
            <div>Add</div>
        </div>
        : <div></div>;

        let addOrCancel = 
        this.props.personPages.length < 1
        ? <div></div>
        : !this.props.showAddPage
        ? <Plus />
        : <p>Cancel</p>;
        return (
            <div>
                { pages }
                { addPageInput }
                <div onClick={ () => this.showAdd() }>{ addOrCancel }</div>
            </div>
        )
    }
}

export default connect(state => state, Actions)(Pages);