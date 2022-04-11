import React, { } from 'react';
import './index.less';
import classNames from 'classnames'
import { Image } from 'antd';
import Settings from '@config/defaultSettings';

import LoginForm from '../common/LoginForm';


const Login: React.FC = () => {

  return (
    <div className={'login-container'}>
      <div className={classNames({ ['con-back']: true })}>
      </div>
      <div className={classNames({ ['con-back']: true })}>
        <Image src={require('@/assets/images/login-indicate.png')} preview={false} width={500} />

        <div className={'login-descript'}>
          <p className={'l-title'}>欢迎使用 {Settings.title}</p>
          <p className={'l-des'}>{Settings.title} 是软件工程师专注于视觉布局的工具。我们的目标是通过自定义组件封装来生成各个框架低耦合高内聚的App&Web。</p>
        </div>
      </div>
      <div className={classNames({ ['content']: true })}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
