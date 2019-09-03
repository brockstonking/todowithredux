import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/auth/auth';

export default (
    <Switch>
        <Route exact path='/' component={ Auth } />
    </Switch>
)