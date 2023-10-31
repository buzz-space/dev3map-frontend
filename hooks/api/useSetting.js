import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

async function get_setting(filters) {
    filters = encodeQueryData(filters);
    const { data } = await api.get(API.SETTING + '?' + filters);
    // const { data } = await api.get('/data-sample/response_1689141934425.json');
    return data;
}

export const useSetting = (filters) => {
    return useQuery(['get-setting'], () => get_setting(filters));
};
