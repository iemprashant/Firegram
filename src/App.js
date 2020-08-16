import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrids";
import Modal from "./comps/Modal";

function App() {
  const [selectedimg, setSelectedimg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedimg={setSelectedimg} />
      {selectedimg && (
        <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
