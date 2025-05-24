import styled from "@emotion/styled";

export const EditSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EditTitle = styled.div`
  width: 100%;
  padding: 0 0.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > svg {
    width: ${({ theme }) => theme.icon.md};
    height: ${({ theme }) => theme.icon.md};
    color: ${({ theme }) => theme.colors.textLight};
    cursor: pointer;
  }
`;

export const EditInput = styled.div`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};

  > input {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ColorSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    padding: 0 0.25rem;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ColorCard = styled.div<{ color: string; selected: boolean }>`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.secondary : theme.colors.background};

  > div {
    width: 21px;
    height: 21px;
    border-radius: 5px;
    background-color: ${({ theme, color }) =>
      theme.colors[color as keyof typeof theme.colors]};
  }

  > p {
    flex: 1;
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.textLight};
  }

  > svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
