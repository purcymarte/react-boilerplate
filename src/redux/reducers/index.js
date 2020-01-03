import { combineReducers } from 'redux';
import example, * as fromExample from './example';

console.log('yes')
const appReducer = combineReducers({
  example
});

const rootReducer = (state, action) => appReducer(state, action);

export const getExampleState = (state) => fromExample.getExample(state.example); // selector to be used by container and saga

export default rootReducer;
