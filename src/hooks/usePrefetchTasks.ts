import { getTasks } from "@/services/tasks";
import { usePaginationStore } from "@/store/pagination";
import { useQueryClient } from "@tanstack/react-query";

export const usePrefetchTasks = () => {
  const queryClient = useQueryClient();
  const { page, limit } = usePaginationStore();

  const prefetchTasks = () => {
    queryClient.prefetchQuery({
      queryKey: ["tasks", page],
      queryFn: () => getTasks(page, limit),
    });
  };

  return { prefetchTasks };
};
