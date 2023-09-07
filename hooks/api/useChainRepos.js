import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

async function get_chain_repos(filters) {
  // filters = encodeQueryData(filters);
  let url = API.CHAIN_REPOSITORY;
  url = url.replace(':id', filters?.id);
  const { data } = await api.get(url);
  return data;
}

export const useChainRepos = (filters) => {
  return useQuery(['get-chain-repos-' + filters?.id], () => get_chain_repos(filters));
};
