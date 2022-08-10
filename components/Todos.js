import React, { useState } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

function Todos({ id, text, completed, todos, setTodos }) {

    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(text);

    const handleDelete = e => {
        e.preventDefault();
        const allTodos = [...todos];
        const removeTodos = allTodos.filter(el => el.id !== id);
        setTodos(removeTodos)
    }

    const handleEdit = e => {
        e.preventDefault();
        const allTodos = [...todos];
        const index = allTodos.findIndex(el => el.id === id);
        allTodos[index] = {
            ...allTodos[index],
            text: editValue,
        }
        setTodos(allTodos);
        setEditValue('')
        setEditMode(false)

    }

    const handleChecked = e => {
        // e.preventDefault();
        const allTodos = [...todos];
        const index = allTodos.findIndex(el => el.id === id);
        allTodos[index] = {
            ...allTodos[index],
            completed: !allTodos[index].completed,
        }
        setTodos(allTodos)
    }

    return (
        <div className='flex w-[100%] text-[0.8em] justify-between px-4 items-center'>
            <div className='flex items-center space-x-2 pl-7 py-2 w-[100%]'>
                <input type='checkbox'
                    checked={completed}
                    onChange={handleChecked}
                />
                {
                    editMode ? (
                        <form className='w-[90%]' onSubmit={handleEdit}>
                            <input
                                type="text"
                                value={editValue}
                                onChange={e => setEditValue(e.target.value)}
                                className="bg-gray-800 outline-none px-2 w-[100%] text-xl"
                            />
                        </form>
                    ) : (
                        <p className='text-xl'>{text}</p>
                    )
                }
            </div>
            <div className='flex'>
                <PencilAltIcon className='hover:cursor-pointer hover:opacity-80 transition-all h-5 w-5 mr-5'
                    onClick={e => setEditMode(!editMode)}
                />
                <TrashIcon className='hover:cursor-pointer hover:opacity-80 transition-all h-5 w-5'
                    onClick={handleDelete}
                />
            </div>
        </div>
    )
}

export default Todos