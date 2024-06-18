import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root');

const AddModal = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <>
            <button className='btn btn-success' onClick={openModal}>Tambah</button>
            <Modal
                closeModal={closeModal}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '50%',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',

                    },
                }}
            >
                <h2 className='d-flex justify-content-between'>Tambah Carousel <span><button onClick={closeModal} className='btn btn-danger'>X</button></span></h2>
                {children}
            </Modal>
        </>
    )
}

export default AddModal
