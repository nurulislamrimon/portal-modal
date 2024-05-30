import React from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <section className="half-screen">
      <div>This is Portal Modal App</div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && <Modal setShow={setShow} show={show} />}
    </section>
  );
}

export default App;
