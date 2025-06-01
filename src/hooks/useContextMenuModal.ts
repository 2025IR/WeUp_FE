import { useState, useRef, useEffect } from "react";

export const useContextMenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [modalType, setModalType] = useState<"assignee" | "date" | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (
    pos: { top: number; left: number },
    type: "assignee" | "date"
  ) => {
    setPosition(pos);
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
    openModal,
    closeModal,
  };
};
