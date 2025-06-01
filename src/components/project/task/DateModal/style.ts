import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
  padding: 10px 4px;
  .rdp-root {
    width: 100%;
    font-size: 10px;

    --rdp-accent-color: ${({ theme }) => theme.colors.primary};
    --rdp-accent-background-color: ${({ theme }) => theme.colors.secondary};
  }

  .rdp-caption_label {
    font-size: 14px;
  }

  .rdp-nav {
    > button {
      > svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  .rdp-month_grid {
    width: 100%;
  }

  .rdp-day {
    height: 1.7rem;
  }

  .rdp-day_button {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 12px;
  }
`;
