import { Badge } from "@/components/ui/Badge";

export function TasksStatus() {
  const [uncompleted, completed, deleted]: number[] = [10, 20, 30];
  return (
    <section className="flex gap-3">
      <Badge aria-label={`Deleted Tasks Count: ${deleted}`} variant="destructive" className="my-4">
        <span className="sm:inline hidden">Deleted:</span> <span>{deleted}</span>
      </Badge>
      <Badge
        aria-label={`Uncompleted Tasks Count: ${uncompleted}`}
        variant="secondary"
        className="my-4"
      >
        <span className="sm:inline hidden">Uncompleted:</span>
        <span>{uncompleted}</span>
      </Badge>
      <Badge aria-label={`Completed Tasks Count: ${completed}`} variant="default" className="my-4">
        <span className="sm:inline hidden">Completed:</span> <span>{completed}</span>
      </Badge>
    </section>
  );
}
