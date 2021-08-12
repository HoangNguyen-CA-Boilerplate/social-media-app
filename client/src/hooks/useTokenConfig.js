import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../store/slices/authSlice';
import { tokenConfigStateless } from '../store/utils';

function useTokenConfig() {
  const token = useSelector(selectToken);
  const config = useMemo(() => tokenConfigStateless(token), [token]);
  return config;
}

export default useTokenConfig;
