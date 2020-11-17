import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../containers.css'

import Home from '../../components/home/Home'
import Banks from '../banks/Banks'
import Branches from '../branches/Branches'

export default function AppRouter () {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />}/>
            <Route exact path={'/banks'} render={() => <Banks />}/>
            <Route exact path={'/branches'} render={() => <Branches />}/>
            {/* <Route exact path={'/banks/:bankId/employees'} render={() => <Secret />}/>  */}
        </Switch>
    )
}