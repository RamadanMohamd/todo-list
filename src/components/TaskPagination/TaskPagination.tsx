import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
}

export const TaskPagination: React.FC<PaginationProps> = ({ currentPage }) => {
  return (
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" disabled />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{currentPage}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" disabled={false} />
      </PaginationItem>
    </PaginationContent>
  );
};
