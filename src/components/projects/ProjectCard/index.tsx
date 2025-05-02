import { ProjectCardProps } from "./type";

const ProjectCard = ({
  name,
  icon,
  people,
  last_access_time,
  onClick,
}: ProjectCardProps) => {
  return (
    <div onClick={onClick}>
      <img src={icon} alt={`${name} profile`} />
      <div>
        <h2>{name}</h2>
        <p>
          {people}명 · {last_access_time}일 전전
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
