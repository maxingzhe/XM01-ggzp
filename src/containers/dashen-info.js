
import {connect} from 'react-redux';

import DashenInfo from '../components/dashen-info';

import {updateUserSinfo} from   '../redux/actions';

export default connect(
  state=>({user:state.user}),
  {updateUserSinfo}
)(DashenInfo)
