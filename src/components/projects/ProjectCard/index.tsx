import { Container, InfoWrapper } from "./style";
import { ProjectCardProps } from "./type";

const ProjectCard = ({
  name,
  icon,
  people,
  project_created_time,
  status,
  onClick,
}: ProjectCardProps) => {
  const formatDate = (datetime: string | null) => {
    if (!datetime) return "날짜 없음";
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <Container onClick={onClick} status={status}>
      <img src={icon} alt={`${name} profile`} />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>
          {people}명 · {formatDate(project_created_time)}
        </p>
      </InfoWrapper>
    </Container>
  );
};

export default ProjectCard;
