import { setStorageAsync } from '@/utils/storage';
import { getCurrentUser } from '@/services/ant-design-pro/api';
import { UserModelType } from '@/models/user';
import { UserEntity } from 'typings/entity/user';

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: undefined,
  },

  effects: {
    *fetchCurrent({ payload }, { call, put }) {
      const res: GlobalResultType<UserEntity>['data'] = yield call(getCurrentUser);
      console.log('res', res)
      yield put({
        type: 'saveCurrentUser',
        payload: res.data
      })
      return res
    }
  },

  reducers: {
    saveCurrentUser(state, action) {
      console.log('action <=>+++++++++++++++++++>', action, '<+++++++++++++++++++++++');
      if (action.payload && action.payload.userid) setStorageAsync('userCurrent', action.payload);
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
  },
};

export default UserModel;
