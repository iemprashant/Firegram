import React from "react";
import useStorage from "../Hooks/useStorage";
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  return (
    <div className="progress-bar" style={{ width: `${progress}%` }}>
      Progress
    </div>
  );
};

export default ProgressBar;
