import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function AskAi() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await axios.get(`http://localhost:2022/ai/prompt?prompt=${prompt}`);
      setResponse(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReadResponse = () => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(response);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  };

  return (
    <div className="ask">
      <h1 className="ask-title">ASK ME</h1>
      <form onSubmit={handleSubmit}>
        <strong>FAQ's</strong>
        <p>How does the platform work?</p>
        <p>How can students contribute to projects?</p>
        <p>What are the benefits for entrepreneurs?</p>
        <p>How do investors decide which projects to support?</p>

        <label>
          <strong>Enter your prompt:</strong>
          <textarea value={prompt} placeholder='How does the platform work?' onChange={handleChange} className="ask-input" />
        </label>
        <button type="submit" className="ask-submit">Submit</button>
      </form>
      <h2 className="ask-response-title">Response:</h2>
      {loading && <p className="ask-loading">Loading...</p>}
      {response && !loading && (
        <div>
          <p className="ask-response">{response}</p>
          <button onClick={handleReadResponse} className="ask-read-button">
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        </div>
      )}
    </div>
  );
}

export default AskAi;
