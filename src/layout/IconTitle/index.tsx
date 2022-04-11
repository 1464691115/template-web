// @ts-ignore
import { Image } from 'antd'
import React, { CSSProperties } from 'react'
import styles from './index.less'

interface Props extends GlobalComponentsPropsType {
    style?: CSSProperties
}

export default function (_props: Props) {
    return <div className={styles['icon-title-wrap']}>
        <Image src={require('/public/logo.svg')} width={64} preview={false}></Image>
    </div>
}


