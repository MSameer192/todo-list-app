import React, { useState } from 'react';
import Modal from './Modal';
import Modal2 from './Modal2';

export default function ToDO() {

  const [toDoList, setToDoList] = useState('');
  const [list, setList] = useState([]);
  const [editCheck, setEditCheck] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [myModal, setMyModal] = useState("");
  

  const addFunc = () => {
    
      if (editCheck) {
        list[editValue] = toDoList
        setList(list)
        setEditCheck(false)
      } 
      else {
        if (toDoList) {
          setList([...list, toDoList])
        } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
      }
      setToDoList("");
    };

        function editFunc(index) {
      setMyModal(list[index])
      setEditValue([index])
      setEditCheck(true)
    }
  

    //NEW CHECKING
  
    // const addFunc = () => {
    //       if (toDoList) {
    //         setList([...list, toDoList])
    //       } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
        
    //       setToDoList("");
    // };
  
    // const newEditFunc = () => {

    //   if (editCheck) {
    //       list[editValue] = toDoList
    //       setList(list)
    //       setEditCheck(false)
    //     } 
    //     setMyModal("");
    // };


    // function editFunc(index) {
    //   setMyModal(list[index])
    //   setEditValue([index])
    //   setEditCheck(true)
    // }
    



    
    ///OLD  
    
    // const addFunc = () => {
    
    //   if (editCheck) {
    //     list[editValue] = toDoList
    //     setList(list)
    //     setEditCheck(false)
    //   } 
    //   else {
    //     if (toDoList) {
    //       setList([...list, toDoList])
    //     } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
    //   }
    //   setToDoList("");
    // };





/////NEW

// const addFunc = () => {

    //   if (editCheck) {
    //       list[editValue] = toDoList
    //       setList(list)
    //       setEditCheck(false)
    //     } 
    //     else {
    //       if (toDoList) {
    //         setList([...list, toDoList])
    //       } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
    //     }
    //     setToDoList("");
    // };

  // function editFunc(index) {
  //   setToDoList(list[index])
  //   setEditValue([index])
  //   setEditCheck(true)
  // }


  
  const deleteAll = () => {
    setList('')
  }

  const onDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1)
    setList(newList)
  }

  const OnChange = (e) => {
    setToDoList(e.target.value);

  };

  const onSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
    <Modal delete={deleteAll} />
    <Modal2 onChange={OnChange} value={myModal} onSubmit={onSubmit} addFunc={'newEditFunc'} />
    

    <div className='container text-center mt-5 pt-5' >
      <h1 className='text-light'>Todo list</h1>

      <form className="my-5 form" onSubmit={onSubmit}>

        <div className="d-flex my-row">
          {<input type="text" value={toDoList} onChange={OnChange} className='py-2 ps-3 my-input' placeholder='Enter your task' />}
          <button type="submit" className="btn btn-primary my-button ms-2"
            onClick={addFunc}>ADD
          </button>
        </div>

        <div className="text-light">


          {list.length > 0 ? (

            <div className='mt-5'>
              {
                list.map((item, index) => {

                  const deleteList = () => {
                    onDelete(index)
                  };

                  return (
                    <div className="box">

                      <div className='myBox'>
                        <strong key={index}>{item}</strong>
                      </div>
                      <button type='button' className='btn btn-primary me-3' style={{ width: '100px' }} onClick={() => { deleteList(index) }} >DELETE</button>
                      
                      <button type='button' data-bs-toggle='modal' data-bs-target='#exampleModal2' className='btn btn-primary' style={{ width: '100px' }} onClick={() => { editFunc(index) } }>EDIT</button>

                      {/* <button type='button' data-bs-toggle='modal' data-bs-target='#exampleModal2' className='btn btn-primary'  style={{ width: '100px' }} >EDIT 2</button> */}

                    </div>
                  )
                }
                )
              }
            </div>
          )
            : (
              <img src="./img.svg" alt="" className='mt-5 img-fluid' style={{ width: '400px' }} />
            )
          }

        </div>

        {list.length > 0 ? (
          <div>
            <button type='button' className='btn btn-primary mt-5' data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{ width: '150px' }}>DELETE ALL LIST</button>
          </div>
        ) : (null)}
         
      </form>
    </div>
    </>
  );
}

