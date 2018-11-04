import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import {NavBar} from 'antd-mobile'
import Cookies from 'js-cookie';
import PropTypes from 'prop-types'

import LaobanInfo from '../../containers/laoban-info';
import Laoban from '../../containers/laoban';
import DashenInfo from '../../containers/dashen-info';
import Dashen from '../../containers/dashen';
import Message from '../../containers/message';
import Personal from '../../containers/personal';
import NavFooter from '../../components/nav-footer';
import {getRedirectPath} from '../../utils'

class Main extends Component {
  static propTypes={
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired
  }
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]
  
  render () {
    const userid =Cookies.get('userid');
    if (!userid){
      // this.props.history.replace('/login');
      return <Redirect to='/login'/>
    }
    
    const {user} =this.props
    if(!user._id){
      //发送请求数据
      this.props.getUserInfo( )
      return <div>loading</div>
    }
    
    //如果用户直接访问根路径，重定向laoban/dashen
    //获取当前路由
    const {pathname} = this.props.location;
    if(pathname==='/'){
      return <Redirect to={getRedirectPath(user.type,user.header)}/>
    }
    
    //如果当前type是老板我显示大神按钮
    //如果是大神显示老板按钮
    const {navList} = this;
    if(user.type==='dashen'){
      navList[0].hide = true;
    }else{
      navList[1].hide = true;
    }
    
    //当前路由的对象
    const currentNav = navList.find(nav=> pathname === nav.path);
    
    
    
    return (
      <div>
        {currentNav?<NavBar>{currentNav.title}</NavBar>:''}
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </Switch>
        {currentNav?<NavFooter navList={navList}/>:''}
      </div>
    )
  }
}

export default Main;