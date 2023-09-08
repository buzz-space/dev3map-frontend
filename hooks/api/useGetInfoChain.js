import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

async function get_developer_info(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.DEVELOPER_INFO + '?' + filters);
  // const { data } = await api.get('/data-sample/response_1689141934425.json');
  return data;
}

export const useGetDeveloperInfor = (filters) => {
  return useQuery(['get-developer_info'], () => get_developer_info(filters));
};
