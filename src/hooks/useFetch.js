import { useEffect, useReducer } from 'react';

const initialState = { loading: false, data: null, error: null };

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, loading: true, data: null, error: null }
  
    case 'SUCCESS':
      return { ...state, loading: false, data: payload, error: null }

    case 'FAILURE':
      return { ...state, loading: false, data: null, error: payload }
    
    default:
      return state;
  }
};

const useFetchReducer = (fetchResource, param = undefined) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect ( () => {
    const fecthData = async () => {
      dispatch({ type: 'LOAD' });
      try {
        const resource = await fetchResource(param);
        dispatch({ type: 'SUCCESS', payload: resource })

      } catch (error) {
        dispatch({ type: 'FAILURE', payload: error })
      }
    }
    fecthData();
  }, [fetchResource, param]);

  return state;
};

export default useFetchReducer;