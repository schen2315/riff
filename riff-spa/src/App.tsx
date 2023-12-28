import "./App.css";
import React, { useRef, useState } from "react";
import requestRiff from "./services/riffs";
import { AxiosError } from "axios";

async function generateRiff(text: string) {
  try {
    const param = `riff=${text}`
    const resp = await requestRiff(param);
    console.log(resp.data);
  } catch (err: any) {
    console.log(err.message);
  }
}

function App() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>You are now using riff</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (ref && ref.current) {
            await generateRiff(ref.current.value);
          }
        }}
      >
        <label>
          Input text to start generating <i>riffs</i>
        </label>
        <div className="form-group">
          <input
            className="form-control"
            ref={ref}
          ></input>
        </div>
      </form>
    </>
  );
}

export default App;
