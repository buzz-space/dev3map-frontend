import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

async function get_chain_id(filters) {
  filters = encodeQueryData(filters);
  let url = API.CHAIN_ID;
  url = url.replace(':id', filters?.id);
  const { data } = await api.get(url + '?' + filters);
  return data;
}

export const useChainId = (filters) => {
  return useQuery(['get-chain-id-' + filters?.id], () => get_chain_id(filters));
};
