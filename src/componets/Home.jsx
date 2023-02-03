import React from 'react'
import SpeechRecognition, {
    useSpeechRecognition
  } from "react-speech-recognition";
  
export const Home = () => {
    const { transcript, resetTranscript } = useSpeechRecognition({
        continuous: true
      });
      // const [translate, setTranslate] = useState( [transcript])
      let str = transcript;
      console.log(str)
     
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      };
  return (
    <div>
    <button onClick={SpeechRecognition.startListening}>Start</button>
    <button onClick={SpeechRecognition.stopListening}>Stop</button>
    <button onClick={resetTranscript}>Reset</button>
   
    <p>{transcript}</p>
<textarea id="story" name="story" value={transcript}
        rows="5" cols="33" placeholder='text will be  printed here  '
     
       >
        
         

</textarea>

  </div>
  )
}
