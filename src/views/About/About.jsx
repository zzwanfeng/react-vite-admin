import React from 'react'
import { Layout, Divider, Row, Descriptions, Badge } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import ProjectConfigJson from '../../../package.json'


const { dependencies, devDependencies } = ProjectConfigJson
const DependenciesArr = []
const DevDependenciesArr = []

Object.keys(dependencies).forEach(key => {
  const dependenciesObj = { name: '', version: '' }
  dependenciesObj.name = key
  dependenciesObj.version = dependencies[key]
  DependenciesArr.push(dependenciesObj)
})

Object.keys(devDependencies).forEach(key => {
  const dependenciesObj = { name: '', version: '' }
  dependenciesObj.name = key
  dependenciesObj.version = devDependencies[key]
  DevDependenciesArr.push(dependenciesObj)
})
console.log('DependenciesArr', DependenciesArr);
console.log('DevDependenciesArr', DevDependenciesArr);


const DependenciesView = () => {
  return (
    <Descriptions
      title="生产环境依赖"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      {
        DependenciesArr && DependenciesArr.map((item, index) => {
          return (
            <Descriptions.Item label={item.name} key={`'Dep' + ${index}`} > {item.version}</Descriptions.Item>
          )
        })
      }
    </Descriptions>
  )
}

const DevDependenciesView = () => {
  return (
    <Descriptions
      title="开发环境依赖"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      {
        DevDependenciesArr && DevDependenciesArr.map((item, index) => {
          return (
            <Descriptions.Item label={item.name} key={`'Dep' + ${index}`} > {item.version}</Descriptions.Item>
          )
        })
      }
    </Descriptions>
  )
}


const AboutView = () => {

  return (
    <Layout>
      <div>
        <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
      </div>

      <div className='base-style'>
        <h3>关于作者</h3>
        <Divider />
        <p>这个人很懒，什么都没有留下……</p>
      </div>

      <div className='base-style'>
        <DependenciesView></DependenciesView>
      </div>

      <div className='base-style'>
        <DevDependenciesView></DevDependenciesView>
      </div>
    </Layout>
  )
}

export default AboutView
