export function TaskName({ task }: { task: string }) {
  return (
    <div className="flex-1 space-y-1">
      <p className="text-sm font-medium leading-none">{task}</p>
    </div>
  );
}
