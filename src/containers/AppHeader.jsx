import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar, Badge } from 'antd'
import { iconToElement } from '@/utils/util'

const { Header } = Layout

const AppHeader = props => {
  let { menuClick, avatar, menuToggle, loginOut } = props

  const items = [
    {
      label: '用户设置',
      key: 'item-1',
      type: 'group',
      children: [
        {
          label: '个人设置',
          key: 'submenu-item-1'
        },
        {
          label: '系统设置',
          key: 'submenu-item-2'
        }
      ],
    },
    {
      label: '退出登录',
      key: 'item-2',
    },
  ];

  const menuOnClick = ({ key }) => {
    if (key === 'item-2') {
      loginOut()
    }
  };

  const menu = (
    <Menu
      onClick={menuOnClick}
      items={items}
    />
  )

  return (
    <Header className='header'>
      <div className='left'>
        <span
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          onClick={menuClick}
        >
          {menuToggle ? iconToElement('MenuUnfoldOutlined', { fontSize: '2rem' }) : iconToElement('MenuFoldOutlined', { fontSize: '2rem' })}
        </span>
      </div>

      <div className='right'>
        <div className='mr15'>
          <a rel='noopener noreferrer' href='https://github.com/zzhStrive/react-vite-admin' target='_blank'>
            <span style={{ color: '#000' }}>
              {iconToElement('GithubOutlined', { fontSize: '2rem' }, { twoToneColor: "#eb2f96" })}
            </span>
          </a>
        </div>

        <div className='mr15'>
          {/* Badge 徽标数 严格模式下目前会报错 */}
          {/* <Badge dot={true} offset={[-2, 0]}> */}
          <a href='https://github.com/zzhStrive/react-vite-admin' style={{ color: '#000' }}>
            {iconToElement('BellOutlined', { fontSize: '2rem' })}
          </a>
          {/* </Badge> */}
        </div>

        <div>
          <Dropdown
            overlay={menu}
            overlayStyle={{ width: '20rem' }}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className='ant-dropdown-link'
            >
              <Avatar icon={iconToElement('UserOutlined', { fontSize: '2rem' })} src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

AppHeader.propTypes = {
  menuClick: PropTypes.func,
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  loginOut: PropTypes.func
}

export default AppHeader
