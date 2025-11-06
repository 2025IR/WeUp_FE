import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
} from "react-icons/bi";
import {
  ButtonWrapper,
  Container,
  InfoSection,
  MeetHeader,
  MeetingCard,
  Overlay,
  ToggleButton,
  VideoPreview,
} from "./style";
import Button from "@/components/common/Button";
import { useState } from "react";
import { useMediaStream } from "@/hooks/useMediaStream";
import { useMeetingCount } from "@/query/meeting/useMeetingCount";
import { useTheme } from "@/contexts/ThemeContext";
import IconLabel from "@/components/common/IconLabel";
import { BsHeadphones } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Meet = () => {
  // const navigate = useNavigate();
  const { id: projectId, memberId } = useSelector(
    (state: RootState) => state.project
  );
  const project_id = Number(projectId);

  const { data: count } = useMeetingCount(project_id);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

  const { theme } = useTheme();

  console.log(`인원 수 ${count}`);

  const toggleMic = () => {
    setIsMicOn((prev) => !prev);
  };
  const toggleCam = () => {
    setIsCamOn((prev) => !prev);
  };

  const handleJoinMeeting = () => {
    // navigate(`/meeting/${projectId}`);
    console.log("열기 전 memberId", memberId);
    window.open(
      `/meeting/${projectId}?memberId=${memberId}&isMicOn=${isMicOn}&isCamOn=${isCamOn}&theme=${theme}`,
      "_blank",
      "width=932,height=808,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,noopener,noreferrer"
    );
  };

  const { videoRef, stream } = useMediaStream(isMicOn, isCamOn);

  return (
    <Container>
      <MeetHeader>
        <IconLabel icon={<BsHeadphones />} size="lg" fontSize="body">
          화상회의 대기실
        </IconLabel>
      </MeetHeader>
      <MeetingCard>
        <VideoPreview>
          {/* 항상 video 태그는 유지 */}
          <video ref={videoRef} autoPlay playsInline muted />

          {/* 로딩 중일 때 오버레이 */}
          {stream === null && <Overlay>로딩중</Overlay>}

          {/* 카메라 꺼졌을 때 오버레이 */}
          {!isCamOn && (
            <Overlay>
              <img
                src="https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png"
                alt="user_profile_image"
              />
            </Overlay>
          )}
        </VideoPreview>
        <InfoSection>
          <h1>Rumon 화상회의실</h1>
          <p>0/4</p>
          <ButtonWrapper>
            <ToggleButton onClick={toggleMic}>
              {isMicOn ? <BiMicrophone /> : <BiMicrophoneOff />}
            </ToggleButton>
            <ToggleButton onClick={toggleCam}>
              {isCamOn ? <BiVideo /> : <BiVideoOff />}
            </ToggleButton>
          </ButtonWrapper>
          <Button fullWidth size="lg" onClick={handleJoinMeeting}>
            화상 회의실 참가하기
          </Button>
        </InfoSection>
      </MeetingCard>
    </Container>
  );
};

export default Meet;
