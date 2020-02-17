import React, { useMemo, useRef, useState, useEffect } from 'react';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import styled from 'styled-components/macro';

console.log(RecordRTC);
console.log(StereoAudioRecorder);

interface Recorder {
  startRecording();
  stopRecording(callback: Function);
  getBlob();
  getDataURL();
  destroy();
  state: string;
}

export const VoiceRecorder: React.FC = () => {
  const isSafari = useMemo(() => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }, [])
  const microphone = useRef<MediaStream | null>(null);
  const recorder = useRef<Recorder | null>(null);
  const audioEl = useRef<HTMLAudioElement | null>(null);
  const resultEl = useRef<HTMLAudioElement | null>(null);
  const [recording, setRecording] = useState<boolean>(false);

  const getMicPermission = async () => {
    if (microphone.current) {
      return microphone.current;
    }

    if (!navigator || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("This browser doesn't supports getUserMedia API.");
      if (!!navigator.getUserMedia) {
        console.log('This browser uses deprecated getUserMedia API.');
      }

      throw new Error("can't use VoiceRecorder Component");
    }

    try {
      const mic = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false
        }
      });

      return mic;
    } catch (error) {
      alert('Unable to capture your microphone.');
      throw error;
    }
  }

  const startRec = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!microphone.current) {
      microphone.current = await getMicPermission();

      if (isSafari) {
        startRec(e);
        return;
      }
    }

    if (audioEl.current) {
      audioEl.current.muted = true;
      audioEl.current.srcObject = microphone.current;
    }

    const options = {
      type: 'audio',
      numberOfAudioChannels: 2,
      checkForInactiveTracks: true,
      bufferSize: 16384,
      recorderType: StereoAudioRecorder,
    };

    // if (isSafari) {
    //   options.recorderType = StereoAudioRecorder;
    // }

    if (recorder.current) {
      recorder.current.destroy();
      recorder.current = null;
    }

    recorder.current = RecordRTC(microphone.current, options);
    // recorder.startRecording();

    console.log(recorder.current);

    if (!recording) {
      setRecording(true);
    }
  };
  const stopRec = (e: React.MouseEvent) => {
    e.preventDefault();

    if (recording) {
      setRecording(false);
    }
  }

  useEffect(() => {
    console.log(`useEffect recording: ${recording}`);
    console.log(`useEffect microphone: ${microphone.current}`);
    console.log(`useEffect recorder: ${recorder.current}`);
    // レコーディング開始
    if (recording && microphone.current) {
      console.log('start recording');

      if (recorder.current) {
        recorder.current.startRecording();
      }
    } else if (!recording && microphone.current && recorder.current && recorder.current.state === 'recording') {
      console.log('stop recording');

      if (recorder.current) {
        recorder.current.stopRecording(() => {
          console.log("STOP Recording callback");
          if (resultEl.current && recorder.current) {
            const url = URL.createObjectURL(recorder.current.getBlob());
            console.log(url);
            resultEl.current.src = url;
            console.log("resultEl is ready to play");
          }
        });

        // console.log("recorder is destoying");
        // recorder.current.destroy();
        // recorder.current = null;
      }
    } else {
      console.log('something wrong');
    }
  }, [recording, microphone, recorder]);

  // useEffect(() => {
  //   if (isSafari) {
  //     alert('create AudioContext instance');
  //     const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  //     console.log(audioContext);

  //     let scriptProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);
  //     localScriptProcessor = scriptProcessor;

  //     if (audioContext.createMediaStreamDestination) {
  //       destinationNode = audioContext.createMediaStreamDestination()
  //     }
  //     else {
  //       destinationNode = audioContext.destination
  //     }
  //   }

  //   alert('finished creating audioContext instance');
  // })

  // useEffect(() => {
  //   if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
  //     if (typeof (navigator as any).webkitGetUserMedia !== 'undefined') {
  //       navigator.getUserMedia = (navigator as any).webkitGetUserMedia;
  //     }

  //     if (typeof (navigator as any).mozGetUserMedia !== 'undefined') {
  //       navigator.getUserMedia = (navigator as any).mozGetUserMedia;
  //     }
  //   }

  //   alert(`navigator.getUserMedia: ${navigator.getUserMedia}`);
  // }, []);

  console.log(`This browser is Safari or not: ${isSafari}`);

  return (
    <Container>
      <Control>
        <Button name="start" value="START" onClick={startRec} />
        <Button name="stop" value="STOP" onClick={stopRec} />
      </Control>
      <div>
        <div>
          <span>録音が開始されると↓のAudioが有効化されますので、特に再生せずとも録音が開始されています</span>
          <Audio ref={audioEl} controls></Audio>
        </div>
        <div>
          <span>録音した音声は↓から確認できます</span>
          <Audio ref={resultEl} controls></Audio>
        </div>
      </div>
    </Container>
  );
}

// 本当は align-itemsで 中央寄せにできると思ったが、うまく行かなかったので
// text-align: centerで代用
const Container = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f14c00;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
`;

const Control = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Audio = styled.audio`
  width: 80%;
  margin: 10px 0;
`;

const Button = styled.input.attrs({ type: 'button' })`
  width: 30%;
  height: 30px;
  background-color: #fff;
  border-radius: 12px;
`;