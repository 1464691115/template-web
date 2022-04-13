/** 用户实体 */
export interface UserEntity {
  username: string;
  password: string;
}

/** 用户登录界面操作判断字段 */
export type userLoginType = 'register' | 'login';

/** 用户登录参数 */
export type loginParamsType = Pick<UserEntity, 'username' | 'password'>;
