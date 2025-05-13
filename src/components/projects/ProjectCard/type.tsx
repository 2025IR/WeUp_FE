export type ProjectCardProps = {
  id: number;
  name: string;
  icon: string;
  people: number;
  project_created_time: string;
  status: boolean;
  onClick?: () => void;
};
