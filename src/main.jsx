
// Vite 'global is not defined'
// 问题是因为vite 没有globalwindow像 webpack 那样定义一个字段。有些库依赖它，因为 webpack 比 vite 更老
// 只需在一开始，在任何库导入之前插入：
window.global ||= window;

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))