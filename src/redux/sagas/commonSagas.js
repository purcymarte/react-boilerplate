import * as jsUtils from '../../utils/jsUtils'


export function* exampleCommonSaga () {
  const value = yield jsUtils.exampleUtil() // do one task and return a value to flowSaga
  return value
}
