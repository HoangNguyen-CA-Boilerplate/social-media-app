import { useReducer } from 'react';
import useMountedState from './useMountedState';

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

function useAsyncFn(asyncFn, initialData = null) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    data: initialData,
  });
  const isMounted = useMountedState();

  const execute = async (...params) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await asyncFn(...params);
      if (isMounted()) {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        return res.data;
      }
    } catch (e) {
      if (isMounted()) {
        if (e.response)
          dispatch({ type: 'FETCH_FAIL', payload: e.response.data.error });
        else {
          dispatch({ type: 'FETCH_FAIL', payload: 'something went wrong' });
        }
      }
    }
  };

  return [state, execute];
}

export default useAsyncFn;
