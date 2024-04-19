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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.videosCont}>
        <div className={styles.videoCont}>
          <video className={styles.video} ref={localPeerRef} autoPlay playsInline></video>
        </div>
        <div className={styles.videoCont}>
          <video className={styles.video} ref={remotePeerRef} autoPlay playsInline></video>
        </div>
      </div>
    </main>
  );
}
