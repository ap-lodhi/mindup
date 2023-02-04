import React, { useState } from 'react'
import SpeechRecognition, {
    useSpeechRecognition
} from "react-speech-recognition";
import axios from "axios"
import "./home.css"


export const Home = () => {


    const { transcript, resetTranscript } = useSpeechRecognition({ continuous: true });
    const [translate, setTranslate] = useState("")
    let str = transcript;
   // console.log(str)

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    };

    const hindi = () => {

        const params = new URLSearchParams();
        params.append('q', str);
        params.append('source', "en");
        params.append('target', "hi");
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate', params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res.data)
            setTranslate(res.data.translatedText)
        })
    };




    return (
        <div  className='container'>
            <div className='btn'>

            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            </div>

            <p>{transcript}</p>
            <textarea id="story" name="story" value={transcript}
                rows="5" cols="33" placeholder='text will be  printed here  '

            >





            </textarea>

            <textarea id="story" name="story" value={translate}
                rows="5" cols="33" placeholder='text will be  printed here'>




            </textarea>

            <button onClick={hindi}>tranlate</button>
        </div>
    )
}
