import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/auth/auth';
import Dashboard from './components/dashboard/dashboard';

export default (
    <Switch>
        <Route exact path='/' component={ Auth } />
        <Route path='/main' component={ Dashboard } />
    </Switch>
)