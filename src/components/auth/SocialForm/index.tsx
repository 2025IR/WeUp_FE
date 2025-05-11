import { Container, HeaderSection, MainSection } from "./style";

const SOCIAL_PROVIDERS = [
  {
    name: "Google",
    url: "https://your-api.com/auth/google",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/google.png",
  },
  {
    name: "Kakao",
    url: "https://your-api.com/auth/kakao",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/kakao_talk__1__gbT_icon.ico",
  },
  {
    name: "Naver",
    url: "https://your-api.com/auth/naver",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/naver.png",
  },
];

const SocialForm = () => {
  return (
    <Container>
      <HeaderSection>
        <hr />
        <p>Or Login With</p>
        <hr />
      </HeaderSection>
      <MainSection>
        {SOCIAL_PROVIDERS.map(({ name, url, icon }) => (
          <a href={url} key={name}>
            <img src={icon} alt={name} />
          </a>
        ))}
      </MainSection>
    </Container>
  );
};

export default SocialForm;
