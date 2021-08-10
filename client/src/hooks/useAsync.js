import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { ...state, data: action.payload, loading: false, error: '' };
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

function useAsync(getData, params) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: '',
  });

  useEffect(() => {
    const execute = async () => {
      try {
        const res = await getData(...params);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (e) {
        if (e.response)
          dispatch({ type: 'FETCH_FAIL', payload: e.response.data.error });
        else {
          dispatch({ type: 'FETCH_FAIL', payload: 'something went wrong' });
        }
      }
    };
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, params);

  return state;
}

export default useAsync;
