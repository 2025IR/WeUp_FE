import projectsPage from "@/assets/image/projects-page.png";
import teamPage from "@/assets/image/team-page.png";
import todoPage from "@/assets/image/todo-page.png";
import boardPage from "@/assets/image/board-page.png";
import chatPage from "@/assets/image/chat-page.png";
import sadIcon from "@/assets/image/sad-icon.png";
import weupIcon from "@/assets/image/weup-icon.png";
import {
  Container,
  FeatureImage,
  FeatureInfo,
  FeatureSection,
  FinalButton,
  FinalImage,
  FinalInfo,
  FinalSection,
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
import { BiSolidUpArrowCircle } from "react-icons/bi";

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
            <img src={projectsPage} alt="weup projects page" />
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
            <img src={sadIcon} alt="weup logo" />
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

      <Section>
        <FeatureSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          isReverse={false}
        >
          <FeatureInfo>
            <p>인원 관리 & 스케줄</p>
            <div>
              <p>프로젝트 내 팀원들을 관리하고</p>
              <p>역할을 생성해 자유롭게 설정할 수 있습니다.</p>
              <p>모두의 일정을 한눈에 조율하세요</p>
            </div>
          </FeatureInfo>

          <FeatureImage>
            <img src={teamPage} alt="weup team page" />
          </FeatureImage>
        </FeatureSection>
      </Section>

      <Section>
        <FeatureSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          isReverse={true}
        >
          <FeatureInfo>
            <p>투두 & 달력</p>
            <div>
              <p>팀원들과 공동으로 관리하는 투두를 작성하고</p>
              <p>진행도, 담당자, 기간을 한 눈에 확인하세요</p>
              <p>홈 화면의 달력에서 전체 일정을 확인하세요</p>
            </div>
          </FeatureInfo>

          <FeatureImage>
            <img src={todoPage} alt="weup todo page" />
          </FeatureImage>
        </FeatureSection>
      </Section>

      <Section>
        <FeatureSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          isReverse={false}
        >
          <FeatureInfo>
            <p>게시판 & 게시글</p>
            <div>
              <p>프로젝트 별로 게시판을 이용할 수 있습니다</p>
              <p>파일과 공지들을 팀원들과 공유하고,</p>
              <p>회의록을 작성하여 중요한 내용을 기록하세요</p>
            </div>
          </FeatureInfo>

          <FeatureImage>
            <img src={boardPage} alt="weup board page" />
          </FeatureImage>
        </FeatureSection>
      </Section>

      <Section>
        <FeatureSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          isReverse={true}
        >
          <FeatureInfo>
            <p>채팅 & AI</p>
            <div>
              <p>팀원들과 채팅방에서 자유롭게 의논하세요</p>
              <p>채팅방 내 AI를 이용해 보다 편리하게 협업하세요</p>
              <p>일정, 게시판, 팀원 관리 페이지에서 AI를 이용해</p>
              <p>항목들을 추가하고 관리할 수 있습니다</p>
            </div>
          </FeatureInfo>

          <FeatureImage>
            <img src={chatPage} alt="weup chat page" />
          </FeatureImage>
        </FeatureSection>
      </Section>

      <Section>
        <FinalSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FinalImage>
            <img src={weupIcon} alt="weup logo" />
          </FinalImage>

          <FinalInfo>
            <strong>"팀플 흩어지지 말고 한 곳에서, we:up"</strong>
            <p>지금 바로 사용해보세요</p>
          </FinalInfo>

          <FinalButton>
            <button onClick={() => navigate("auth")}>
              we:up 무료로 사용하기
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <BiSolidUpArrowCircle />
            </button>
          </FinalButton>
        </FinalSection>
      </Section>
    </Container>
  );
};

export default Landing;
