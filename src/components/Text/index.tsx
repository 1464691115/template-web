// @ts-ignore
import React, { CSSProperties } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useDebounceFn } from 'ahooks';

export type Props<IP extends boolean> = {
  style?: CSSProperties;
  isPress?: IP;
  /** 是否禁用 */
  isDisable?: true | FALSE_TYPE;
  /** 取消防抖 */
  isDebounce?: boolean | null | '';
} & GlobalComponentsPropsType &
  (IP extends true ? { onClick?: () => any } : {});

function Text<IP extends boolean = false>(props: Props<IP>) {
  const handleClick = useDebounceFn(
    () => {
      if (props.isPress !== true) return;
      // @ts-ignore
      props.isDisable !== true && props.onClick();
    },
    { wait: props.isDebounce === true ? 0 : 500, leading: true, trailing: false },
  );

  return (
    <span
      className={classNames({
        'sen-text': true,
        'sen-text-disable': props.isDisable,
        [props.className || '']: true,
      })}
      style={props.style}
      onClick={handleClick.run}
    >
      {props.children}
    </span>
  );
}

export default Text;
