import { useProjectInfo } from "@/query/project/useProjectInfo";
import { BiEditAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";

const Description = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);

  const { data, isLoading, error } = useProjectInfo(project_id);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <div>
      <textarea name="" id="">
        {data.description}
      </textarea>
      <BiEditAlt />
    </div>
  );
};

export default Description;
