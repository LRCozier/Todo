import React from 'react';
import { useState } from 'react';
import TodoForm from "../Todo form/TodoForm";
import './Todo.css';

function Todo() {
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItem = (text) => {
        const newTodoItem = { id: todoItems.length + 1, text };
        setTodoItems([...todoItems, newTodoItem]);
    };


    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodoItem={addTodoItem} />
            <ul>
                {todoItems.map((todoItems) => (
                    <li key={todoItems.id}>{todoItems.text}</li>
                )

                )}
            </ul>

        </div>
    );
}

export default Todo;