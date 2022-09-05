import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'
import 'antd/dist/antd.css'


// 公共模块
const DefaultLayout = lazy(() => import(/* webpackChunkName: 'default' */ './containers'))

// 基础页面
const View404 = lazy(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = lazy(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './views/Login'))

const App = () => (
  <div>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/index' />} />
          <Route path='/500' component={View500} />
          <Route path='/Login' component={Login} />
          <Route path='/404' component={View404} />
          <Route component={DefaultLayout} />
        </Switch>
      </Suspense>
    </Router>
  </div>
)

export default App
