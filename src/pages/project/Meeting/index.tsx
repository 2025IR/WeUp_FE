import MeetingHeader from "@/components/project/meeting/Header";
import { Container, Main } from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles/index.css";
// import { useEnterMeeting } from "@/query/meeting/useEnterMeeting";
import { AccessToken } from "livekit-server-sdk";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const serverUrl = import.meta.env.VITE_LIVEKIT_URL;
// 임시 토큰
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const Meeting = () => {
  const { projectId } = useParams();
  const [searchParams] = useSearchParams();
  const isMicOn = searchParams.get("isMicOn") === "true";
  const isCamOn = searchParams.get("isCamOn") === "true";
  const themeFromUrl = searchParams.get("theme");
  // const project_id = Number(projectId);
  // 임시 토큰
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchToken = async () => {
      const at = new AccessToken(apiKey, apiSecret, {
        identity: "yoon", // 닉네임 등으로 교체 가능
      });
      at.addGrant({ roomJoin: true, room: projectId });

      const jwt = await at.toJwt();
      setToken(jwt);
    };

    fetchToken();
  }, [projectId]);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (themeFromUrl && themeFromUrl !== theme) {
      toggleTheme();
    }
  }, [themeFromUrl]);

  // const { mutate, data: token, isPending } = useEnterMeeting();

  // useEffect(() => {
  //   if (project_id) mutate(project_id);
  // }, [project_id]);

  // if (isPending || !token) return <div>화상회의 준비 중...</div>;

  if (!token) return <div>화상회의 준비 중...</div>;

  return (
    <Container>
      <MeetingHeader />
      <Main>
        <LiveKitRoom
          data-lk-theme="default"
          token={token}
          serverUrl={serverUrl}
          connect
          video={isCamOn}
          audio={isMicOn}
        >
          <VideoConference />
        </LiveKitRoom>
      </Main>
    </Container>
  );
};

export default Meeting;
