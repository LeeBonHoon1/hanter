import APIs from "@/apis";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetChart = (isDetail: boolean) => {
  const { data, isLoading, isFetching, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["chart"],
      queryFn: ({ pageParam }) => APIs.getChart(pageParam, isDetail),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (isDetail && lastPage.next) {
          return lastPage.next;
        }
        return undefined;
      },
    });

  return {
    data,
    isLoading,
    isFetching,
    error,
    hasNextPage,
    fetchNextPage,
  };
};

export default useGetChart;
