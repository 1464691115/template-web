import React from 'react';
import './index.less';
import classNames from 'classnames';
import { Image } from 'antd';
import setting from '@config/setting';

import LoginForm from '../common/LoginForm';
import Flex from '@/components/Flex';

const Login: React.FC = () => {
  return (
    <div className={'login-container'}>
      <div className={classNames({ ['con-back']: true })}></div>
      <div className={classNames({ ['con-back']: true })}>
        <Flex style={{ flex: 1 }} AI={'center'}>
          <Image
            src={require('@/assets/images/login-indicate.png')}
            preview={false}
            width={450}
            height={317.69}
          />
        </Flex>

        <div className={'login-descript'}>
          <p className={'l-title'}>Welcome to join {setting.title}</p>
          <p className={'l-des'}>
            {setting.title} is a tool for software engineers focused on visual layout. Our goal is
            to generate low-coupling, highly cohesive Apps & Web for each framework through custom
            component encapsulation.
          </p>
        </div>
      </div>
      <div className={classNames({ ['con-wrap']: true })}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
