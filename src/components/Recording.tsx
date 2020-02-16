import React, { useState, useRef } from "react";
import moment from 'moment';
import styled from "styled-components/macro";
import { ReactMic } from '@cleandersonlobo/react-mic';

export enum RecordState {
  Stop,
  Start,
}

interface MicSaveEventProps {
  blob: Blob;
  startTime: Date;
  stopTime: Date;
  options: any;
  blobURL: string;
}

export const Recording: React.FC = () => {
  const [recordStatus, setRecordStatus] = useState(RecordState.Stop);
  const [showPreview, setShowPreview] = useState(false);
  const audioEl = useRef<HTMLAudioElement | null>(null);

  // useRefでAudioタグを取得しておく (WebAudio API)

  const startRecording = () => {
    console.log('start')
    setRecordStatus(RecordState.Start);
  }

  const stopRecording = () => {
    console.log('stop')
    setRecordStatus(RecordState.Stop);
  };

  const previewAudio = (e: MicSaveEventProps) => {
    const filename = moment().format("YYYYMMDDHHmmss");
    console.log(filename);

    // e.blob
    console.log(e);

    const url = window.URL || window.webkitURL;

    if (audioEl.current) {
      console.log('attach audio BlobURL to DOM');
      audioEl.current.src = url.createObjectURL(e.blob);
    } else {
      console.log("can not attach Blob because of audioEl is null");
    }

    setShowPreview(true);
  };


  return (
    <Record>
      <Status>
        <Mic
          record={recordStatus === RecordState.Start}
          onStop={previewAudio}
          strokeColor="white"
          backgroundColor="#f14c00"
          mimeType="audio/wav"
        />
      </Status>
      <div>再生時間</div>
      <input type="button" name="start" value="start Recording" onClick={startRecording} />
      <input type="button" name="stop" value="stop Recording" onClick={stopRecording} />

      {/* {showPreview && ( */}
      <div
        style={{ display: showPreview ? '' : 'none' }}
      >
        <Audio ref={audioEl} controls></Audio>
      </div>
      {/* )} */}
    </Record>
  )
}


const styles = {
  recordTextColor: "#FFF",
};

const Record = styled.div`
  text-align: center;
  width: 200px;
  height: 160px;
  padding: 20px;
  border-radius: 4px;
  background-color: #f14c00;
  color: ${styles.recordTextColor};
`;

const Status = styled.div`
  color: white;
`;

const Mic = styled(ReactMic)`
  width: 100%;
`;

const Audio = styled.audio`
  width: 100%;
  margin: 10px 0;
`;