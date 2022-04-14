import { Request, Response } from 'express';
import { materialGetList } from 'typings/entity/material';

const getMaterialList = (req: Request, res: Response<materialGetList>) => {
  res.json({
    result: 200,
    msg: 'success',
    data: [
      {
        id: '923928391991',
        maType: 'React',
        title: '木头人',
        children: []
      },
      {
        id: '923928391992',
        title: '健康宝',
        maType: 'miniProgram',
        children: []
      },
      {
        id: '923928391993',
        title: '仨木_PAPER',
        maType: 'uniApp',
        children: []
      },
      {
        id: '923928391994',
        title: '仨木商家端',
        maType: 'ReactNative',
        children: []
      },
      {
        id: '923928391995',
        title: '租车宝',
        maType: 'Vue',
        children: []
      }
    ],
  });
};

export default {
  'GET /api/material/list': getMaterialList,
};
