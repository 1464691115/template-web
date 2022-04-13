// @ts-ignore
import React, { useEffect } from 'react';
import styles from './index.less';
import { Image } from 'antd';
export interface IconTitleProps extends GlobalComponentsPropsType {}

/** logo标题 */
const IconTitle: React.FC<IconTitleProps> = (props) => {
  return (
    <div className={styles['icon-title-wrap']}>
      <Image src={require('/public/logo.svg')} width={64} preview={false}></Image>
      <Image
        src={require('@/assets/SenSwb-Title.png')}
        width={180}
        preview={false}
        className={styles['icon-title-text']}
      ></Image>
    </div>
  );
};

export default IconTitle;
