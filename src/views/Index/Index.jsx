import React from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

import BarEcharts from './bar.jsx'
import PieEcharts from './pie.jsx'
import LineEcharts from './line.jsx'
import ScatterEcharts from './scatter.jsx'
import PictorialBarEcharts from './pictorialBar.jsx'

import { iconToElement } from '@/utils/util'

const Index = () => {
  const fullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.request(document.getElementById('bar'))
    }
  }
  return (
    <Layout className='index animated fadeIn'>
      <Row gutter={24} className='index-header'>
        <Col span={6}>
          <div className='base-style wechat'>
            {iconToElement('WechatOutlined', { fontSize: '5rem' })}
            <div>
              <span>999</span>
              <div>微信</div>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div className='base-style qq'>
            {iconToElement('QqOutlined', { fontSize: '5rem' })}
            <div>
              <span>366</span>
              <div>QQ</div>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div className='base-style dingding'>
            {iconToElement('DingdingOutlined', { fontSize: '5rem' })}
            <div>
              <span>666</span>
              <div>钉钉</div>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div className='base-style weibo'>
            {iconToElement('WeiboOutlined', { fontSize: '5rem' })}
            <div>
              <span>689</span>
              <div>微博</div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className='base-style'>
            <div className='bar-header'>
              <div>图形全屏展示</div>
              <span
                style={{ cursor: 'pointer' }}
                onClick={fullToggle}
              >
                {iconToElement('FullscreenOutlined', { fontSize: '2rem' })}
              </span>
            </div>
            <Divider />
            <BarEcharts />
          </div>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={12}>
          <div className='base-style'>
            <LineEcharts />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <PieEcharts />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <ScatterEcharts />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <PictorialBarEcharts />
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Index
