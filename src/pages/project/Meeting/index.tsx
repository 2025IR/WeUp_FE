import MeetingHeader from "@/components/project/meeting/Header";
import { Container, Main } from "./style";
import { useParams } from "react-router-dom";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles/index.css";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const serverUrl = import.meta.env.VITE_LIVEKIT_URL;

const Meeting = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [meetingConfig, setMeetingConfig] = useState<null | {
    token: string;
    memberId: number;
    isMicOn: boolean;
    isCamOn: boolean;
    theme: string;
  }>(null);

  const { theme, toggleTheme } = useTheme();

  /* localStorage 에서 회의 정보 가져오기 */
  useEffect(() => {
    if (!projectId) return;

    const raw = localStorage.getItem(`weup:meeting:${projectId}`);
    if (!raw) {
      alert("회의 정보가 없습니다. 대기실에서 다시 입장해주세요.");
      window.close();
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      setMeetingConfig(parsed);
    } catch (error) {
      console.error("회의 정보 파싱 실패", error);
      window.close();
    }
  }, [projectId]);

  /* 테마 적용 (localStorage 에 저장된 값으로) */
  useEffect(() => {
    if (meetingConfig?.theme && meetingConfig.theme !== theme) {
      toggleTheme();
    }
  }, [meetingConfig?.theme]);

  /* 회의 종료 시 localStorage 정리 */
  useEffect(() => {
    return () => {
      if (projectId) {
        localStorage.removeItem(`weup:meeting:${projectId}`);
      }
    };
  }, [projectId]);

  if (!meetingConfig) return <div>회의 준비중입니다...</div>;

  const { token, isMicOn, isCamOn } = meetingConfig;

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
          onDisconnected={() => window.close()}
        >
          <VideoConference />
        </LiveKitRoom>
      </Main>
    </Container>
  );
};

export default Meeting;
