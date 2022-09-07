import React, { useState } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col } from 'antd'
import { iconToElement } from '@/utils/util'
import BaseTree from './components/BaseTree'
import SearchTree from './components/SearchTree'
import ControlledTree from './components/ControlledTree'
import DragTree from './components/DragTree'


const TreeView = () => {
  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['展示', '树形控件']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider />
        <p>
          文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件
          可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
        </p>
      </div>

      <Row gutter={8}>
        <Col span={12}>
          <BaseTree></BaseTree>
        </Col>

        <Col span={12}>
          <SearchTree></SearchTree>
        </Col>

        <Col span={12}>
          <ControlledTree></ControlledTree>
        </Col>

        <Col span={12}>
          <DragTree></DragTree>
        </Col>
      </Row>
    </Layout>
  )
}

export default TreeView
