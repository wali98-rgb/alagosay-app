// DraggableModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import Draggable from 'react-draggable';

Modal.setAppElement('#root'); // ini untuk aksesibilitas

const DraggableModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal} className='btn btn-primary me-3'>Preview</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Draggable Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    },
                    content: {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '120%',
                        top: '-20%',
                        padding: '0',
                        border: 'none',
                        background: 'none',
                        zIndex: '0',

                    },
                }}
            >
                <Draggable>
                    <div style={{
                        width: '800px',
                        padding: '5px',
                        height: '400px',
                        background: 'white',
                        borderRadius: '8px',
                        zIndex: '99',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        cursor: 'move',
                    }}>
                        <button onClick={closeModal}
                            className='btn btn-danger'
                            style={{
                                position: 'absolute',
                                left: '95%'
                            }}>x</button>
                        <iframe src="/" frameborder="0" style={{ width: '100%', height: '100%', overflow: 'hidden' }}></iframe>
                    </div>
                </Draggable>
            </Modal>
        </>
    );
};

export default DraggableModal;
