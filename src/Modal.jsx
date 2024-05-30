import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Modal = ({ setShow }) => {
  // This is the Portal Modal App
  return createPortal(
    <div className="modal">
      <h1>Hello! This is a Portal Modal</h1>
      <button onClick={() => setShow(false)}>Close</button>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Modal;
