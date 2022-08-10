import React, { useState } from 'react'
import uniqid from "uniqid";
import Todos from './Todos';

function TodoWindow() {

    const [todos, setTodos] = useState([
        {
            id: uniqid(),
            text: "subscribe to our channel",
            completed: false
        },
        {
            id: uniqid(),
            text: "Like my  Youtube channel",
            completed: true
        },
    ])

    const [newTodos, setNewTodos] = useState('');

    const addTodo = e => {
        e.preventDefault();
        const allTodos = [...todos];
        allTodos.push({
            id: uniqid(),
            text: newTodos,
            completed: false
        })
        setTodos(allTodos);
        setNewTodos('');
    }
    return (
        <div className='w-[80%] h-[60vh] bg-gray-700 flex flex-col text-white p-5 items-center space-y-4'>
            <form onSubmit={addTodo} className='w-[80%] space-x-2 flex justify-center'>
                <input className='bg-gray-800 px-2 rounded-lg h-10 w-[70%]'
                    value={newTodos}
                    onChange={e => setNewTodos(e.target.value)}
                />
                <button className='bg-gray-800 px-2 rounded-lg w-[30%] uppercase active:bg-gray-600'>Add</button>
            </form>
            <div className='w-[80%] min-h-[45vh] border-[1px] flex flex-col'>
                {
                    todos.map(({ id, text, completed }) => {
                        return (
                            <Todos
                                key={id}
                                id={id}
                                text={text}
                                completed={completed}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default TodoWindow