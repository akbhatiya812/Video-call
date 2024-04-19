"use client";
import { useRef, useEffect } from "react";
import styles from './page.module.css';

export default function Home() {

  const localPeerRef = useRef(null);
  const remotePeerRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (localPeerRef.current) {
          localPeerRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={styles.videosCont}>

        <video className={styles.video1} ref={localPeerRef} autoPlay playsInline></video>
        <video className={styles.video2} ref={remotePeerRef} autoPlay playsInline></video>
        <button className={styles.btn}>Start New Chat</button>
      </div>
    </main>
  );
}
