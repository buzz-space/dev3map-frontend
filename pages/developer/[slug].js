import React from 'react'
import DeveloperDetailContainer from '~/containers/DeveloperDetailContainer'
import { API } from '~/core/api'
import MainLayout from '~/layout/MainLayout'
import PropTypes from 'prop-types';

const DeveloperDetail = ({ dataAccount, dataRepository }) => {
    return (
        <MainLayout>
            <DeveloperDetailContainer dataAccount={dataAccount} />
        </MainLayout>
    )
}

export default DeveloperDetail

export const getServerSideProps = async (ctx) => {

    const {
        params: { slug },
    } = ctx;
    let url = API.DEVELOPER.INFOR;
    url = url.replace(':slug', slug);
    let dataAccount, dataRepository;
    await fetch(process.env.SERVER_URI + url).then((response) => {
        return response.json();
    }).then((payload) => {
        dataAccount = payload;
    }).catch((err) => {
        console.log(err);
    });

    if (!dataAccount?.data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            dataAccount: dataAccount?.data || {},
        }
    }
}

DeveloperDetail.propTypes = {
    dataAccount: PropTypes.objectOf(PropTypes.any),
};