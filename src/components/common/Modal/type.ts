export interface ModalStyledProps {
  type: "default" | "form";
}

export interface ModalProps extends Partial<ModalStyledProps> {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
  onClick: () => void;
  children: React.ReactNode;
  onClose: () => void;
}
