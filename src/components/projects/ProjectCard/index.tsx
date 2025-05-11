import { Container, InfoWrapper } from "./style";
import { ProjectCardProps } from "./type";

const ProjectCard = ({
  name,
  icon,
  people,
  final_time,
  onClick,
}: ProjectCardProps) => {
  return (
    <Container onClick={onClick}>
      <img src={icon} alt={`${name} profile`} />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>
          {people}명 · {final_time}일 전
        </p>
      </InfoWrapper>
    </Container>
  );
};

export default ProjectCard;
