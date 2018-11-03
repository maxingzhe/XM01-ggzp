import React, {Component} from 'react';
import {NavBar, InputItem, Button, List, TextareaItem } from 'antd-mobile';
import PropTypes from 'prop-types';
import HeaderSelector from '../header-selector';

class DashenInfo extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    updateUserSinfo:PropTypes.func.isRequired
  }
  state={
    header:'',
    employment:'',
    resume:''
  }
  
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }
  
  setHeader = header=>{
    this.setState({
      header
    })
  }
  
  saveUserInfo=()=>{
    this.props.updateUserSinfo(this.state)
  }
  
  render () {
    const {msgs} = this.props.user
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        {msgs?<p className="err-msg">{msgs}</p>:''}
        <InputItem onChange={val =>this.handleChange('employment',val)}>求职岗位:</InputItem>
        <TextareaItem title="个人简介" rows={3} onChange={val =>this.handleChange('resume',val)}/>
        <Button type="primary" onClick={this.saveUserInfo}>保 存</Button>
      </div>
    )
  }
}

export default DashenInfo;