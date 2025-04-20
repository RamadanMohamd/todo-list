import { getTasks } from "@/services/tasks";
import { useQueryClient } from "@tanstack/react-query";

export const usePrefetchTasks = () => {
  const queryClient = useQueryClient();

  const prefetchTasks = (page: number, limit: number) => {
    queryClient.prefetchQuery({
      queryKey: ["tasks", page],
      queryFn: () => getTasks(page, limit),
    });
  };

  return { prefetchTasks };
};
