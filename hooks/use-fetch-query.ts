import { useCallback, useEffect, useState } from 'react';

import fetchQuery from '@/lib/fetch-query';
import { ErrorMessage } from '@/typings';

import { RequestStatus } from './types';

export function useFetchQuery<ResponseType>() {
  const [data, setData] = useState<ResponseType>();
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.Initial);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | unknown>();

  let isMounted = true;

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isMounted = false;
    };
  }, []);

  const request = useCallback(
    async (endPoint: string, key: string = '') => {
      setStatus(RequestStatus.Working);
      setErrorMessage(undefined);

      try {
        const fetchedData = await fetchQuery<ResponseType>(endPoint, key);

        if (isMounted) {
          setData(fetchedData);
          setStatus(RequestStatus.Done);
          setErrorMessage(undefined);
        }
      } catch (error: unknown | ErrorMessage) {
        if (isMounted) {
          setErrorMessage(error);
        }
      }

      return undefined;
    },
    [isMounted]
  );

  const resetData = useCallback(() => {
    setStatus(RequestStatus.ManualReset);
    setData(undefined);
  }, [setData]);

  return { data, request, resetData, status, errorMessage };
}
