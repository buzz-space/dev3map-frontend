import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


async function get_chain_developer(filters) {
    let url = API.CHAIN_DEVELOPER;
    url = url.replace(':id', filters?.id);
    const { data } = await api.get(url);
    return data;
}

export const useChainDeveloper = (filters) => {
    return useQuery(['get-chain-developer-' + filters?.id], () => get_chain_developer(filters));
};