import { useEffect, useRef } from "react";
import { AlertCard, AlertTime, AlertTitle, Container } from "./style";
import { useGetAlertsList } from "@/query/alert/useGetAlertsList";
import { formatTodoDate } from "@/utils/formatTime";

interface PropsType {
  onClose: () => void;
}

const AlertModal = ({ onClose }: PropsType) => {
  // 모달 창 바깥 클릭 시 닫기
  const ref = useRef<HTMLDivElement | null>(null);
  const { data: Alerts } = useGetAlertsList();

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      onClose();
    };
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [onClose]);

  return (
    <Container ref={ref}>
      <p>모든 알림</p>
      <div>
        {Alerts &&
          Alerts.map((alert) => (
            <AlertCard key={alert.notificationId}>
              <AlertTitle isGreen={!alert.read}>
                <div />
                <p>{alert.message}</p>
              </AlertTitle>
              <AlertTime>
                <p>{formatTodoDate(new Date(alert.createdAt))}</p>
              </AlertTime>
            </AlertCard>
          ))}
      </div>
    </Container>
  );
};

export default AlertModal;
