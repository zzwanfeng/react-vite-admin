import React, { lazy } from 'react'


const Index = lazy(() => import('@/views/Index'))

// 通用
const ButtonView = lazy(() => import('@/views/PublicView/Button'))
const IconView = lazy(() => import('@/views/PublicView/Icon'))

// 导航
const DropdownView = lazy(() => import('@/views/NavView/Dropdown'))
const MenuView = lazy(() => import('@/views/NavView/Menu'))
const StepView = lazy(() => import('@/views/NavView/Step'))

// 表单
const FormBaseView = lazy(() => import('@/views/FormView/FormBaseView'))
const FormStepView = lazy(() => import('@/views/FormView/FormStepView'))

// 展示
const TableView = lazy(() => import('@/views/ShowView/Table'))
const CollapseView = lazy(() => import('@/views/ShowView/Collapse'))
const TreeView = lazy(() => import('@/views/ShowView/Tree'))
const TabsView = lazy(() => import('@/views/ShowView/Tabs'))

// 其它
const ProgressView = lazy(() => import('@/views/Others/Progress'))
const AnimationView = lazy(() => import('@/views/Others/Animation'))
const EditorView = lazy(() => import('@/views/Others/Editor'))
const UploadView = lazy(() => import('@/views/Others/Upload'))

const Three = lazy(() => import('@/views/TestView'))
const About = lazy(() => import('@/views/About'))

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
  { path: '/public/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
  { path: '/public/icon', exact: false, name: '图标', component: IconView, auth: [1] },
  { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
  { path: '/nav/menu', exact: false, name: '下拉菜单', component: MenuView },
  { path: '/nav/steps', exact: false, name: '步骤条', component: StepView },
  { path: '/form/base-form', exact: false, name: '表单', component: FormBaseView },
  { path: '/form/step-form', exact: false, name: '表单', component: FormStepView },
  { path: '/show/table', exact: false, name: '表格', component: TableView },
  { path: '/show/collapse', exact: false, name: '折叠面板', component: CollapseView },
  { path: '/show/tree', exact: false, name: '树形控件', component: TreeView },
  { path: '/show/tabs', exact: false, name: '标签页', component: TabsView },
  { path: '/others/progress', exact: false, name: '进度条', component: ProgressView, auth: [1] },
  { path: '/others/animation', exact: false, name: '动画', component: AnimationView, auth: [1] },
  { path: '/others/editor', exact: false, name: '富文本', component: EditorView, auth: [1] },
  { path: '/others/upload', exact: false, name: '上传', component: UploadView, auth: [1] },
  { path: '/one/two/three', exact: false, name: '三级', component: Three },
  { path: '/about', exact: false, name: '关于', component: About, auth: [1] }
]

export default routes
