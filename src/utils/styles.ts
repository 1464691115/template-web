import theme from "~/config/defaultSettings"

/** 数组形式样式 */
export const ST_L = (el: (StyleItem | FALSE_TYPE)[] = []) => el.reduce<StyleItem>((pre, cur) => ({ ...pre, ...(typeof cur == 'object' ? cur : {}) }), {})

export const W_H_OP = (size: number | string) => ({ width: typeof size == 'string' ? size : `${size}px`, height: typeof size == 'string' ? size : `${size}px` }) as StyleItem

export function CreateStyle(s) { return s }



export const W_H_100: StyleItem = {
    width: '100%',
    height: '100%'
}

export const LINE = (height = "10px", backgroundColor = '#F2F3F5') => ({
    width: '100%',
    height,
    backgroundColor
}) as StyleItem

export const F_D_R: StyleItem = {
    display: 'flex',
    flexDirection: 'row'
}

export const F_R_C: StyleItem = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}

export const F_C_C: StyleItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Px = (num: number) => `${num}px`

export const PxToNum = (str: string) => +(str.split('px')[0] || 0)



/** 默认背景色 */
export const DEF_BG_C: StyleItem = {
    backgroundColor: '#f2f3f5'
}

/** 默认主题字体颜色 */
export const DEF_F_C: StyleItem = {
    color: theme.primaryColor
}

/** 默认主题背景颜色 */
export const DEF_C: StyleItem = {
    backgroundColor: theme.primaryColor
}
