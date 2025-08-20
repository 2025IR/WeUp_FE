import landingImage from "@/assets/image/landingImage1.png";
import landingImage2 from "@/assets/image/landingImage2.png";
import {
  Container,
  HeroImage,
  HeroInfo,
  HeroSection,
  ProblemImage,
  ProblemInfo,
  ProblemSection,
  Section,
  Strong,
  Title,
} from "./style";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <HeroSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HeroInfo>
            <p>"팀플, 흩어지지 말고 한 곳에서"</p>
            <div>
              <p>대학생 팀 프로젝트를 위한 올인원 협업 플랫폼 we:up</p>
              <p>
                일정 관리, 채팅, 화상 회의, 역할 분담, 파일 공유, AI 비서까지
              </p>
              <p>팀플에 필요한 모든 기능을 한곳에서 경험해보세요!</p>
            </div>
            <button onClick={() => navigate("auth")}>
              we:up 무료로 사용하기
            </button>
          </HeroInfo>

          <HeroImage>
            <img src={landingImage} alt="weup projects page" />
          </HeroImage>
        </HeroSection>
      </Section>
      <Section>
        <ProblemSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProblemImage>
            <img src={landingImage2} alt="weup logo" />
          </ProblemImage>

          <ProblemInfo>
            <Title>"팀플, 왜 이렇게 복잡할까?"</Title>
            <div>
              <p>회의는 디스코드, 대화는 카톡, 기록은 노션에서</p>
              <p>여러 도구를 오가다 보면</p>
              <p>자료는 흩어지고, 관리가 복잡해지고</p>
              <p>협업이 더 힘들어집니다</p>
            </div>
            <Strong>we:up으로 간편하게 관리하고 시작하세요</Strong>
          </ProblemInfo>
        </ProblemSection>
      </Section>
    </Container>
  );
};

export default Landing;
