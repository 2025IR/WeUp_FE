import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Button from "@/components/common/Button";
import { ImageWrapper, InputContainer, StyledInput } from "./style";
import { ChatInputProps } from "./type";
import { ChatSendProps } from "@/types/chat";
import { useSendImage } from "@/query/chat/usePostImage";
import Modal from "@/components/common/Modal";
import { AiFillFileImage } from "react-icons/ai";

const ChatInput = ({ roomId, senderId, client }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: sendImage } = useSendImage({
    onSuccess: () => {
      setImageFile(null);
      setPreviewUrl(null);
    },
    onError: (err) => {
      console.error("이미지 전송 실패:", err.response?.data?.message);
    },
  });

  const handleSend = () => {
    if (!input.trim() || !client || !client.connected) {
      console.log(client);
      return;
    }

    const payload: ChatSendProps = {
      senderId,
      message: input,
    };

    client.publish({
      destination: `/app/send/${roomId}`,
      body: JSON.stringify(payload),
    });

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSendImage = () => {
    if (!imageFile || !roomId) return;

    const formData = new FormData();
    formData.append("projectId", String(roomId));
    formData.append("roomId", String(roomId));
    formData.append("userId", String(senderId));
    formData.append("file", imageFile);

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    sendImage(formData);
    setIsModalOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setIsModalOpen(true);
  };

  const handleClearImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setIsModalOpen(false);
  };

  return (
    <InputContainer>
      <label htmlFor="imageUpload">
        <BiImageAdd style={{ cursor: "pointer" }} />
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>

      <StyledInput
        type="text"
        placeholder="메시지 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button iconOnly variant="primary" size="lg" onClick={handleSend}>
        <BsSendFill />
      </Button>

      {isModalOpen && previewUrl && (
        <Modal
          icon={<AiFillFileImage />}
          title="이미지 전송"
          buttonText="보내기"
          onClick={handleSendImage}
          onClose={handleClearImage}
        >
          <ImageWrapper>
            <img src={previewUrl} alt="" />
          </ImageWrapper>
        </Modal>
      )}
    </InputContainer>
  );
};

export default ChatInput;
