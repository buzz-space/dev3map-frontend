import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


// with header Bearer token
async function get_chainlist(filters) {
    filters = encodeQueryData(filters)
    const { data } = await api.get(API.CHAIN_LIST + '?' + filters);
    return data;
}

export const useGetChainList = (filters) => {
    return useQuery(['get-chain-list-' + filters?.categories], () => get_chainlist(filters));
};

