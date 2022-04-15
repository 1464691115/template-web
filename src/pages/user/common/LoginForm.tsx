// @ts-ignore
import React, { CSSProperties, useEffect, useState } from 'react';
import './index.less';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Alert, message, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import type { loginParamsType, userLoginType } from 'typings/entity/user';
import IconTitle from '@/layout/IconTitle';
import { history, useModel, useSelector } from 'umi';
import { login } from '@/services/ant-design-pro/api';

interface Props extends GlobalComponentsPropsType {
  style?: CSSProperties;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

export default function (props: Props) {
  const [userLoginState, setUserLoginState] = useState<Partial<API.LoginResult>>({});
  const [loginType, setLoginType] = useState<userLoginType>('login');
  const { initialState, setInitialState } = useModel('@@initialState')

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type: 'account' });
      if (msg.status === 'ok') {
        message.success('登录成功！');
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };

  const { status } = userLoginState;

  return (
    <div className={'login-form-wrap'}>
      <LoginForm<loginParamsType>
        subTitle={<IconTitle />}
        onFinish={async (values) => {
          await handleSubmit(values);
        }}
      >
        <Tabs activeKey={loginType} onChange={setLoginType as any}>
          <Tabs.TabPane key={'login'} tab={'登录'} />
          {/* <Tabs.TabPane key={'register'} tab={'注册'} /> */}
        </Tabs>

        {status === 'error' && <LoginMessage content={'账户或密码错误'} />}
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Your userName'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Your password'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a style={{ float: 'right' }}>忘记密码</a>
        </div>
      </LoginForm>
    </div>
  );
}
