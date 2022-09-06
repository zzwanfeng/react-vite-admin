import React from 'react'
import * as Icon from "@ant-design/icons"


// 编写生成ReactNode的方法
// rotate = 0, spin = false, className = '',
export const iconToElement = (name, style, other = {}) => {
  const { twoToneColor, rotate, component } = other
  return React.createElement(Icon && Icon[name], {
    twoToneColor,
    rotate,
    component,
    style
  })

}