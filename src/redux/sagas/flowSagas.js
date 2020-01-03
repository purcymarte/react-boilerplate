import { call, put, select, delay, race } from 'redux-saga/effects'

import {
  exampleCommonSaga
} from './commonSagas'

import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAILURE
} from '../../actions'

// take an action
// try to call utils or common sagas
// catch errors
export function* exampleFlowSaga(action) {
  try {
    yield put({type: EXAMPLE_REQUEST}) // broadcast that we started a flow
    const value = yield call(exampleCommonSaga, action) // perform a common saga
    yield put({type: EXAMPLE_SUCCESS, payload: value}) // broadcast that we successfully finished a flow
  } catch (error) {
    yield put({type: EXAMPLE_FAILURE, payload:error}) // broadcast that an error occured during the flow    
  }
}