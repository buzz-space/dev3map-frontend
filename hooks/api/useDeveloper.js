import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function get_developer_repository(filters) {
    let url = API.DEVELOPER.REPOSITORY;
    url = url.replace(':slug', filters?.slug);
    filters = encodeQueryData(filters);
    const { data } = await api.get(url + '?' + filters);
    return data;
}

export const useDeveloperRepository = (filters) => {
    return useQuery(['get-developer-repository-', filters?.slug], () => get_developer_repository(filters));
};


async function get_developer_activity(filters) {
    let url = API.DEVELOPER.ACTIVITY;
    url = url.replace(':slug', filters?.slug);
    filters = encodeQueryData(filters);
    const { data } = await api.get(url + '?' + filters);
    return data;
}

export const useDeveloperActivity = (filters) => {
    return useQuery(['get-developer-activity-', filters?.slug, filters?.month, filters?.year], () => get_developer_activity(filters));
};


async function get_developer_project_contributions(filters) {
    let url = API.DEVELOPER.PROJECT;
    url = url.replace(':slug', filters?.slug);
    filters = encodeQueryData(filters);
    const { data } = await api.get(url + '?' + filters);
    return data;
}

export const useDeveloperProjects = (filters) => {
    return useQuery(['get-developer-project-contributions-', filters?.slug], () => get_developer_project_contributions(filters));
};

async function get_developer_statistic(filters) {
    let url = API.DEVELOPER.STATISTIC;
    url = url.replace(':slug', filters?.slug);
    filters = encodeQueryData(filters);
    const { data } = await api.get(url + '?' + filters);
    return data;
}

export const useDeveloperStatistic = (filters) => {
    return useQuery(['get-developer-statistic-', filters?.slug], () => get_developer_statistic(filters));
};

