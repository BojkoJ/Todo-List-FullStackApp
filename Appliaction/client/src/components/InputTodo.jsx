import React, { Fragment, useState } from 'react'

const InputTodo = () => {

  const [description, setDestription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
        <h1 className='text-center mt-5 text-4xl font-bold block'>PERN Stack: Todo List</h1>
        <form onSubmit={onSubmitForm}>
          <div className="w-[75%] text-center mx-auto mt-5">
            <input type="text" className='border-2 border-black  w-[400px] mx-auto h-8 px-2 py-5' value={description} onChange={e => setDestription(e.target.value)}/>
            <button className='inline-block border-2 border-black rounded-xl py-2 bg-gray-300 duration-200 hover:bg-gray-500 w-24 ml-5'>Add</button>
          </div>
        </form>
    </Fragment>
  )
}

export default InputTodo