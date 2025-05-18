import { useRef, useState, useCallback } from "react";

export const usePopoverPosition = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const calculatePosition = useCallback(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const pos = {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      };
      setPosition(pos);
      return pos;
    }
  }, []);

  return {
    targetRef, // DOM에 연결할 ref
    position, // 계산된 위치
    calculatePosition, // 클릭 시 위치 계산하는 함수
  };
};
