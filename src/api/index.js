//发送请求模块
import ajax from './ajax'
//请求登录的函数
export const reqLogin = data =>ajax('/login',data,'POST');
//请求注册的函数
export const reqRegister = data =>ajax('/register',data,'POST');
//请求用户更新数据函数
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');
//请求用户更新数据函数
export const reqUpdateUsersInfo = data => ajax('/update', data, 'POST');