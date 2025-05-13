import Description from "@/components/project/home/Description";
import { useProjectInfo } from "@/query/project/useProjectInfo";
import { setProject } from "@/store/project";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Home = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);
  const dispatch = useDispatch();

  const { data } = useProjectInfo(project_id);

  useEffect(() => {
    if (data) {
      dispatch(
        setProject({
          id: project_id,
          ...data,
        })
      );
    }
  }, [data, dispatch, project_id]);
  return (
    <div>
      <Description />
    </div>
  );
};

export default Home;
