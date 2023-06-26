import DetailProjectContainer from "~/containers/DetailProjectContainer";
import MainLayout from "~/layout/MainLayout";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import { API } from "~/core/api";
export default function DetailProject({ data }) {
    // const router = useRouter();
    // const { slug } = router.query;
    console.log(data)
    return <MainLayout currentPage="projects">
        <DetailProjectContainer data={data} />
    </MainLayout>
}
export async function getServerSideProps(ctx) {
    const {
        params: { slug },
    } = ctx;

    // const queryClient = new QueryClient();
    // await queryClient.prefetchQuery('get-postdetail', () => getPostDetail({ pageParam: '' }, slug));

    // const data = queryClient.getQueryData('get-postdetail');
    let url = API.CHAIN_ID;
    // console.log(pageParam, slug);
    url = url.replace(':prefix', slug);
    let data;
    await fetch(process.env.SERVER_URI + url)
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {
            data = payload;
        })
        .catch((err) => {
            console.log(err);
        });
    if (!data?.data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            // dehydratedState: dehydrate(queryClient),
            data: data?.data || {},
        },
    };
}

DetailProject.propTypes = {
    data: PropTypes.objectOf(PropTypes.any),
};
