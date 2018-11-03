import React, {Component} from 'react';

import {NavBar,List,InputItem,Button,WhiteSpace,WingBlank} from 'antd-mobile'

import Logo from '../logo';

import {reqLogin} from '../../api'

const Item = List.Item;
class Register extends Component {
  state = {
    username:'',
    password:'',
    repassword:''
  }
  handleChange = (name,val) =>{
    this.setState({
      [name]:val
    })
  }
  register = async()=>{
      const {username,password}=this.state
      console.log(username,password)
  
      const data = await reqLogin({username,password})
      console.log(data)
  }
  goLogin = ()=>{
    //跳转到登录路由，编程式导航
    this.props.history.replace('./register')//替换浏览历史记录
  }
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={val => this.handleChange('password', val)}
              >密码：</InputItem>
              
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>登 录</Button>
              <WhiteSpace />
              <Button onClick={this.goLogin}>注 册</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;