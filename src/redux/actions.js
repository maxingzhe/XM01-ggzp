/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */
import {reqLogin,reqRegister,reqUpdateUserInfo,reqUpdateUsersInfo,reqGetUserInfo,reqGetUserList} from '../api';

import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER,UPDATE_USER_LIST,RESET_USER_LIST} from './action-types'
//同步action 注册成功
export const authSuccess = user =>({type:AUTH_SUCCESS,data:user});
//同步action 注册失败
export const errMsg = msg=>({type:ERR_MSG,data:msg});
//同步action 更新用户信息成功
export const updateUser = user =>({type:UPDATE_USER,data:user});
//同步action 更新用户信息失败
export const resetUser = msgs=>({type:RESET_USER,data:msgs});
//同步action 更新用户信息成功
export const updateUsers = user =>({type:UPDATE_USER,data:user});
//同步action 更新用户信息失败
export const resetUsers = msgs=>({type:RESET_USER,data:msgs});
//同步action 更新用户列表数据成功
export const updataUserList = userlist=>({type:UPDATE_USER_LIST,data:userlist});
//同步action 更新用户列表数据失败
export const resetUserList = msg=>({type:RESET_USER_LIST,data:msg})





//注册的异步的action
export const register = data=>{
  
  //表单验证，同步方式
  const {username, password, repassword, type} = data;
  if(!username){
    return errMsg({username,password,msg:'请输入用户名'})
  }else if(!password){
    return errMsg({username,password,msg:'请输入密码'})
  }else if(password!==repassword){
    return errMsg({username,password,msg:'两次密码不一致，请重新输入'})
  }else if(!type){
    return errMsg({username,password,msg:'请输入账号类型'})
  }
  
  
  return dispatch =>{
    reqRegister(data)
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          dispatch(authSuccess(result.data))
        }else{
          console.log(result.msg)
          //注册失败
          dispatch(errMsg({msg:result.msg,username:data.username,type:data.type}))
        }
      })
      .catch(err=>{
        //请求失败注册失败
        dispatch(errMsg({msg:'网络不稳定，请稍后再试',username:data.username,type:data.type}))
      })
  }
}

//更新数据异步的action
export const updateUserInfo = data=>{
  
  //表单验证，同步方式
  const {header,post,company,salary,info} = data;
  if(!header){
    return resetUser({msgs:'请选择头像'})
  }else if(!post){
    return resetUser({msgs:'请输入招聘职位'})
  }else if(!company){
    return resetUser({msgs:'请输入公司名称'})
  }else if(!salary){
    return resetUser({msgs:'请输入薪资范围'})
  }else if(!info){
    return resetUser({msgs:'请输入公司简介'})
  }
  
  
  return dispatch =>{
    reqUpdateUserInfo(data)
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          dispatch(updateUser(result.data))
        }else{
          //注册失败
          dispatch(resetUser({msgs:result.msg}))
        }
      })
      .catch(err=>{
        //请求失败注册失败
        dispatch(resetUser({msgs:'网络不稳定，请稍后再试'}))
      })
  }
}

export const updateUserSinfo= data=>{
  //表单验证，同步方式
  const {header,employment,resume} = data;
  if(!header){
    return resetUsers({msgs:'请选择头像'})
  }else if(!employment){
    return resetUsers({msgs:'请输入求职岗位'})
  }else if(!resume){
    return resetUsers({msgs:'请输入个人简历'})
  }
  
  
  return dispatch =>{
    reqUpdateUsersInfo(data)
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          dispatch(updateUsers(result.data))
        }else{
          //注册失败
          dispatch(resetUsers({msgs:result.msg}))
        }
      })
      .catch(err=>{
        //请求失败注册失败
        dispatch(resetUsers({msgs:'网络不稳定，请稍后再试'}))
      })
  }
  
}
//登录异步action
export const login = data=>{
  
  //表单验证，同步方式
  const {username, password} = data;
  if(!username){
    return errMsg({username,password,msg:'请输入用户名'})
  }else if(!password){
    return errMsg({username,password,msg:'请输入密码'})
  }
  
  return dispatch =>{
    reqLogin(data)
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          // console.log(result.data)
          dispatch(authSuccess(result.data))
        }else{
          console.log(result.msg)
          //注册失败
          dispatch(errMsg({msg:result.msg}))
        }
      })
      .catch(err=>{
        //请求失败注册失败
        dispatch(errMsg({msg:'网络不稳定，请稍后再试'}))
      })
  }
}
//获取Main用户信息的异步action
export const getUserInfo = () =>{
  return dispatch =>{
    reqGetUserInfo()
      .then(res=>{
        const result = res.data;
        if(result.code===0){
          dispatch(updateUser(result.data))
        }else{
          dispatch(resetUser({msg:result.msg}))
        }
      })
      .catch(err=>{
        dispatch(resetUser({msg:'网络不稳定，请稍后再试'}))
      })
  }

}
//获取用户列表
export const getUserList =type=>{
  return dispatch=>{
    reqGetUserList(type)
      .then(res =>{
        const result = res.data;
        if (result.code===0){
          dispatch(updataUserList(result.data))
        }else{
          dispatch(updataUserList({msg:result.msg}))
        }
      })
      .catch(err=>{
        dispatch(updataUserList({msg:'网络不稳定，请稍后再试'}))
      })
  }
  
}