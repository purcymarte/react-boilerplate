import { takeLatest } from 'redux-saga/effects';

import {
  exampleFlowSaga
} from './flowSagas'

import { 
  EXAMPLE_USER_ACTION
} from '../../actions'


// root saga performs task of watching for actions and calling a flow
export function* rootSaga() {
  yield takeLatest(EXAMPLE_USER_ACTION, exampleFlowSaga);
}
