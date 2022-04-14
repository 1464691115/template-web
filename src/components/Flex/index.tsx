// @ts-ignore
import React, { useEffect, useMemo } from 'react';
import type { CSSProperties } from 'react'
import classNames from 'classnames';
import { numberToArray } from '@/utils';

export interface FlexProps extends GlobalComponentsPropsType {
  style?: CSSProperties;
  /** 侧轴 排放方式 */
  AI?: CSSProperties['alignItems'];
  /** 主轴 排放方式 */
  JC?: CSSProperties['justifyContent'];
  /** 主轴 方向 */
  FD?: CSSProperties['flexDirection'];
  /** 是否换行 */
  FW?: CSSProperties['flexWrap'];
  /** 子项的间距 传number是 上下左右；传数组是 上下、左右 */
  gutter?: number | [number, number]
}

/** Flex 组件 */
const Flex: React.FC<FlexProps> = (props) => {
  /** 格栅间距 */
  const gutterMemo = useMemo(() => {
    if (!props.gutter) return [0, 0]
    return typeof props.gutter == 'number' ? numberToArray(2, props.gutter / 2) : props.gutter.map(el => el / 2)
  }, [props.gutter])

  const flattenChildren = useMemo(() => {
    function recursion(arr, ind) {
      return arr.length ? arr.map((el, jd) => recursion(el, ind + 'recur' + jd)) : React.cloneElement(arr, {
        style: {
          margin: gutterMemo.map(el => `${el}px`).join(' '),
          ...(arr.props.style || {})
        }, key: ind
      })

    }

    return props.children &&
      props.children.length ?
      recursion(props.children, 0) :
      props.children
  }, [props.children, gutterMemo])


  return (
    <div
      className={classNames({ [props.className || '']: true })}
      style={{
        display: 'flex',
        flexDirection: props.FD,
        alignItems: props.AI,
        justifyContent: props.JC,
        flexWrap: props.FW,
        margin: gutterMemo.map(el => `-${el}px`).join(' '),
        ...(props.style || {}),
      }}
    >
      {
        flattenChildren
      }
    </div>
  );
};

export default Flex;
