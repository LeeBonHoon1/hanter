import APIs from "@/apis";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetNews = () => {
  const { data, isLoading, isFetching, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: ({ pageParam }) => APIs.getNews(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
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

export default useGetNews;
