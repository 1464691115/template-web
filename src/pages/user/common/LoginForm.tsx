// @ts-ignore
import React, { CSSProperties, useEffect } from 'react'
import styles from './index.less'
import { LoginForm } from '@ant-design/pro-form';
import IconTitle from '@/layout/IconTitle';

interface Props extends GlobalComponentsPropsType {
    style?: CSSProperties
}

export default function (props: Props) {
    return <div className={styles['login-form-wrap']}>
        <LoginForm>
            <IconTitle />
        </LoginForm>
    </div>
}


