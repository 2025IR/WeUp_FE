interface BoardPaginationProps {
  currentPage: number; // 현재 페이지 (0-based)
  totalPages: number; // 전체 페이지 수
  onPageChange: (page: number) => void; // 페이지 이동 콜백
}

const BoardPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: BoardPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "1rem" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "6px 12px",
            backgroundColor: page === currentPage ? "#007bff" : "#f0f0f0",
            color: page === currentPage ? "#fff" : "#333",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default BoardPagination;
