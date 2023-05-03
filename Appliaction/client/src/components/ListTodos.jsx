import React, {Fragment, useEffect, useState} from 'react'
import EditTodo from './EditTodo';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })

            setTodos(todos.filter(todo => todo.todo_id !== id));
        
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async() => {
        try {
                const response = await fetch("http://localhost:5000/todos");
                const jsonData = await response.json();

                setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);
    
    return (
        <Fragment>
            <div className='w-[85%] mx-auto mt-16'>
                <table className='w-full'>
                    <thead className='text-xl border-t-2 border-b-2 border-gray-300'>
                        <tr>
                            <th className='py-3'>Description</th>
                            <th className='py-3'>Edit</th>
                            <th className='py-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {todos.map(todo =>(
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><EditTodo todo={todo}/></td>
                                <td><button 
                                   className='text-white bg-red-500 py-2 px-4 rounded-lg font-semibold border-2 border-gray-500 duration-200 hover:bg-red-700'
                                   onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete
                                   </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default ListTodos