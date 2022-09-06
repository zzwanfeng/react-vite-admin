import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { iconToElement } from '@/utils/util'


// 处理 pathname
const getOpenKeys = string => {
  let newStr = '',
    newArr = [],
    arr = string.split('/').map(i => '/' + i)
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i]
    newArr.push(newStr)
  }
  return newArr
}

const CustomMenu = props => {
  const [state, setstate] = useState({
    openKeys: [],
    selectedKeys: []
  })

  let { openKeys, selectedKeys } = state

  // 页面刷新的时候可以定位到 menu 显示
  useEffect(() => {
    let { pathname } = props.location
    setstate(prevState => {
      return {
        ...prevState,
        selectedKeys: [pathname],
        openKeys: getOpenKeys(pathname)
      }
    })
  }, [props])

  // 只展开一个 SubMenu
  const onOpenChange = openKeys => {
    setstate(prevState => {
      if (openKeys.length === 0 || openKeys.length === 1) {
        return { ...prevState, openKeys }
      }
      const latestOpenKey = openKeys[openKeys.length - 1]

      // 这里与定义的路由规则有关
      if (latestOpenKey.includes(openKeys[0])) {
        return { ...prevState, openKeys }
      } else {
        return { ...prevState, openKeys: [latestOpenKey] }
      }
    })
  }

  // 处理下路由
  const menuFormatting = (value) => {
    const newObject = {
      label: value.title,
      key: value.key,
      icon: '',
      children: menuChilderFormatting(value.subs),
    }

    if (value.icon && value.icon !== '') {
      newObject.icon = iconToElement(value.icon)
    }
    return newObject
  }

  // 处理路由-子路由
  const menuChilderFormatting = (value) => {
    const newArr = value && value.map(item => {
      return menuFormatting(item)
    })
    return newArr
  }

  // 选中菜单
  const handleSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    props.history.push(key);
  }

  return (
    <Menu
      mode='inline'
      theme='dark'
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onClick={({ key }) => setstate(prevState => ({ ...prevState, selectedKeys: [key] }))}
      onOpenChange={onOpenChange}
      onSelect={handleSelect}
      items={props.menu && props.menu.map(item => {
        return menuFormatting(item)
      })}
    >
    </Menu>
  )
}

CustomMenu.propTypes = {
  menu: PropTypes.array.isRequired
}

export default withRouter(CustomMenu)
