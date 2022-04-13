// @ts-ignore
import React, { useEffect, CSSProperties } from 'react';
import classNames from 'classnames';

export interface FlexProps extends GlobalComponentsPropsType {
  style?: CSSProperties;
  /** 侧轴 排放方式 */
  AI?: CSSProperties['alignItems'];
  /** 主轴 排放方式 */
  JC?: CSSProperties['justifyContent'];
  /** 主轴 方向 */
  FD?: CSSProperties['flexDirection'];
}

/** Flex 组件 */
const Flex: React.FC<FlexProps> = (props) => {
  return (
    <div
      className={classNames({ [props.className || '']: true })}
      style={{
        display: 'flex',
        flexDirection: props.FD || 'row',
        alignItems: props.AI || 'flex-start',
        justifyContent: props.JC || 'flex-start',
        ...(props.style || {}),
      }}
    >
      {props.children}
    </div>
  );
};

export default Flex;
