import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


async function get_ranking(filters) {
    filters = encodeQueryData(filters);
    const { data } = await api.get(API.RANKING + '?' + filters);
    return data;
}

export const useRanking = (filters, type) => {
    return useQuery(['get-ranking' + type], () => get_ranking(filters));
};

