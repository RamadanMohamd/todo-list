import { Button } from "@/components/ui/Button/Button";

export function TasksStatus() {
  return (
    <section className="flex gap-3">
      <Button variant="default" className="my-4">
        Completed <span>10</span>
      </Button>
      <Button variant="secondary" className="my-4">
        Uncompleted<span>22</span>
      </Button>
      <Button variant="destructive" className="my-4">
        Deleted: <span>10</span>
      </Button>
    </section>
  );
}
