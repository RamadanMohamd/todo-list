import { Skeleton } from "@/components/ui/skeleton";

export function TaskSkeleton() {
  return (
    <div className="flex items-center justify-between rounded-md border p-4">
      <div className="flex items-center justify-between w-7/12">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-6 w-11/12" />
      </div>
      <Skeleton className="h-10 w-1/12" />
    </div>
  );
}
