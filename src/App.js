/** @format */

import React from 'react'
import logo from './logo.svg'

// semantic ui css import
import 'semantic-ui-css/semantic.min.css'

// app styles
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import different pages
import Splashscreen from './pages/Splashscreen/Splashscreen'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Onboarding from './pages/Onboarding/Onboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import MainDashboard from './pages/MainDashboard/MainDashboard'

function App() {
  return (
    <Router>
      <div id='app'>
        <Switch>
          <Route exact path='/'>
            <Splashscreen />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/onboarding'>
            <Onboarding />
          </Route>

          <Route exact path='/dashbaord'>
            <Dashboard />
          </Route>

          <Route exact path='/main-dashbaord'>
            <MainDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
