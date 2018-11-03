
import {combineReducers} from 'redux';

import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER} from './action-types';

import {getRedirectPath} from '../utils'
const initUserState = {
  username: '',
  type:'',
  msg: '',
  redirectTo:'',
  msgs:''
}
function user(preState=initUserState,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return{username:action.data.username,type:action.data.type,msg:'',redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case ERR_MSG:
      return{...action.data}
    case UPDATE_USER:
      return action.data
    case RESET_USER:
      return {...action.data}
    default:
      return preState
  }
}

//合并暴露reducers函数
export default combineReducers({
  user
})