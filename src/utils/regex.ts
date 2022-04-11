const regex: regexType = {
    eng: /^[a-zA-Z]+$/,
    zip: /^\d{6}$/,
    number: /^\d$/,
    int: /^[-+]?\d*$/,
    double: /^[-\+]?\d+(\.\d +)?$/,
    chines: /^[\u0391-\uFFE5] + $/,
    email: /^\w + ([-+.]\w +)*@\w + ([-.]\w +)*\.\w + ([-.]\w +)*$/,
    mobile: /^1[3456789]\d{9}$/,
    idCard: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/,
    wechatId: /^([a-zA-Z][a-zA-Z\d_-]{5,19}|(13[0-9]|14[579]|15[0-3,5-9]|16[0-9]|17[0135678]|18[0-9]|19[0-9])\d{8})$/,
    len: (num, maxNum) => RegExp(`^\\S{${num}${maxNum ? ',' + maxNum : ''}}$`)
}

export default regex
