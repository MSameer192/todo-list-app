import React from 'react';

export default function Modal(props) {
  return (
    <>
    

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                    <h4>Do you really want to delete all tasks?</h4> 
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={props.delete}>Yes</button>
                </div>
              </div>
            </div>
          </div>
  </>        
  );
}
