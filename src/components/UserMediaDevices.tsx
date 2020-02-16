import React from 'react';

export const UserMediaDevices: React.FC = () => {
  const resultGetUserMediaAPI = !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  const resultAudioContext = !!window.AudioContext || !!(window as any).webkitAudioContext;

  return (
    <ul>
      <li><b>User-Agent:</b> {navigator.userAgent}</li>
      <li><b>getUserMedia API:</b> {resultGetUserMediaAPI ? "yes" : "no"}</li>
      <li><b>AudioContext:</b> {resultAudioContext ? "yes" : "no"}</li>
    </ul>
  );
};
