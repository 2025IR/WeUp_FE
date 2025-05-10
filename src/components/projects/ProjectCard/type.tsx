export type ProjectCardProps = {
  id: number;
  name: string;
  icon: string;
  people: number;
  last_access_time: string;
  onClick?: () => void;
};
