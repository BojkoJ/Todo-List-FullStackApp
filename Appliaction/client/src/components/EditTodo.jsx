import React, {Fragment, useState} from "react";

const EditTodo = ({ todo }) => {


    const [showModal, setShowModal] = React.useState(false);

    const [description, setDestription] = useState(todo.description);

    //edit description function

    const updateDescription = async e =>{
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button
                className="bg-green-500 text-white active:bg-green-600 font-semibold px-6 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-gray-400 hover:bg-green-700"
                type="button"
                onClick={() => setShowModal(true)}>
                Edit
            </button>
            {showModal ? (
                <Fragment>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Todo
                                    </h3>

                                </div>
                                <div className="relative p-6 flex-auto">
                                    <input type="text" className='border-2 border-black  w-[400px] mx-auto h-8 px-2 py-5' value={description} onChange={e => setDestription(e.target.value)}/>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {setShowModal(false); setDestription(todo.description);}}>
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={e => updateDescription(e)}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </Fragment>
            ) : null}
        </Fragment>
    );
}

export default EditTodo;