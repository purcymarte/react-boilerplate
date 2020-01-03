import {
  EXAMPLE_SUCCESS
} from '../../actions'

const initialState = {
  exampleState: {
  	value: 'helloWorld'
  },
};


const example = (state = initialState, action) => {
  switch (action.type) {
  	case EXAMPLE_SUCCESS:
  	  if (!action.payload) return state;
  	  return {
  	  	...state,
  	  	value: action.payload
  	  };
    default:
	  return state;
  }
};

export const getExample = (state) => state.exampleState

export default example;
