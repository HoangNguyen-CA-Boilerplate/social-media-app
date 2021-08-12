import { useEffect } from 'react';
import useAsyncFn from './useAsyncFn';

function useAsync(asyncFn, params) {
  const [state, execute] = useAsyncFn(asyncFn, {
    loading: true,
    data: null,
    error: '',
  });

  useEffect(() => {
    execute(...params);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, params);

  return state;
}

export default useAsync;
