import BoardList from "@/components/project/board/BoardList";
import BoardPagination from "@/components/project/board/BoardPagination";
import BoardHeader from "@/components/project/board/Header";
import { useBoardList } from "@/query/board/useBoardList";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const [filters, setFilters] = useState({
    tag: null as string | null,
    search: null as string | null,
    page: 0,
  });

  const { data, isLoading } = useBoardList({
    projectId: Number(projectId),
    tag: filters.tag,
    search: filters.search,
    page: filters.page,
  });

  console.log(data.totalPages);

  return (
    <div>
      <BoardHeader
        tag={filters.tag}
        search={filters.search}
        onFilterChange={(tag, search) =>
          setFilters({ ...filters, tag, search, page: 0 })
        }
      />
      <BoardList posts={data?.content || []} isLoading={isLoading} />
      <BoardPagination
        currentPage={filters.page}
        totalPages={data?.totalPages || 1}
        onPageChange={(newPage) =>
          setFilters((prev) => ({ ...prev, page: newPage }))
        }
      />
    </div>
  );
};

export default Board;
