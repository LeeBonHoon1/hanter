import { Skeleton } from "@/components/ui/skeleton";

const RealTimeSkeleton = () => {
  return (
    <div className="flex items-center py-3 justify-center">
      <Skeleton className="h-[300px] w-full" />
    </div>
  );
};

export default RealTimeSkeleton;
