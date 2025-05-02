export interface ModalProps {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
  onClick: () => void;
  children: React.ReactNode;
  type?: "form" | "default";
  onClose: () => void;
}
