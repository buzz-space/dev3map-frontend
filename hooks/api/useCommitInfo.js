import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


async function get_commit_info(filters) {
    filters = encodeQueryData(filters);
    const { data } = await api.get(API.COMMIT_INFO + '?' + filters);
    return data;
}

export const useGetCommitInfo = (filters) => {
    return useQuery(['get-commit_info-', filters?.id], () => get_commit_info(filters));
};

