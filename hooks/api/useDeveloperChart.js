import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function get_developer_chart(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.DEVELOPER_CHART + '?' + filters);
  return data;
}

export const useDeveloperChart = (filters) => {
  return useQuery(['get-developer-chart-', filters?.id], () => get_developer_chart(filters));
};
