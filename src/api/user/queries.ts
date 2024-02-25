import { useQuery } from '@tanstack/react-query';

import { fetchUser } from './queryFunctions';

export function useFetchUser() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    select: (data) => data.data,
  });

  return { isPending, isError, data, error };
}
