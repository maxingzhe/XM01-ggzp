import React, {Component} from 'react';
import UserList from '../user-list';
import PropTypes from 'prop-types';
class Laoban extends Component {
  static propTypes ={
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  }
  
  componentDidMount(){
    this.props.getUserList('dashen')
  }
  
  render () {
    const {userList} =this.props
    if(userList.length===0){
      return null
    }
    const a = userList.filter(item=>item.header)
    
    return (
      <div>
        {
          a.map((item,index)=><UserList key={index} item={item}/>)
        }
      </div>
    )
  }
}

export default Laoban;