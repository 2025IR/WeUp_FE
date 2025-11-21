import { useEffect, useRef, useState } from "react";

export const useMediaStream = (audioOn = true, videoOn = true) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const stopStream = () => {
    if (streamRef.current) {
      console.log(
        "[useMediaStream] stopStream, tracks:",
        streamRef.current.getTracks()
      );
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setStream(null);
  };

  const getStream = async (audio: boolean, video: boolean) => {
    try {
      stopStream();

      const newStream = await navigator.mediaDevices.getUserMedia({
        audio,
        video,
      });

      streamRef.current = newStream;
      setStream(newStream);

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (e) {
      console.error("미디어 권한 요청 실패:", e);
    }
  };

  useEffect(() => {
    getStream(audioOn, videoOn);

    return () => {
      console.log("[useMediaStream] cleanup 호출");
      stopStream();
    };
  }, [audioOn, videoOn]);

  return { stream, videoRef, stopStream };
};
