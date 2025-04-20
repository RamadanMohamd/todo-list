import { MainLayout } from "@/layouts/Main";
import { TasksList } from "@/components/TasksList";
import { TaskPagination } from "@/components/TaskPagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuccessAlert } from "@/components/Alert";
import { ErrorBoundary } from "@/ErrorBoundary";
import { useAlertStore } from "@/store/alert";

function App() {
  const queryClient = new QueryClient();
  const { message: successMessage } = useAlertStore();
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
          <Card className="sm:w-[600px] w-full">
            <CardHeader className="w-full flex items-center justify-between">
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {successMessage && <SuccessAlert />}
              <TasksList />
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <TaskPagination />
            </CardFooter>
          </Card>
        </ErrorBoundary>
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
