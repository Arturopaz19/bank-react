import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import '../containers.css'

import Home from '../../components/home/Home'
import Banks from '../banks/Banks'
import Branches from '../branches/Branches'
import Employees from '../employees/Employees'

export default function AppRouter () {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />}/>
            <Route exact path={'/banks'} render={() => <Banks />}/>
            <Route exact path={'/branches'} render={() => <Branches />}/>
            <Route exact path={'/employees'} render={() => <Employees />}/>
            <Redirect from='*' to='/' /> 
        </Switch>
    )
}