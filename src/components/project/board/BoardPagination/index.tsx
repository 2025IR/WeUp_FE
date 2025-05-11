import { PaginationWrapper, StyledButton } from "./style";
import { BoardPaginationProps } from "./type";

const BoardPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: BoardPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <StyledButton
          key={page}
          onClick={() => onPageChange(page)}
          active={page === currentPage}
        >
          {page + 1}
        </StyledButton>
      ))}
    </PaginationWrapper>
  );
};

export default BoardPagination;
