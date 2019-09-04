import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../ducks/reducer';
import axios from 'axios';
import { Plus } from 'react-feather';

class AddPerson extends Component {
    constructor(props){
        super(props)
    }

    setPages = (person_id) => {
        this.props.updateRedux(person_id, 'SET_SELECTED_PERSON', 'selectedPerson')
        axios.get(`/api/get_person_pages/${ person_id }`)
        .then( results => {
            this.props.updateRedux(results.data, 'SET_PERSON_PAGES', 'personPages');
            if (person_id !== this.props.selectedPerson) {
                this.props.updateRedux([], 'SET_PAGE_TODOS', 'pageTodos');
            }
        })
        .catch( err => {
            window.alert(err)
        })
    }

    showAdd = () => {
        this.props.updateRedux(this.props.showAddPerson ? false : true, 'SET_SHOW_ADD_PERSON', 'showAddPerson')
    }

    addPerson = () => {
        if (this.props.addPersonGroupName.length < 1) {
            window.alert('Please enter a name')
        } else {
            this.props.setInputs('', 'SET_ADD_PERSON_GROUP_NAME', 'addPersonGroupName')
            this.showAdd();
            axios.post('/api/add_person_group', { name: this.props.addPersonGroupName, user_id: this.props.sessionUserId })
            .then( results => {
                this.props.updateRedux(results.data, 'SET_SESSION_PEOPLE_AND_GROUPS', 'sessionPeopleAndGroups')
            })
            .catch( err => {
                window.alert(err)
            });
        }
    }

    render () {
        let peopleAndGroups = this.props.sessionPeopleAndGroups.map( (e, i) => {
            return <div onClick={() => this.setPages(e.person_id)}>
                <h5>{e.name}</h5>
            </div>
        });

        let addPersonInput = this.props.showAddPerson 
        ? <div>
            <input 
                placeholder='Person or group name' 
                style={{ padding: '3px' }} 
                onChange={ e => this.props.setInputs(e.target.value, 'SET_ADD_PERSON_GROUP_NAME', 'addPersonGroupName') }
                value={this.props.addPersonGroupName}
            />
            <div onClick={ () => this.addPerson() }>Add</div>
        </div>
        : <div></div>;

        let addOrCancel = !this.props.showAddPerson
        ? <Plus />
        : <p>Cancel</p>;

        return (
            <div>
                <h3>People/Groups:</h3>
                { peopleAndGroups }
                { addPersonInput }
                <div onClick={ () => this.showAdd() }>{ addOrCancel }</div>
            </div>
        )
    }
}

export default connect(state => state, Actions)(AddPerson);