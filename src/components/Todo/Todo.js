import React from 'react';
import { useState } from 'react';
import TodoForm from "../Todo form/TodoForm";
import { FaTrash, FaCheck } from 'react-icons/fa';
import './Todo.css';

function Todo() {
    const [todoItem, setTodoItems] = useState([]);

    const addTodoItem = (text) => {
        const newTodoItem = { id: todoItem.length + 1, text };
        setTodoItems([...todoItem, newTodoItem]);
    };


    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodoItem={addTodoItem} />
            <ul>
                {todoItem.map((todoItems) => (
                    <div className='todoItem'>
                    <li key={todoItems.id}>
                        <span>{todoItems.text}</span>
                        <FaTrash onClick={() => onDelete(todoItem.id)} />
                        <FaCheck onClick={() => onComplete(todoItem.id)} />
                    </li>
                    </div>
                )

                )}
            </ul>

        </div>
    );
    
}

export default Todo;