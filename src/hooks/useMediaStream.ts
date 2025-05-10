import { useEffect, useRef, useState } from "react";

export const useMediaStream = (audioOn = true, videoOn = true) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getStream = async (audio: boolean, video: boolean) => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        audio,
        video,
      });

      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (e) {
      console.error("미디어 권한 요청 실패:", e);
    }
  };

  const stopStream = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  useEffect(() => {
    getStream(audioOn, videoOn);
    return stopStream;
  }, [audioOn, videoOn]);

  return { stream, videoRef, stopStream };
};
