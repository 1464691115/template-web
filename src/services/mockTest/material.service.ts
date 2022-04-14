import { materialGetList } from 'typings/entity/material';
import { request } from 'umi';


const prefix = '/api/material/'


export async function getMaterialList() {
    return request<materialGetList>(prefix + `list`)
}