import { useEffect, useRef } from "react";
import { AlertCard, AlertTime, AlertTitle, Container } from "./style";

interface PropsType {
  onClose: () => void;
}

const AlertModal = ({ onClose }: PropsType) => {
  // 모달 창 바깥 클릭 시 닫기
  const ref = useRef<HTMLDivElement | null>(null);

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
        <AlertCard>
          <AlertTitle>
            <div />
            <p>
              프로젝트 "안녕하세요 정윤석입니다 안녕하세요 정윤석입니다
              안녕하세요
            </p>
          </AlertTitle>
          <AlertTime>
            <p>8월 12일</p>
          </AlertTime>
        </AlertCard>
      </div>
    </Container>
  );
};

export default AlertModal;
