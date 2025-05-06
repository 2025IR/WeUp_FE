const SOCIAL_PROVIDERS = [
  {
    name: "Google",
    url: "https://your-api.com/auth/google",
    icon: "/assets/social/google.svg",
  },
  {
    name: "Kakao",
    url: "https://your-api.com/auth/kakao",
    icon: "/assets/social/kakao.svg",
  },
  {
    name: "Naver",
    url: "https://your-api.com/auth/naver",
    icon: "/assets/social/naver.svg",
  },
];

const SocialForm = () => {
  return (
    <div>
      <div>
        <hr />
        <p>Or Login With</p>
        <hr />
      </div>
      <div>
        {SOCIAL_PROVIDERS.map(({ name, url, icon }) => (
          <a href={url} key={name}>
            <img src={icon} alt={name} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialForm;
