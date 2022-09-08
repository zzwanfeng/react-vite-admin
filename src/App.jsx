import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'
import 'antd/dist/antd.css'
import PageLoading from '@/components/PageLoading'


// 公共模块
const DefaultLayout = lazy(() => import('./containers'))

// 基础页面
const View404 = lazy(() => import('./views/Others/404'))
const View500 = lazy(() => import('./views/Others/500'))
const Login = lazy(() => import('./views/Login'))

// Suspense
// 快速完成时"闪烁"  加载模块只需要几毫秒的时间， fallback也会被执行  会闪烁一下

const App = () => (
  <div>
    <Router>
      <Suspense fallback={<PageLoading />}>
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
