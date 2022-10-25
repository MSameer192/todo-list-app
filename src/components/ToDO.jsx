import React, { useState } from 'react';

export default function ToDO() {


  const [toDoList, setToDoList] = useState('');
  const [list, setList] = useState([]);

  const OnChange = (e) => {
    setToDoList(e.target.value);
  };

  const myFuncText = () => {
    let newList = [...list, toDoList];
    setList(newList);
    setToDoList("");
    console.log(newList);
  };


  return (
    <div className='container text-center mt-5 pt-5' >
      <h1>Todo list</h1>

      <div className="row my-5 mx-auto" style={{ width: '400px' }}>
        <input type="text" value={toDoList} onChange={OnChange} className='col-lg-6' placeholder='Enter Your Task' style={{ width: '290px' }} />
        <button type="button" className="btn btn-primary col-lg-6 ms-2" style={{ width: '100px' }}
          onClick={myFuncText}>ADD
        </button>


        <div className="text-light">



          {list.length > 0 ? (
            <ul  className='text-dark mt-5'>
              {list.map((item) => {
                return <li><strong>{item}</strong></li>;
              })}
            </ul>
          )
            : (
              <img src="./img.svg" alt="" className='mt-5 img-fluid' />
            )
          }
        </div>

      </div>
    </div>
  );
}
