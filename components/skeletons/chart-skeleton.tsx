import { Skeleton } from "@/components/ui/skeleton";

const ChartSkeleton = () => {
  return (
    <div className="flex items-center py-3 justify-center">
      <Skeleton className="h-8 w-full" />
    </div>
  );
};

export default ChartSkeleton;
