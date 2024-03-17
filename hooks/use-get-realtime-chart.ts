import APIs from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useGetRealTimeChart = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["realtime"],
    queryFn: APIs.getRealtimeChart,
    retry: 3,
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 3,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetRealTimeChart;
