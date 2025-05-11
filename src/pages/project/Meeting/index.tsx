import MeetingHeader from "@/components/project/meeting/Header";
import { Container, Main } from "./style";
import { useParams } from "react-router-dom";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles/index.css";
import { useEnterMeeting } from "@/query/meeting/useEnterMeeting";
import { useEffect } from "react";

const serverUrl = import.meta.env.VITE_LIVEKIT_URL;

const Meeting = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);

  const { mutate, data: token, isPending } = useEnterMeeting();

  useEffect(() => {
    if (project_id) mutate(project_id);
  }, [project_id]);

  /// 임시 토큰 발급

  if (isPending || !token) return <div>화상회의 준비 중...</div>;
  if (token) console.log(token);

  return (
    <Container>
      <MeetingHeader />
      <Main>
        <LiveKitRoom token={token} serverUrl={serverUrl} connect>
          <VideoConference />
        </LiveKitRoom>
      </Main>
    </Container>
  );
};

export default Meeting;
