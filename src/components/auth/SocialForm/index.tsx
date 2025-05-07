import { Container, HeaderSection, MainSection } from "./style";

const SOCIAL_PROVIDERS = [
  {
    name: "Google",
    url: "https://your-api.com/auth/google",
    icon: "https://pixabay.com/get/gb02fdab7a65ffc304f2dd11ab169ebf8de1c878ef5aff546c8ef89caf218a882e9573125bcb28ae718203f0a49beb29179640439438596c3bb2c7b00836572eb93af0e9d5d8e5ae9fed85dc9a7e2d993_640.png",
  },
  {
    name: "Kakao",
    url: "https://your-api.com/auth/kakao",
    icon: "https://pixabay.com/get/gb02fdab7a65ffc304f2dd11ab169ebf8de1c878ef5aff546c8ef89caf218a882e9573125bcb28ae718203f0a49beb29179640439438596c3bb2c7b00836572eb93af0e9d5d8e5ae9fed85dc9a7e2d993_640.png",
  },
  {
    name: "Naver",
    url: "https://your-api.com/auth/naver",
    icon: "https://pixabay.com/get/gb02fdab7a65ffc304f2dd11ab169ebf8de1c878ef5aff546c8ef89caf218a882e9573125bcb28ae718203f0a49beb29179640439438596c3bb2c7b00836572eb93af0e9d5d8e5ae9fed85dc9a7e2d993_640.png",
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
