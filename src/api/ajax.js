//封装axios返回值promise

import axios from 'axios';

export default function ajax(url,data,type='GET') {
  let querystring = '';
  if(data){
    //将你传入对象，可枚举的属性，保存在一个数组中返回
    Object.keys(data).forEach(key=>{
      const value = data[key];
      querystring += key + '=' +value +'&'
    })
    querystring = querystring.substring(0, querystring.length - 1);  //不能用-1
  }
  if(type.toUpperCase()==='GET'){
    //get请求
    url += '?' + querystring;
    return axios.get(url)
  }else{
    //post请求
    return axios.post(url,querystring);
  }
}
