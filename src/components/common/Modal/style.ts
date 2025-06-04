import styled from "@emotion/styled";
import { ModalStyledProps } from "./type";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Container = styled.div<ModalStyledProps>`
  width: ${({ type }) => (type === "default" ? "25rem" : "27rem")};
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ type }) => (type === "default" ? "2rem" : "1rem")};

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const IconWrapper = styled.div`
  width: 1.75rem;
  height: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.full};

  > svg {
    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.colors.primary};
  }
`;

// default
export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// form
export const StyledHr = styled.hr`
  width: 100%;

  border-style: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
