import { TodoType } from "@/types/todo";
import { useState, useRef, useEffect } from "react";

export const useContextMenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [modalType, setModalType] = useState<"assignee" | "date" | null>(null);
  const [payload, setPayload] = useState<TodoType | null>(null);
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(
    null
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (
    pos: { top: number; left: number },
    type: "assignee" | "date",
    task: TodoType,
    onClose?: () => void
  ) => {
    setPosition(pos);
    setModalType(type);
    setPayload(task);
    setOnCloseCallback(() => onClose ?? null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onCloseCallback?.();
    setOnCloseCallback(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    modalRef,
    modalPosition: position,
    modalType,
    payload,
    openModal,
    closeModal,
  };
};
