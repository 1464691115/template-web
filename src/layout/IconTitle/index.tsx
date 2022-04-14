// @ts-ignore
import React, { } from 'react';
import styles from './index.less';
import { Image } from 'antd';
export interface IconTitleProps extends GlobalComponentsPropsType { }

/** logo标题 */
const IconTitle: React.FC<IconTitleProps> = (_props) => {
    return (
        <div className={styles['icon-title-wrap']}>
            <Image src={require('/public/logo.svg')} width={64} preview={false} />
            <Image
                src={require('@/assets/SenSwb-Title.png')}
                width={180}
                preview={false}
                className={styles['icon-title-text']}
            />
        </div>
    );
};

export default IconTitle;
