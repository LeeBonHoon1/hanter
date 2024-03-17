import { Skeleton } from "@/components/ui/skeleton";

const ArtistSkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center">
      <Skeleton className="h-36 w-36 rounded-full" />
      <Skeleton className="h-4 w-[50px]" />
    </div>
  );
};

export default ArtistSkeleton;
