import { useEffect } from 'react';
import useAsyncFn from './useAsyncFn';

function useAsync(asyncFn, params) {
  const { execute, loading, error, data } = useAsyncFn(asyncFn);

  // userAsync renders addition times when useAsync is used twice or more ??;

  // WHY?
  // first call resolves first, causes 2 re-renders on completion,
  // second call resolves second, causing 2 more re-renders on completion

  useEffect(() => {
    execute(...params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, params);

  return { loading, error, data };
}

export default useAsync;
