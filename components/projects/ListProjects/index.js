import Button from '~/components/base/Button';
import GridProject from './GridProject';
import styles from './styles.module.scss';
import { useGetChainList } from '~/hooks/api/useChainList';
import { useCategories } from '~/hooks/api/useCategories';
import { useEffect, useState } from 'react';
import { useFilterProjects } from '~/context/FilterProjectsContext';
import Loading from './Loading';

export default function ListProject() {
  const { activeIndex, setActiveIndex, search } = useFilterProjects();
  const {
    data: categories,
    isRefetching: isRefetchingCategories,
    isFetching: isFetchingCategories,
  } = useCategories({
    with_data: 1,
  });

  const {
    data: chainlist,
    refetch: refetchChainList,
    isRefetching: isRefetchingChainList,
    isFetching: isFetchingChainList,
  } = useGetChainList({
    categories: categories?.data ? categories?.data[activeIndex - 1]?.name : '',
  });

  const [categoriesShow, setCategoriesShow] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    refetchChainList();
  }, [categories, activeIndex]);

  useEffect(() => {
    if (categories) {
      if (showAll) {
        setCategoriesShow([...categories?.data]);
      } else {
        setCategoriesShow([...categories?.data].splice(0, Math.min(3, categories?.data.length)));
      }
    }
  }, [showAll, categories]);

  useEffect(() => {
    if (activeIndex == 0 && categories) {
      if (search != '' || showAll) {
        setCategoriesShow([...categories?.data]);
      } else {
        setCategoriesShow([...categories?.data].splice(0, Math.min(3, categories?.data.length)));
      }
    }
  }, [search]);

  useEffect(() => {
    if (isFetchingCategories || isFetchingChainList || isRefetchingCategories || isRefetchingChainList) {
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  }, [isFetchingCategories, isFetchingChainList, isRefetchingCategories, isRefetchingChainList]);

  return (
    <div className={styles['list-project']}>
      {isFetching ? (
        <Loading />
      ) : activeIndex == 0 ? (
        <>
          {categoriesShow?.map((item, index) => {
            return <GridProject title={item?.name} numberProject={item?.total} projects={item?.chain} key={index} />;
          })}

          <Button
            outline
            className={styles['load-more']}
            onClick={() => {
              setShowAll((prev) => {
                if (prev == true) {
                  window.scrollTo(0, 0);
                }
                return !prev;
              });
            }}
          >
            {showAll ? 'Collapse' : 'Load More'}
          </Button>
        </>
      ) : (
        <GridProject
          title={categories?.data[activeIndex - 1]?.name}
          numberProject={categories?.data[activeIndex - 1]?.total}
          projects={chainlist?.data}
        />
      )}
    </div>
  );
}
