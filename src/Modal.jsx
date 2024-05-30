import PropTypes from "prop-types";

const Modal = ({ setShow }) => {
  return (
    <div className="modal">
      <h1>Hello! This is a Portal Modal</h1>
      <button onClick={() => setShow(false)}>Close</button>
    </div>
  );
};

Modal.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Modal;
