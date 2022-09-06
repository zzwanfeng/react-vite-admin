import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import CustomMenu from '@/components/CustomMenu'
import { iconToElement } from '@/utils/util'

const { Sider } = Layout


const AppAside = props => {
  let { menuToggle, menu } = props
  return (
    <Sider className='aside' collapsed={menuToggle}>
      <div className='logo'>
        <a rel='noopener noreferrer' href='https://github.com/zzhStrive/react-vite-admin' target='_blank'
          style={{ color: '#fff' }}
        >
          {iconToElement('GithubOutlined', { fontSize: '3rem' })}
        </a>
      </div>
      <CustomMenu menu={menu}></CustomMenu>
    </Sider>
  )
}

AppAside.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
}

export default AppAside
