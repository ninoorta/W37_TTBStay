import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './component/pages/SignUp'
import Signin from './component/pages/SignIn'

class Routes extends Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return (
            <Switch>
                <Route exact path="/sign-up">
                    <Signup/>
                </Route>
                <Route exact path="/sign-in">
                    <Signin/>
                </Route>
                <Route exact path="/">
                    <Signup/>
                </Route>
            </Switch>
        )
    }
}

export default Routes
 