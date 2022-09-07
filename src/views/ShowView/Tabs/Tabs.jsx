import React from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col } from 'antd'
import BaseTabs from './components/BaseTabs'
import SizeTabs from './components/SizeTabs'
import LocationTabs from './components/LocationTabs'
import AddTabs from './components/AddTabs'

const TabsViews = () => {
  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['展示', '标签页']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider />
        <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁</p>
        <p>Ant Design 依次提供了三级选项卡，分别用于不同的场景</p>
        <p>- 卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
        <p>- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</p>
        <p>- RadioButton 可作为更次级的页签来使用。</p>
      </div>

      <Row gutter={8}>
        <Col span={12}>
          <div className='base-style'>
            <Divider orientation='left'>基础</Divider>
            <BaseTabs></BaseTabs>
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider orientation='left'>控制大小</Divider>
            <SizeTabs></SizeTabs>
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider orientation='left'>控制显示位置</Divider>
            <LocationTabs></LocationTabs>
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider orientation='left'>可增加删除</Divider>
            <AddTabs></AddTabs>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default TabsViews
