import React, { useState } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Row, Col, Button, Divider } from 'antd'
import '@/style/view-style/button.scss'
import { iconToElement } from '@/utils/util'

const ButtonGroup = Button.Group

const ButtonView = () => {
  const [loading, setloading] = useState(false)
  const [iconLoading, setIconLoading] = useState(false)
  return (
    <Layout className='button animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['通用', '按钮']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider />
        <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
      </div>
      <div>
        <Row gutter={8}>
          <Col span={12}>
            <div className='base-style'>
              <Button type='primary'>Primary</Button>
              <Button>Default</Button>
              <Button type='dashed'>Dashed</Button>
              <Button type='danger'>Danger</Button>
              <Button type='link'>Link</Button>
            </div>
            <div className='base-style'>
              <Button type='primary' loading>
                Loading
              </Button>
              <Button type='primary' size='small' loading>
                Loading
              </Button>
              <Button type='primary' loading={loading} onClick={() => setloading(true)}>
                Click me!
              </Button>
              <Button
                type='primary'
                icon={iconToElement('PoweroffOutlined')}
                loading={iconLoading}
                onClick={() => setIconLoading(true)}>
                Click me!
              </Button>
              <Button type='primary' loading />
              <Button type='primary' shape='circle' loading />
              <Button type='danger' shape='round' loading />
            </div>
            <div className='base-style'>
              <h4>Basic</h4>
              <ButtonGroup>
                <Button>large</Button>
                <Button>small</Button>
                <Button>mini</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
              </ButtonGroup>

              <h4>With Icon</h4>
              <ButtonGroup>
                <Button type='primary' className="r-flex aic">
                  {iconToElement('LeftOutlined')}
                  Go back
                </Button>

                <Button type='primary' className="r-flex aic">
                  Go forward
                  {iconToElement('RightOutlined')}
                </Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  type='primary'
                  icon={iconToElement('CloudOutlined')}
                />
                <Button
                  type='primary'
                  icon={iconToElement('CloudDownloadOutlined')}
                />
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  type='primary'
                  size='small'
                  icon={iconToElement('CloudOutlined')}
                />
                <Button
                  type='primary'
                  size='small'
                  icon={iconToElement('CloudDownloadOutlined')}
                />
              </ButtonGroup>
            </div>
          </Col>

          <Col span={12}>
            <div className='base-style r-flex aic'>
              <Button
                type='primary'
                shape='circle'
                icon='search'
                icon={iconToElement('SearchOutlined', { fontSize: '1.5rem' })}
              />

              <Button type='primary' shape='circle'>
                A
              </Button>

              <Button
                type='primary'
                icon={iconToElement('SearchOutlined', { fontSize: '1.3rem' })}
              >
                Search
              </Button>

              <Button
                shape='circle'
                icon={iconToElement('SearchOutlined', { fontSize: '1.5rem' })}
              />

              <Button
                icon={iconToElement('SearchOutlined', { fontSize: '1.3rem' })}
              >Search</Button>

              <Button
                type='dashed'
                shape='circle'
                icon={iconToElement('SearchOutlined', { fontSize: '1.5rem' })}
              />

              <Button
                type='dashed'
                icon={iconToElement('SearchOutlined', { fontSize: '1.3rem' })}
              >
                Search
              </Button>
            </div>

            <div className='base-style'>
              <Button type='primary'>Primary</Button>
              <Button type='primary' disabled>
                Primary(disabled)
              </Button>
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
              <Button type='dashed'>Dashed</Button>
              <Button type='dashed' disabled>
                Dashed(disabled)
              </Button>
            </div>
            <div className='base-style'>
              <Button type='primary' block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button type='dashed' block>
                Dashed
              </Button>
              <Button type='danger' block>
                Danger
              </Button>
              <Button type='link' block>
                Link
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default ButtonView
