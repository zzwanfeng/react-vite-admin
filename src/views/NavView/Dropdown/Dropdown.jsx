import React from 'react'
import { Layout, Divider, Menu, Dropdown, Row, Col, message, Button } from 'antd'
import { iconToElement } from '@/utils/util'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/dropdown.scss'

const { SubMenu } = Menu

const menuOnClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const items = [
  {
    label: '1st menu item',
    key: '0',
  },
  {
    label: '2st menu item',
    key: '1',
  },
  {
    label: '3rd menu item (disabled)',
    key: '2',
    disabled: true,
  },
  {
    label: 'sub menu',
    key: '3',
    children: [
      {
        label: '4rd menu item',
        key: '4'
      },
      {
        label: '5rd menu item',
        key: '5'
      }
    ],
  },
];

const menu = (
  <Menu
    onClick={menuOnClick}
    items={items}
  />
)

function handleButtonClick (e) {
  message.info('Click on left button.')
  console.log('click left button', e)
}

const DropdownView = () => (
  <Layout className='animated fadeIn'>
    <div>
      <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
    </div>
    <div className='base-style'>
      <h3>何时使用</h3>
      <Divider />
      <p>
        当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
      </p>
    </div>
    <Row gutter={8}>
      <Col span={8}>
        <div className='base-style'>
          <Dropdown overlay={menu}>
            <Button type='link' className="r-flex aic">
              Hover me
              {iconToElement('DownOutlined', { fontSize: '2rem' })}
            </Button>
          </Dropdown>
        </div>
        <div className='base-style'>
          <Dropdown overlay={menu} placement='bottomLeft'>
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement='bottom'>
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement='bottomRight'>
            <Button>bottomRight</Button>
          </Dropdown>
          <br />
          <Dropdown overlay={menu} placement='topLeft'>
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement='top'>
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement='topRight'>
            <Button>topRight</Button>
          </Dropdown>
        </div>
      </Col>
      <Col span={8}>
        <div className='base-style'>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type='link' className="r-flex aic">
              Click me
              {iconToElement('DownOutlined', { fontSize: '2rem' })}
            </Button>
          </Dropdown>
        </div>
      </Col>
      <Col span={8}>
        <div className='base-style'>
          <div id='components-dropdown-demo-dropdown-button'>
            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
              Dropdown
            </Dropdown.Button>
            <Dropdown.Button overlay={menu} icon={iconToElement('UserOutlined', { fontSize: '2rem' })}>
              Dropdown
            </Dropdown.Button>
            <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
              Dropdown
            </Dropdown.Button>
            <Dropdown overlay={menu}>
              <Button className="r-flex aic">
                Button
                {iconToElement('DownOutlined', { fontSize: '2rem' })}
              </Button>
            </Dropdown>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default DropdownView
