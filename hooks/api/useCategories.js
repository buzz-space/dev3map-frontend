import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';

// with header Bearer token
async function get_categories(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.CATEGORIES + '?' + filters);
  return data;
}

export const useCategories = (filters) => {
  return useQuery(['get-categories', filters?.with_data], () => get_categories(filters));
};
