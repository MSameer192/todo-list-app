import React, { useState, /* useEffect */ } from 'react';
import Modal from './Modal';
import Modal3 from './Modal3';
import axios from "axios";

// import Modal3 from './Modal3';
// import Modal2 from './Modal2';

export default function ToDOMaster() {

  const [toDoList, setToDoList] = useState('');
  const [list, setList] = useState([]);
  const [editCheck, setEditCheck] = useState(false);
  const [editValue, setEditValue] = useState("");

  const addFunc = () => {

    
    const apiURL = 'https://todo-backend-msameer192.vercel.app/api/todo'

      const headers = {
          'Content-Type': 'application/json',
      };


    axios.post(apiURL, list, {headers})
    .then((response) => {
      console.log(response)
    })    
    .catch(function (error) {
      console.log(error);
    });



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

  }
    

  function editFunc(index) {
    setToDoList(list[index])
    setEditValue([index])
    setEditCheck(true)
  }

  const deleteAll = () => {
    setList('')
  }

  const onDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1)
    setList(newList)
  }

  var name = value;

  const OnChange = (e) => {

    setToDoList(name : value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <Modal delete={deleteAll} />


      <div className='container text-center mt-5 pt-5' >
        <p className='heading'>Todo list</p>

        <form className="my-5 form" onSubmit={onSubmit}  >

          <div className="d-flex justify-content-center my-row">

            <input name='task' type="text" value={toDoList} onChange={OnChange} className='py-2 ps-4 my-input mx-2' placeholder='Enter your task' />

            <button type="submit" className="my-button"
              onClick={addFunc}>Add
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
                      <>
                        <div className="" key={item}>

                          <ul key={index} type="none" className='myBox  box d-flex mt-2 justify-content-between px-3 align-items-center'>
                            <li className='input' key={index}>   {item}  </li>

                            <div className="right ms-2">
                              <i type='button' data-bs-toggle="modal" data-bs-target="#exampleModal3" className='fa-solid fa-trash fa-lg my-2	'></i>
                              <i type='button' className='fa-regular fa-pen-to-square fa-lg my-2	ms-1' onClick={() => { editFunc(index) }}></i>
                            </div>
                          </ul>

                          <Modal3 mydelete={() => { deleteList(index) }} />

                          {/* <button type='button' data-bs-toggle='modal' data-bs-target='#exampleModal2' className='btn btn-primary' style={{ width: '100px' }} onClick={() => { editFunc(index) } }>EDIT</button> */}

                        </div>
                      </>
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
              <button type='button' className='delete-button mt-5' data-bs-toggle="modal" data-bs-target="#exampleModal"  >Delete All</button>
            </div>
          ) : (null)}

        </form>
      </div>
    </>
  );
}

