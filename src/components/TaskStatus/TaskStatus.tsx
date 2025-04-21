import { Badge } from "@/components/ui/Badge";
import { ITaskCount } from "@/interfaces/task";
import { getTasksCount } from "@/services/tasks";
import { useQuery } from "@tanstack/react-query";

export function TasksStatus() {
  const { data: count } = useQuery<ITaskCount>({
    queryKey: ["count"],
    queryFn: getTasksCount,
    initialData: { uncompleted: 0, completed: 0, deleted: 0 },
  });

  return (
    <section className="flex gap-3">
      <Badge
        data-testid="badge"
        aria-label={`Deleted Tasks Count: ${count.deleted}`}
        variant="destructive"
        className="my-4"
      >
        <span className="sm:inline hidden">Deleted:</span> <span>{count.deleted}</span>
      </Badge>
      <Badge
        data-testid="badge"
        aria-label={`Uncompleted Tasks Count: ${count.uncompleted}`}
        variant="secondary"
        className="my-4"
      >
        <span className="sm:inline hidden">Uncompleted:</span>
        <span>{count.uncompleted}</span>
      </Badge>
      <Badge
        data-testid="badge"
        aria-label={`Completed Tasks Count: ${count.completed}`}
        variant="default"
        className="my-4"
      >
        <span className="sm:inline hidden">Completed:</span> <span>{count.completed}</span>
      </Badge>
    </section>
  );
}
