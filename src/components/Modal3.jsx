import React from 'react';

export default function Modal3(props) {
    return (
        <>

            <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header  text-dark">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Do you really want to delete the task?
                            </h1>
   
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={props.mydelete}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
