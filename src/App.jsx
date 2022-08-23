import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'
import loadable from '@loadable/component'
import 'antd/dist/antd.css'


// // 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

// // 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))
// const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login/index'))

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/index' />} />
        <Route path='/500' component={View500} />
        <Route path='/Login' component={Login} />
        <Route path='/404' component={View404} />
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  </div>
)

export default App
