import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


// with header Bearer token
async function get_chainlist() {
    const { data } = await api.get(API.CHAIN_LIST);
    return data;
}

export const useGetChainList = () => {
    return useQuery(['get-chain-list'], () => get_chainlist());
};

