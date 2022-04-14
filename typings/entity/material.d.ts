/** 项目实体 */
export interface MaterialEntity {
    id: string
    title: string,
    maType?: 'Vue' | 'React' | 'miniProgram' | 'uniApp' | 'ReactNative'
    children: []
}

/** 项目实体返回列表 */
export type materialGetList = GlobalResultType<MaterialEntity[]>['data']
