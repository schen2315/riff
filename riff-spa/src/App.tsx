import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import Audio from "./components/Audio";
import requestRiff from "./services/riffs";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [riff, setRiff] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  async function generateRiff(text: string) {
    try {
      const param = `text=${text}`;
      const { data, error } = await requestRiff(param);
      if (error) {
        setError("We could not generate a riff for you. Please try again.")
        return null;
      }
      return data
    } catch (err: any) {
      console.log(err.message);
    }
  }

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (ref && ref.current) {
      setIsGenerating(true);
      const name = await generateRiff(ref.current.value);
      console.log(name);
      setIsGenerating(false);
      setRiff(name);
    }
  }
  return (
    <>
      <h1>You are now using riff</h1>
      <form
        onSubmit={Submit}
      >
        <label>
          Input text to start generating <i>riffs</i>
        </label>
        <div className="form-group">
          <input className="form-control" ref={ref}></input>
        </div>
      </form>
      {isGenerating && <p>Generating...</p>}
      {riff && <Audio src={riff}/>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
