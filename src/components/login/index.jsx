import React, {Component} from 'react';

import {NavBar,InputItem,List,Button,WhiteSpace,WingBlank} from 'antd-mobile'

import Logo from '../logo';

import {Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';




class Login extends Component {
  
  static propTypes = {
    user:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }
  
  state = {
    username:'',
    password:''
  }
  handleChange = (name,val) =>{
    this.setState({
      [name]:val
    })
  }

  login = async () => {
    //获取表单
    const {username,password} = this.state;
    //发送ajax，更新状态
    this.props.login({username,password})
  }
  
  goRegister=()=>{
    this.props.history.replace('/register')
  }
  
  render () {
    const {msg,redirectTo} = this.props.user;
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        {msg?<p className="err-msg">{msg}</p>:''}
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
              <Button type="primary" onClick={this.login}>登 录</Button>
              <WhiteSpace />
              <Button onClick={this.goRegister}>注 册</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Login