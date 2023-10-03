import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

async function get_performance(filters) {
    let url = API.PERFORMANCE;
    console.log({ a: filters })
    url = url.replace(':id', filters?.id);
    const { data } = await api.get(url);
    return data;
}

export const useGetPerformance = (filters) => {
    return useQuery(['get-performance'], () => get_performance(filters));
};
