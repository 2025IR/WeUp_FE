export interface BoardHeaderProps {
  tag: string | null;
  search: string | null;
  onFilterChange: (tag: string | null, search: string | null) => void;
}
