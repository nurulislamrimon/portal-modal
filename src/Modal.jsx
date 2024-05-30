const Modal = (setShow) => {
  return (
    <div className="modal">
      Hello
      <button onClick={() => setShow(false)}>Close</button>
    </div>
  );
};

export default Modal;
