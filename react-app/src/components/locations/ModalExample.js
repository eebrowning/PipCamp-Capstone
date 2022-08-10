import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';

function DeleteConfirmModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <p> at least you have a popup?</p>
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;


// <div id='user-owned-buttons'>
// <button id='edit-location' onClick={handleEdit}>Edit</button>
// <>
//     <button onClick={() => setShowModal(true)}>Delete</button>
//     {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//             <p> Are you sure you want to delete {location.name}?</p>
//             <button id='delete-location' onClick={handleDelete}>Delete</button>
//             {/* <button id='close-modal' onClick={setShowModal(false)}>Cancel</button> */}

//         </Modal>
//     )}
// </>
// </div>
