import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';
import axios from 'axios';
import { Plus, Menu } from 'react-feather';

class Pages extends Component {
    constructor(props){
        super(props)
    }

    setTodos = (page_id) => {
        this.props.updateRedux(page_id, 'SET_SELECTED_PAGE', 'selectedPage');
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
        axios.post('/api/add_page', { person_id: this.props.selectedPerson, page_name: this.props.addPageName })
        .then( results => {
            this.props.updateRedux(results.data, 'SET_PERSON_PAGES', 'personPages');
            this.showAdd();
            this.props.setInputs('', 'SET_ADD_PAGE_NAME', 'addPageName')
        })
        .catch( err => {
            window.alert(err)
        })
    }

    render () {
        let pages = this.props.personPages.map( e => {
            return <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px' }}>
                    <Menu />
                </div>
                <div onClick={ () => this.setTodos(e.page_id) }>
                    { e.page_name }
                </div>
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
            <div onClick={ () => this.addPage() }>Add</div>
        </div>
        : <div></div>;

        let addOrCancel = 
        !this.props.selectedPerson
        ? <div></div>
        : !this.props.showAddPage
        ? <Plus />
        : <p>Cancel</p>;

        return (
            <div>
                <h3>Pages:</h3>
                { pages }
                { addPageInput }
                <div onClick={ () => this.showAdd() }>{ addOrCancel }</div>
            </div>
        )
    }
}

export default connect(state => state, Actions)(Pages);