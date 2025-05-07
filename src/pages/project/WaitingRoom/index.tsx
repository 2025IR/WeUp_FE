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
  MeetingCard,
  ToggleButton,
  VideoPreview,
} from "./style";
import Button from "@/components/common/Button";
import { useState } from "react";

const WaitingRoom = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

  const toggleMic = () => {
    setIsMicOn((prev) => !prev);
  };
  const toggleCam = () => {
    setIsCamOn((prev) => !prev);
  };

  const handleJoinMeeting = () => {};
  return (
    <Container>
      <MeetingCard>
        <VideoPreview>{/* 화상화면 */}</VideoPreview>
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

export default WaitingRoom;
