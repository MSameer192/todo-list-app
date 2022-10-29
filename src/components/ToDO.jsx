import React, { useState } from 'react';

export default function ToDO() {

  const [toDoList, setToDoList] = useState('');
  const [list, setList] = useState([]);
  const [editCheck, setEditCheck] = useState(false);
  const [editValue, setEditValue] = useState("");

  // const addFunc = () => {

  //   if(toDoList)
  //     {
  //     let newList = [...list, toDoList];
  //     setList(newList);
  //     setToDoList("");
  //   } else {alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK")}
  // };

  const addFunc = () => {

    if (editCheck) {
      list[editValue] = toDoList
      setList(list)
      setEditCheck(false)
    } else {
      if (toDoList) {
        setList([...list, toDoList])
        } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
      }
      setToDoList("");
  };

  

  function editFunc(index) {    
    setToDoList(list[index])
    setEditValue([index])
    setEditCheck(true)
  }



  const deleteAll = () => {
    let check = window.confirm('You want to delete all list')
    if (check) {
      setList('')
    }
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

                        <button type='button' className='btn btn-primary' style={{ width: '100px' }} onClick={() => { editFunc(index) }}>EDIT</button>
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
            <button type='button' className='btn btn-primary mt-5' style={{ width: '150px' }} onClick={deleteAll}>DELETE ALL LIST</button>
          </div>
        ) : (null)}
      </form>
    </div>
  );
}

