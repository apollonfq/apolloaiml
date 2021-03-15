import React, { useState } from 'react';
import '../App.css';
import Amplify, {  Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import mic from 'microphone-stream';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());



function TextTranslation() {
  const [response, setResponse] = useState("Input some text and click enter to test")
  const [textToTranslate, setTextToTranslate] = useState("write to translate");
  const [sourceLanguage, setSourceLanguage] = useState();
  const [targetTextLanguage, setTargetTextLanguage] = useState();

  function translate() {
    Predictions.convert({
      translateText: {
        source: {
          text: textToTranslate,
          language : sourceLanguage // defaults configured on aws-exports.js
          // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
        },
         targetLanguage: targetTextLanguage
      }
    }).then(result => setResponse(JSON.stringify(result, null, 2)))
      .catch(err => setResponse(JSON.stringify(err, null, 2)))
  }

  function setText(event) {
    setTextToTranslate(event.target.value);
  }

  function setLanguage(event){
    setSourceLanguage(event.target.value)
  }

  function setTargetLanguage(event){
    setTargetTextLanguage(event.target.value)
  }

  return (
    <div className="Text">
      <div>
        <h3>Text Translation</h3>
	<div className="row">  
	  <div className="col-md-4">
	      <h4>Step 1: Enter Text</h4>
	      <form>
	        <div className="form-group">  
                   <input value={textToTranslate} onChange={setText}></input>
	        </div>
	      </form>
	  </div>
	  <div className="col-md-1">
	      <h4>Step 2: Choose Languages</h4>
	      <form>
	        <div className="input-group mb-3">
	           <div class="input-group-prepend">
	              <div class="input-group-text">Input</div>
	           </div>
	           <select id="selectSourceLanguage" className="custom-select" value={sourceLanguage} onChange={setLanguage}>
	                   <option value="auto">Autodetect (Powered by Amazon Comprehend)</option>
                     <option value="af">Afrikaans</option>
                     <option value="sq">Albanian</option>
                     <option value="am">Amharic</option>
                     <option value="ar">Arabic</option>
                     <option value="az">Azerbaijani</option>
                     <option value="bn">Bengali</option>
                     <option value="bs">Bosnian</option>
                     <option value="bg">Bulgarian</option>
	                   <option value="zh">Chinese (Simplified)</option>
                     <option value="zh-TW">Chinese (Traditional)</option>
                     <option value="hr">Croatian</option>
                     <option value="cs">Czech</option>
                     <option value="da">Danish</option>
                     <option value="fa-AF">Dari</option>
                     <option value="nl">Dutch</option>
                     <option selected value="en">English</option>
                     <option value="et">Estonian</option>
                     <option value="fi">Finnish</option>
                     <option value="fr">French</option>
                     <option value="fr-CA">French (Canadian)</option>
                     <option value="ka">Georgian</option>
                     <option value="de">German</option>
                     <option value="el">Greek</option>
                     <option value="ha">Hausa</option>
                     <option value="he">Hebrew</option>
                     <option value="hi">Hindi</option>
                     <option value="hu">Hungarian</option>
                     <option value="id">Indonesian</option>
                     <option value="it">Italian</option>
                     <option value="ja">Japanese</option>
                     <option value="ko">Korean</option>
                     <option value="lv">Latvian</option>
                     <option value="ms">Malay</option>
                     <option value="no">Norwegian</option>
                     <option value="fa">Persian</option>
                     <option value="ps">Pashto</option>
                     <option value="pl">Polish</option>
                     <option value="pt">Portugese</option>
                     <option value="ro">Romanian</option>
                     <option value="ru">Russian</option>
                     <option value="sr">Serbian</option>
                     <option value="sk">Slovak</option>
                     <option value="sl">Slovenian</option>
                     <option value="so">Somali</option>
                     <option value="es">Spanish</option>
                     <option value="sw">Swahili</option>
                     <option value="sv">Swedish</option>
                     <option value="tl">Tagalog</option>
                     <option value="ta">Tamil</option>
                     <option value="th">Thai</option>
                     <option value="tr">Turkish</option>
                     <option value="uk">Ukranian</option>
                     <option value="ur">Urdu</option>
                     <option value="vi">Vietnamese</option>	  
	           </select>
	        </div >
	      </form>
              <form>
                <div className="input-group mb-3">
                   <div class="input-group-prepend">
                      <div class="input-group-text">Output</div>
                   </div>
                   <select id="selectTargetLanguage" className="custom-select" value={targetTextLanguage} onChange={setTargetLanguage}>
                     <option value="af">Afrikaans</option>
                     <option value="sq">Albanian</option>
                     <option value="am">Amharic</option>
                     <option value="ar">Arabic</option>
                     <option value="az">Azerbaijani</option>
                     <option value="bn">Bengali</option>
                     <option value="bs">Bosnian</option>
                     <option value="bg">Bulgarian</option>
                     <option selected value="zh">Chinese (Simplified)</option>
                     <option value="zh-TW">Chinese (Traditional)</option>
                     <option value="hr">Croatian</option>
                     <option value="cs">Czech</option>
                     <option value="da">Danish</option>
                     <option value="fa-AF">Dari</option>
                     <option value="nl">Dutch</option>
                     <option value="en">English</option>
                     <option value="et">Estonian</option>
                     <option value="fi">Finnish</option>
                     <option value="fr">French</option>
                     <option value="fr-CA">French (Canadian)</option>
                     <option value="ka">Georgian</option>
                     <option value="de">German</option>
                     <option value="el">Greek</option>
                     <option value="ha">Hausa</option>
                     <option value="he">Hebrew</option>
                     <option value="hi">Hindi</option>
                     <option value="hu">Hungarian</option>
                     <option value="id">Indonesian</option>
                     <option value="it">Italian</option>
                     <option value="ja">Japanese</option>
                     <option value="ko">Korean</option>
                     <option value="lv">Latvian</option>
                     <option value="ms">Malay</option>
                     <option value="no">Norwegian</option>
                     <option value="fa">Persian</option>
                     <option value="ps">Pashto</option>
                     <option value="pl">Polish</option>
                     <option value="pt">Portugese</option>
                     <option value="ro">Romanian</option>
                     <option value="ru">Russian</option>
                     <option value="sr">Serbian</option>
                     <option value="sk">Slovak</option>
                     <option value="sl">Slovenian</option>
                     <option value="so">Somali</option>
                     <option value="es">Spanish</option>
                     <option value="sw">Swahili</option>
                     <option value="sv">Swedish</option>
                     <option value="tl">Tagalog</option>
                     <option value="ta">Tamil</option>
                     <option value="th">Thai</option>
                     <option value="tr">Turkish</option>
                     <option value="uk">Ukranian</option>
                     <option value="ur">Urdu</option>
                     <option value="vi">Vietnamese</option>
                   </select>
                </div >
              </form>	  
              <button onClick={translate}>Translate</button>
	  </div>
	  <div className="col-md-4">
	      <h4>Result:</h4>
	      <div class ="tabs">
	         <div class="tab">
                    <p>{response}</p>
	         </div>
	      </div>
	  </div>
	</div>  
      </div>
    </div>
  );
}


