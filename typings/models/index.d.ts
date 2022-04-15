
import { AnyAction } from "@reduxjs/toolkit";
import { EffectsCommandMap } from "dva";
import type { UserEntity } from "typings/entity/user";
import type { Effect, Reducer as _Reducer } from 'umi'

export type Reducer<S, A = any> = _Reducer<S, { payload: A }>


declare module "@/models/user" {

  export type UserModelRedux = {
    user: UserModelState;
  };

  export type UserModelState = {
    currentUser?: UserEntity;
  };

  export type UserModelType = {
    namespace: 'user';
    state: UserModelState;
    effects: {
      fetchCurrent: Effect;
    };
    reducers: {
      saveCurrentUser: Reducer<UserModelState, UserEntity>;
    };
  };
}