import React from "react";
import "./App.css";
import Modal from "./Modal";
import { createPortal } from "react-dom";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <section className="half-screen">
      <div>This is Portal Modal App</div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {
        // This is the Portal Modal App
        show && createPortal(<Modal setShow={setShow} />, document.body)
      }
    </section>
  );
}

export default App;