function SpeechToText(props) {
  const [response, setResponse] = useState("Press 'start recording' to begin your transcription. Press STOP recording once you finish speaking.")

  function AudioRecorder(props) {
    const [recording, setRecording] = useState(false);
    const [micStream, setMicStream] = useState();
    const [audioBuffer] = useState(
      (function() {
        let buffer = [];
        function add(raw) {
          buffer = buffer.concat(...raw);
          return buffer;
        }
        function newBuffer() {
          console.log("resetting buffer");
          buffer = [];
        }

        return {
          reset: function() {
            newBuffer();
          },
          addData: function(raw) {
            return add(raw);
          },
          getData: function() {
            return buffer;
          }
        };
      })()
    );

    async function startRecording() {
      console.log('start recording');
      audioBuffer.reset();

      window.navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
        const startMic = new mic();

        startMic.setStream(stream);
        startMic.on('data', (chunk) => {
          var raw = mic.toRaw(chunk);
          if (raw == null) {
            return;
          }
          audioBuffer.addData(raw);

        });

        setRecording(true);
        setMicStream(startMic);
      });
    }

    async function stopRecording() {
      console.log('stop recording');
      const { finishRecording } = props;

      micStream.stop();
      setMicStream(null);
      setRecording(false);

      const resultBuffer = audioBuffer.getData();

      if (typeof finishRecording === "function") {
        finishRecording(resultBuffer);
      }

    }

    return (
      <div className="audioRecorder">
        <div>
          {recording && <button onClick={stopRecording}>Stop recording</button>}
          {!recording && <button onClick={startRecording}>Start recording</button>}
        </div>
      </div>
    );
  }

  function convertFromBuffer(bytes) {
    setResponse('Converting text...');

    Predictions.convert({
      transcription: {
        source: {
          bytes
        },
        // language: "en-US", // other options are "en-GB", "fr-FR", "fr-CA", "es-US"
      },
    }).then(({ transcription: { fullText } }) => setResponse(fullText))
      .catch(err => setResponse(JSON.stringify(err, null, 2)))
  }

  return (
    <div className="Text">
      <div>
        <h3>Speech to text</h3>
        <AudioRecorder finishRecording={convertFromBuffer} />
        <p>{response}</p>
      </div>
    </div>
  );
}


function TextToSpeech() {
  const [response, setResponse] = useState("...")
  const [textToGenerateSpeech, setTextToGenerateSpeech] = useState("write to speech");

  function generateTextToSpeech() {
    setResponse('Generating audio...');
    Predictions.convert({
      textToSpeech: {
        source: {
          text: textToGenerateSpeech,
        },
        voiceId: "Amy" // default configured on aws-exports.js 
        // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
      }
    }).then(result => {
      let AudioContext = window.AudioContext || window.webkitAudioContext;
      console.log({ AudioContext });
      const audioCtx = new AudioContext(); 
      const source = audioCtx.createBufferSource();
      audioCtx.decodeAudioData(result.audioStream, (buffer) => {

        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start(0);
      }, (err) => console.log({err}));

      setResponse(`Generation completed, press play`);
    })
      .catch(err => setResponse(err))
  }

  function setText(event) {
    setTextToGenerateSpeech(event.target.value);
  }

  return (
    <div className="Text">
      <div>
        <h3>Text To Speech</h3>
        <input value={textToGenerateSpeech} onChange={setText}></input>
        <button onClick={generateTextToSpeech}>Text to Speech</button>
        <h3>{response}</h3>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      Translate Text
      <TextTranslation />
      <br/>
       Speech To Text
      <SpeechToText />
      <br />	  
      <br />  
      Text to Speech
      <TextToSpeech />
      <br />	  
    </div>
  );
}

export default App;
