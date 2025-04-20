import { MainLayout } from "@/layouts/Main";
import { TasksList } from "./components/TasksList";
import { TaskPagination } from "./components/TaskPagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AddTask } from "./components/AddTask";

function App() {
  return (
    <MainLayout>
      <Card className="sm:w-[600px] w-full">
        <CardHeader className="w-full flex items-center justify-between">
          <CardTitle>Tasks</CardTitle>
          <AddTask />
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
