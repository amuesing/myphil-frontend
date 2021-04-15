import React, { useState, useEffect } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function TicketModal({ticket}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleModal}> 
            View Tickets
            </button>
            <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="View Tickets">
                <div>
                    {ticket}
                </div>
                <button onClick={toggleModal}>
                    Close
                </button>

            </Modal>
        </div>
    )
}

export default TicketModal