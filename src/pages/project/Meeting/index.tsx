import MeetingHeader from "@/components/project/meeting/Header";
import { Container, Main } from "./style";
import { useParams } from "react-router-dom";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import { AccessToken } from "livekit-server-sdk";
import { useEffect, useState } from "react";
import "@livekit/components-styles/index.css";
import "./style.css";

const serverUrl = import.meta.env.VITE_LIVEKIT_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const Meeting = () => {
  const { projectId } = useParams();
  const [token, setToken] = useState<string | null>(null);

  /// 임시 토큰 발급
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

  if (!token) return <div>화상회의 준비 중...</div>;

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
