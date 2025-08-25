import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  height: calc(100vh - 48px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroSection = styled(motion.div)`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  color: ${({ theme }) => theme.colors.text};

  > p {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.fontSize.caption};

    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  > button {
    padding: 0.75rem 1rem;
    cursor: pointer;

    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.textWhite};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export const HeroImage = styled.div`
  width: 560px;
  height: 356px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ProblemSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ProblemImage = styled.div`
  width: 100px;
  height: 100px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ProblemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    align-items: center;

    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Strong = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const FeatureSection = styled(motion.div)<{ isReverse: boolean }>`
  width: 930px;
  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
`;

export const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

  color: ${({ theme }) => theme.colors.text};

  > p {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const FeatureImage = styled.div`
  width: 530px;
  > img {
    width: 100%;
  }
`;

export const FinalSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  > button {
    padding: 0.75rem 1rem;
    cursor: pointer;

    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.textWhite};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export const FinalImage = styled.div`
  width: 100px;
  height: 100px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const FinalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  > strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
