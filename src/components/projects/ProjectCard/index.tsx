import { Container, InfoWrapper } from "./style";
import { ProjectCardProps } from "./type";

const ProjectCard = ({
  name,
  icon,
  people,
  last_access_time,
  onClick,
}: ProjectCardProps) => {
  return (
    <Container onClick={onClick}>
      <img src={icon} alt={`${name} profile`} />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>
          {people}명 · {last_access_time}일 전
        </p>
      </InfoWrapper>
    </Container>
  );
};

export default ProjectCard;
