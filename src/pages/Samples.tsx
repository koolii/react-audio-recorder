import React from 'react';
import { UserMediaDevices } from '../components/UserMediaDevices';
import { Recording } from '../components/Recording';
import { VoiceRecorder } from '../components/VoiceRecorder';

export const Samples: React.FC = () => {
  // const [clickedReactMic, setClickedReactMid] = useState(false);
  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   setClickedReactMid(true);
  //   console.log("clicked");
  // };

  return (
    <div>
      <div>
        <UserMediaDevices />
      </div>
      <div>
        <h2>1. cleandersonlobo/react-mic</h2>
        <Recording />
        {/* {!clickedReactMic ? (
          <button onClick={(e) => handleClick(e)}>
            start recording
          </button>
        ) : (
          <button onClick={() => setClickedReactMid(false)}>
            stop
          </button>
        )} */}
      </div>
      <div>
        <h2>VoiceRecorder</h2>
        <VoiceRecorder />
      </div>
    </div>
  )
}