import React from "react";
import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const WebValidation = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    startVideo();
    loadModels();
  });
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      if (detections.length > 0) {
        window.location.href = "/home";
      }
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-green-300 min-h-screen">
      <h1 className="text-6xl font-bold mb-4">Face verification</h1>
      <div className="flex justify-center items-center border-2 border-black rounded-md ">
        <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
      </div>
      <canvas ref={canvasRef} width="940" height="650" className="appcanvas" />
      <h2 className="text-3xl font-bold mt-5">Verifying please wait......</h2>
    </div>
  );
};

export default WebValidation;
