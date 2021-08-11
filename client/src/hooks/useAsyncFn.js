import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START': {
      return { ...state, loading: true, error: '' };
    }
    case 'FETCH_SUCCESS': {
      return { ...state, loading: false, error: '', data: action.payload };
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

function useAsyncFn(asyncFn) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    data: null,
  });

  const execute = async (...params) => {
    try {
      dispatch({ type: 'FETCH_START' });
      const res = await asyncFn(...params);
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      return res.data;
    } catch (e) {
      if (e.response)
        dispatch({ type: 'FETCH_FAIL', payload: e.response.data.error });
      else {
        dispatch({ type: 'FETCH_FAIL', payload: 'something went wrong' });
      }
    }
  };

  return { execute, ...state };
}

export default useAsyncFn;
