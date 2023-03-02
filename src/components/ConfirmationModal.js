import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteAllCompletedTasks } from '../redux/tasksSlice';

export function ConfirmationModal({ setIsOpen }) {

    const dispatch = useDispatch();

    const handleConfirm = (conf = true) => {
        if (conf === true)
            dispatch(deleteAllCompletedTasks())
        setIsOpen(false);
    }

    return (
        <>
            <div className="dark-bg" /* onClick={() => setIsOpen(false)} */ ></div>
            <div className="centered">
                <div className="modal">
                    <div className="modal-header">
                        <h5 className="heading">Delete all tasks</h5>
                    </div>
                    <div className="close-btn" onClick={() => setIsOpen(false)}>
                        X
                    </div>
                    <div className="modal-content">
                        <p style={{ fontSize: "1.6rem" }}>Are you sure?</p>
                    </div>
                    <div className="modal-actions">
                        <div className="actions-container">
                            <button className="primary-btn" onClick={() => handleConfirm()}>
                                OK
                            </button>
                            <button className="primary-btn" onClick={() => handleConfirm(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
