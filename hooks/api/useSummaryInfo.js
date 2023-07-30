import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';


async function get_summary_info(filters) {
    filters = encodeQueryData(filters);
    const { data } = await api.get(API.SUMMARY_INFOR + '?' + filters);
    return data;
}

export const useGetSummaryInfo = (filters) => {
    return useQuery(['get-summary_info-', filters?.id], () => get_summary_info(filters));
};

