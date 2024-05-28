
import React from 'react';
import Draggable from 'react-draggable';
import '..pages/admin/css/Modal.css'

function DraggableModal({ isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <Draggable handle=".modal-header">
            <div className="modal">
                <div className="modal-header">
                    <h2>Modal Title</h2>
                    <button onClick={toggleModal} className="close-button">
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <p>This is a draggable modal. You can move it around!</p>
                </div>
                <div className="modal-footer">
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        </Draggable>
    );
}

export default DraggableModal;
