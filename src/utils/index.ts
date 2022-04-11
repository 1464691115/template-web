export const CDN = 'cdn.biz.hugelink.cn'

/** 去除字符串中的空格 */
export function trim(val: string) {
    var str = val.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}


/** 图片地址的拼接 */
export function imageFormat(url: string, width?: 'w_800' | 'w_500' | 'w_100', isObj?: true): { uri: string }
export function imageFormat(url: string, width?: 'w_800' | 'w_500' | 'w_100', isObj?: false): string
export function imageFormat(url: string = '', width: 'w_800' | 'w_500' | 'w_100' = 'w_500', isObj = true) {
    let format_url = url || ''
    if (typeof url !== 'string') return format_url
    if (url.indexOf(CDN) == 0) format_url = `https://${url || ''}?x-image-process=image/resize,${width}`

    return isObj || url.includes('file://') ? { uri: format_url } : format_url
}


export function ps(data) {
    return JSON.parse(JSON.stringify(data))
}



export function deleteAdd(text = '') {
    if (!text || text[0] != '+') return text
    //李皓 2021-10-09 MLGBD，天天看这个日志报错，不烦吗
    return text.substring(3, 14)
}

/** number转换数组 */
export function numberToArray(num: number = 0, starStr = '') {
    return new Array(num).fill(starStr)
}

/** 判断是否为空数组 */
export function isEmptyArray(arr: any) {
    if (typeof arr == 'object' && !arr || !arr.length) return true
    return false
}

/** 判断对象是否有属性，有就返回，没有就返回空对象 */
export function isObject<T, D = any>(obj: T, keys: (keyof T)[], defaultVal?: D): any
export function isObject<T, D = any>(obj: T, keys: string, defaultVal?: D): any
export function isObject<T, D = any>(obj: T, keys: string | (keyof T)[], defaultVal: D = ({} as any)) {
    if (!obj || !keys) return defaultVal
    const _keys: any[] = typeof keys == 'string' ? keys.split('.') : keys

    if (_keys.length <= 1) return obj[0] ? obj[0] : defaultVal

    return _keys.reduce((pre, cur, i, arr) => {
        if (!!pre[cur]) return pre[cur]
        arr = []
        return defaultVal
    }, obj)
}

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export async function _PromiseFunctionTry(fn, err, fin?: () => void) {
    try {
        const res = await fn();
        return res;
    } catch (error) {
        err && err(error);
    } finally {
        fin && fin();
    }
}


/** 两位数相除保留N位小数 per：是否为百分比 */
export function numberToFixed(num1 = 1, num2 = 1, per = true) {
    if (!num2 || num2 === 0) return 0
    const result = Math.floor(num1 / num2 * 10000) / 100 / (per ? 1 : 100)
    return result || 0
}

/** 首字母大写 */
export function titleCase5(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}


export function stringLast(str) {
    return str[str.length - 1]
}


export function ObjectToParams(par) {
    return Object.keys(par).reduce((pre, cur, ind) => pre += `${ind == 0 ? '' : '&'}${cur}=${par[cur] || ''}`, '?')
}


export function getWeek(num = 1) {
    return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][num]
}



export function urlToBase64(url) {
    return new Promise<string>((resolve, reject) => {
        const image = new Image();
        image.onload = function (this: any) {
            const canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth || 100;
            canvas.height = this.naturalHeight || 100;
            // 将图片插入画布并开始绘制
            //@ts-ignore
            canvas.getContext('2d').drawImage(image, 0, 0);
            // result
            const result = canvas.toDataURL('image/png')
            resolve(result);
        };
        // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
        image.setAttribute("crossOrigin", 'Anonymous');
        image.src = url;
        // 图片加载失败的错误处理
        image.onerror = () => {
            reject(new Error('urlToBase64 error'));
        };
    })
}