import React, { useState } from 'react'
import { Layout, Divider, Row, Col, Button, Tabs } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/animation.scss'

const { TabPane } = Tabs
const typeIn = [
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'fadeIn',
  'fadeInDown',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'flipInX',
  'flipInY',
  'rotateIn'
]
const typeOut = [
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeInDown',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'rotateOut'
]
const typeOther = [
  'bounceIn',
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello'
]


const AnimationView = () => {
  const [fontType, setFontType] = useState('animated bounceInRight')


  const Access = () => {
    return (
      <div>
        {
          typeIn.map((v, i) => (
            <Button
              type='primary'
              size='small'
              key={i}
              onClick={() => setFontType(`animated ${v}`)}
              ghost>
              {v}
            </Button>
          ))
        }
      </div>
    )
  }

  const ExitView = () => {
    return (
      <div>
        {typeOut.map((v, i) => (
          <Button
            type='primary'
            size='small'
            key={i}
            onClick={() => setFontType(`animated ${v}`)}
            ghost>
            {v}
          </Button>
        ))}
      </div>
    )
  }

  const Other = () => {
    return (
      <div>
        {typeOther.map((v, i) => (
          <Button
            type='primary'
            size='small'
            key={i}
            onClick={() => setFontType(`animated ${v}`)}
            ghost>
            {v}
          </Button>
        ))}
      </div>
    )
  }

  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['其他', '动画']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider />
        <p>当页面需要动态效果时。</p>
      </div>

      <Row gutter={8} style={{ marginTop: '3rem' }}>
        <Col span={10}>
          <Tabs
            type='card'
            tabPosition='left'
            defaultActiveKey="1"
            items={[
              {
                label: `进场`,
                key: '1',
                children: <Access></Access>,
              },
              {
                label: `退场`,
                key: '2',
                children: <ExitView></ExitView>,
              },
              {
                label: `其它`,
                key: '3',
                children: <Other></Other>,
              },
            ]}
          />
        </Col>

        <Col span={14}>
          <div style={{ fontSize: '4.8rem', textAlign: 'center', padding: '2rem' }} className={fontType}>
            Animate.css
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default AnimationView
