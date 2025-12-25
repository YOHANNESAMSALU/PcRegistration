import React from "react";
import "./Modal.css"; // We'll keep the CSS separate

function Modal({ show, onClose, children }) {
  if (!show) return null; // Don't render anything if not shown

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
