import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';


// with header Bearer token
async function get_categories() {
    const { data } = await api.get(API.CATEGORIES);
    return data;
}

export const useCategories = () => {
    return useQuery(['get-categories'], () => get_categories());
};

