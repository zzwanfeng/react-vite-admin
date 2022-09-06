
// Vite 'global is not defined'
// 问题是因为vite 没有globalwindow像 webpack 那样定义一个字段。有些库依赖它，因为 webpack 比 vite 更老
// 只需在一开始，在任何库导入之前插入：
window.global ||= window;

import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'


// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

// react-dom:ReactDOM.render已弃用。使用它会警告并在 React 17 模式下运行您的应用程序。
// react-dom:ReactDOM.hydrate已弃用。使用它会警告并在 React 17 模式下运行您的应用程序。
// react-dom:ReactDOM.unmountComponentAtNode已弃用。
// react-dom:ReactDOM.renderSubtreeIntoContainer已弃用。
// react-dom/server:ReactDOMServer.renderToNodeStream已弃用。
// 要解决它，您可以恢复到以前版本的 React 或更新您的 index.js 文件以符合 React 18 语法

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
