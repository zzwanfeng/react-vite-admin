import React, { useState } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import {
  Alert,
  Layout,
  Row,
  Col,
  Divider,
  Form,
  Button,
  Input,
  InputNumber,
  Checkbox,
  Tooltip,
  Cascader,
  Select,
  DatePicker,
  Radio,
  Rate,
  Switch,
  Slider,
  AutoComplete,
  message
} from 'antd'
import '@/style/view-style/form.scss'
import {
  UserOutlined,
  UnlockOutlined,
  ConsoleSqlOutlined
} from '@ant-design/icons';

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

// 住址
const residences = [
  {
    value: 'sichuan',
    label: '四川',
    children: [
      {
        value: 'chengdu',
        label: '成都',
        children: [
          {
            value: 'gaoxin',
            label: '高新区'
          }
        ]
      }
    ]
  },
  {
    value: 'gansu',
    label: '甘肃',
    children: [
      {
        value: 'lanzhou',
        label: '兰州',
        children: [
          {
            value: 'anning',
            label: '安宁区'
          }
        ]
      }
    ]
  }
]

const FromView = props => {
  const [confirmDirty, setConfirmDirty] = useState(false)
  const [autoCompleteResult, setAutoCompleteResult] = useState([])
  const [visible, setVisible] = useState(true)
  // AutoComplete 邮箱自动完成
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const [form] = Form.useForm();
  const switchValue = Form.useWatch('switch', form)
  const agreementValue = Form.useWatch('agreement', form)

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (err) return
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'] ? fieldsValue['date-picker'].format('YYYY-MM-DD') : ''
      }
      console.log('这就是你填好的数据' + values)
      message.info('你很棒哦,这么快就填好了!')
    })
  }


  // AutoComplete 邮箱自动完成
  const mockVal = (str) => {
    let autoCompleteResult
    autoCompleteResult = ['@google.com', '@163.com', '@qq.com'].map(domain => {
      return { value: `${str}${domain}` }
    })
    return autoCompleteResult
  }

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : mockVal(searchText),
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };


  // 整体布局
  const formItemLayout = {
    labelCol: {
      xs: { span: 16 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 16 },
      sm: { span: 10 }
    }
  }

  // item针对布局
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 16,
        offset: 0
      },
      sm: {
        span: 10,
        offset: 6
      }
    }
  }

  // 联系电话
  const prefixSelector = (
    <Form.Item name="prefix"
      noStyle
      initialValue={'86'}
    >
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['表单', '基础表单']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider></Divider>
        <p>用于创建一个实体或收集信息。</p>
        <p>需要对输入的数据类型进行校验时。</p>
      </div>

      <Row>
        <Col span={24}>
          <div className='base-style'>
            <div>
              {visible ? (
                <Alert
                  message='你最好认真的填写表单!'
                  type='warning'
                  closable
                  banner
                  afterClose={() => setVisible(false)}
                />
              ) : null}
            </div>
            <Divider orientation='left'>基础功能</Divider>
            <Form
              form={form}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >

              <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='用户名'
                />
              </Form.Item>

              <Form.Item label="性别" name="sex" rules={[{ required: true, message: '请选择性别!' }]}>
                <Radio.Group>
                  <Radio value='man'>男</Radio>
                  <Radio value='women'>女</Radio>
                  <Radio value='unknow'>不详</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="爱好" name="hobby" rules={[{ required: true, message: '请至少选择一个爱好!' }]} initialValue={['A', 'B']}>
                <Checkbox.Group style={{ width: '100%' }}>
                  <Row>
                    <Col span={8}>
                      <Checkbox value='A'>A</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox disabled value='B'>
                        B
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='C'>C</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label="年龄" name="age" rules={[{ required: true, message: '请输入年龄!' }]}>
                <InputNumber placeholder='请输入年龄' style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="出生年月" name="date-picker" rules={[{ type: 'object', required: true, message: '请选择日期!' }]}>
                <DatePicker style={{ width: '100%' }} placeholder='请选择日期' />
              </Form.Item>

              <Form.Item
                label="邮箱"
                name="email" rules={[
                  {
                    type: 'email',
                    message: '请输入正确的邮箱!'
                  },
                  {
                    required: true,
                    message: '请输入邮箱'
                  }
                ]}>
                <AutoComplete
                  value={value}
                  options={options}
                  onSelect={onSelect}
                  onSearch={onSearch}
                  onChange={onChange}
                  placeholder='请输入邮箱'
                >
                  <Input />
                </AutoComplete>
              </Form.Item>

              <Form.Item
                label="密码"
                hasFeedback
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!'
                  },
                ]}>
                <Input.Password placeholder='请输入密码' />
              </Form.Item>

              <Form.Item
                label="确认密码"
                hasFeedback
                name="confirm"
                rules={[
                  {
                    required: true,
                    message: '请确认密码!'
                  },
                  ({ getFieldValue }) => ({
                    validator (_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('两次输入密码不一致!'));
                    },
                  }),
                ]}>
                <Input.Password
                  onBlur={e =>
                    setConfirmDirty(() => (confirmDirty ? confirmDirty : !!e.target.value))
                  }
                  placeholder='请确认密码'
                />
              </Form.Item>

              <Form.Item
                label="家庭住址"
                name="adress"
                rules={[{ type: 'array', required: true, message: '请选择住址!' }]}
                initialValue={['sichuan', 'chengdu', 'gaoxin']}
              >
                <Cascader options={residences} placeholder='请选择住址' />
              </Form.Item>

              <Form.Item
                label="联系电话"
                name="phone"
                rules={[{ required: true, message: '请填写电话号码!' }]}
              >
                <Input addonBefore={prefixSelector} />
              </Form.Item>

              <Form.Item
                label="评分"
                extra='这个项目怎么样.'
                name="rate"
                initialValue={5}
              >
                <Rate disabled allowHalf />
              </Form.Item>

              <Form.Item
                label="switch"
                name="switch"
                initialValue={true}
                valuePropName={'checked'}
              >
                <Switch />
              </Form.Item>

              <Form.Item
                label="slider"
                name="slider"
                initialValue={30}
              >
                <Slider
                  disabled={!switchValue} />
              </Form.Item>

              <Form.Item
                name="agreement"
                {...tailFormItemLayout}
                valuePropName={'checked'}
              >
                <Checkbox>
                  阅读并理解 <a target='_blank' href='https://github.com/zzhStrive/react-vite-admin'>此协议</a>
                </Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type='primary'
                  htmlType='submit'
                  disabled={!agreementValue}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}


export default FromView
