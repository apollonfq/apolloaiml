import React, { useState } from 'react';
import '../App.css';
import Amplify, {  Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

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

function App() {
  return (
    <div className="App">
      Translate Text
      <TextTranslation />
      <br/>
    </div>
  );
}

export default App;
