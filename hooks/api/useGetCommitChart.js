import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function get_commit_chart(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.COMMIT_CHART + '?' + filters);
  return data;
}

export const useGetCommitChart = (filters) => {
  return useQuery(['get-commit-chart-', filters?.id], () => get_commit_chart(filters));
};
