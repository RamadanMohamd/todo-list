import { MainLayout } from "@/layouts/Main";
import { TasksList } from "./components/TasksList";
import { TaskPagination } from "./components/TaskPagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <MainLayout>
      <Card className="sm:w-[600px] w-full">
        <CardHeader className="w-full flex items-center justify-between">
          <CardTitle>Tasks</CardTitle>
          <Button> Add new task </Button>
        </CardHeader>
        <CardContent>
          <TasksList />
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <TaskPagination currentPage={10} />
        </CardFooter>
      </Card>
    </MainLayout>
  );
}

export default App;
