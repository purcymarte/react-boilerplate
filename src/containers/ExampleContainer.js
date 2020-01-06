import { connect } from 'react-redux';

import Example from '../screens/Example';
import { getExampleState } from '../redux/reducers';
import {EXAMPLE_USER_ACTION} from '../actions'


const mapStateToProps = (state) => ({
  value: getExampleState(state) // uses selector to get state
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
	dispatch({ type: EXAMPLE_USER_ACTION }) // broadcast that user clicked
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
