import styled from "@emotion/styled";

export const GridItem = styled.div`
  height: 3.75rem;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 2fr 3fr 2fr 6fr 1.25rem;
  column-gap: 5rem;
  align-items: center;
  justify-items: center;

  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:hover .edit-btn > svg {
    display: block;
  }
`;

export const RoleSection = styled.div`
  min-width: 7.5rem;
  justify-self: start;
  padding-left: 2rem;

  cursor: pointer;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const NameSection = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const EmailSection = styled.div`
  min-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneNumberSection = styled.div`
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    cursor: pointer;
    display: none;
  }
`;

export const ContextMenu = styled.div<{ top: number; left: number }>`
  position: absolute;
  width: 7.5rem;
  height: 4.25rem;
  top: ${({ top }) => top + 10}px;
  left: ${({ left }) => left - 90}px;
  z-index: ${({ theme }) => theme.zIndex.toast};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 14px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  > hr {
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    border: none;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.textLight};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalContent = styled.p`
  > span {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
