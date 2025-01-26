import { Card, CardHeader,CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const FullBlogSkeleton = () => {
  // If no blog data is available (for loading state)
  return (
    <div className="w-full grid grid-cols-12 pt-10 justify-center">
      <div className="col-span-8">
        <Card className="shadow-none border-none">
          <CardHeader>
            <Skeleton className="h-12 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </CardHeader>
          <CardContent className="pt-4">
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col col-span-4 gap-4 mt-6">
        <div className="font-semibold text-lg">
          <Skeleton className="h-6 w-1/2" />
        </div>
        <div className="flex gap-6">
          <div className="flex justify-center items-center">
            <Skeleton className="w-12 h-12 rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
