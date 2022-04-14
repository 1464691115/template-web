/** 接口返回的数据类型 */
declare type GlobalResultType<T = any> = {
    data: {
        data: T
        msg: string
        result: GlobalResultType['status']
    }
    err: string
    code: 200 | 400 | 401 | 404 | 500 | 601
}