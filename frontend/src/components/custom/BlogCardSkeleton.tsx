import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-center pl-24 pr-24 pt-2 lg:pl-100 lg:pr-100">
      <Card>
        <div className="flex items-center gap-3 pl-5 pt-2 pb-2">
          <Skeleton className="w-9 h-9 rounded-full" /> {/* Avatar Skeleton */}
          <div>
            <Skeleton className="h-4 w-24 mb-1" /> {/* Author Name Skeleton */}
            <Skeleton className="h-3 w-16" /> {/* Published Date Skeleton */}
          </div>
        </div>
        <Separator />
        <CardHeader className="-mt-3">
          <Skeleton className="h-6 w-3/4" /> {/* Title Skeleton */}
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />{" "}
          {/* Content Skeleton Line 1 */}
          <Skeleton className="h-4 w-11/12 mb-2" />{" "}
          {/* Content Skeleton Line 2 */}
          <Skeleton className="h-4 w-3/4" /> {/* Content Skeleton Line 3 */}
        </CardContent>
        <CardFooter className="mt-5">
          <Skeleton className="h-3 w-20" /> {/* Read Time Skeleton */}
        </CardFooter>
      </Card>
    </div>
  );
};
