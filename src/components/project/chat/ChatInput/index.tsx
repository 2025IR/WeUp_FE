import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsSendFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Button from "@/components/common/Button";
import { InputContainer, PreviewImage, StyledInput } from "./style";
import { ChatInputProps } from "./type";
import { ChatSendProps } from "@/types/chat";
import { useSendImage } from "@/query/chat/usePostImage";

const ChatInput = ({ roomId, senderId, client }: ChatInputProps) => {
  const { projectId } = useParams();
  const [input, setInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
    console.log("여기는 들어와?");
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSendImage = () => {
    if (!imageFile || !projectId) return;

    const formData = new FormData();
    formData.append("projectId", String(projectId));
    formData.append("roomId", String(roomId));
    formData.append("userId", String(senderId));
    formData.append("file", imageFile);

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    sendImage(formData);
  };

  return (
    <>
      {/* 이미지 미리보기 + 전송 */}
      {previewUrl && (
        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img
            src={previewUrl}
            alt="preview"
            style={{ width: "100px", borderRadius: "8px" }}
          />
          <Button size="sm" variant="primary" onClick={handleSendImage}>
            이미지 전송
          </Button>
        </div>
      )}

      {/* 채팅 입력창 */}
      <InputContainer>
        <label htmlFor="imageUpload">
          <BiImageAdd style={{ cursor: "pointer" }} />
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>
        {previewUrl ? (
          <PreviewImage>
            <img src={previewUrl} alt="" />
          </PreviewImage>
        ) : (
          <StyledInput
            type="text"
            placeholder="메시지 입력"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}

        <Button iconOnly variant="primary" size="lg" onClick={handleSend}>
          <BsSendFill />
        </Button>
      </InputContainer>
    </>
  );
};

export default ChatInput;
