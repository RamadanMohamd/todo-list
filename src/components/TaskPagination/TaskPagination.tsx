import { PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { usePaginationStore } from "@/store/pagination";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TaskPagination: React.FC = () => {
  const { page, limit, updatePage, tasksLength } = usePaginationStore();
  return (
    <PaginationContent>
      <PaginationItem>
        <Button
          disabled={page === 1}
          variant="outline"
          onClick={() => {
            updatePage(page - 1);
          }}
        >
          <ArrowLeft className="mr-2" />
          Previous
        </Button>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{page}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <Button
          variant="outline"
          disabled={tasksLength < limit || tasksLength === 0}
          onClick={() => {
            updatePage(page + 1);
          }}
        >
          Next
          <ArrowRight className="ml-2" />
        </Button>
      </PaginationItem>
    </PaginationContent>
  );
};
