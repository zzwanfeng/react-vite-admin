import React from 'react';
import * as ReactDOM from 'react-dom';
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider } from 'antd'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

// 其它编辑器 支持node14+
// react-markdown-editor-lite
// https://github.com/HarryChen0506/react-markdown-editor-lite
// braft-editor
// https://github.com/margox/braft-editor


// 当前使用 支持node16.15.0
// simplemde - markdown - editor
// https://github.com/sparksuite/simplemde-markdown-editor


// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
// const mdParser = new MarkdownIt(/* Markdown-it options */);

const EditorView = (props) => {
  const value = '这是一个富文本编辑器'
  const handleChange = (value) => {
    console.log('value', value)
  }

  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['其他', '富文本']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>何时使用</h3>
        <Divider />
        <p>
          当用户需要一些特定输入时，此页面使用的富文本编辑器是
          <a target='_blank' href='https://github.com/sparksuite/simplemde-markdown-editor'>simplemde-markdown-editor</a>
        </p>
      </div>

      <SimpleMDE
        id="your-custom-id"
        value={value}
        options={{
          spellChecker: false,
          toolbar: [
            'bold',
            'italic',
            'heading',
            '|',
            'quote',
            'code',
            'table',
            'horizontal-rule',
            'unordered-list',
            'ordered-list',
            '|',
            'link',
            'image',
            '|',
            'side-by-side',
            'fullscreen',
            '|',
            'guide'
          ]
        }}
        onChange={handleChange}
      />
    </Layout>
  )
}

export default EditorView