import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../components/home/Home'

export default function AppRouter () {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />}/>
            {/* <Route exact path={'/banks'} render={() => <Secret />}/> */}
            {/* <Route exact path={'/banks/:bankId/employees'} render={() => <Secret />}/>  */}
        </Switch>
    )
}