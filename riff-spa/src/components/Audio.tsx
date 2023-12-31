import React from "react";
import { endpoint } from "../services/riffs";

interface AudioProps {
  src: string;
  format?: string;
}

const Audio = ({ src, format="wav" }: AudioProps) => {
  const source = endpoint + src;
  return (
    <div>
      <audio controls>
        <source src={source} type={`audio/${format}`} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Audio;
