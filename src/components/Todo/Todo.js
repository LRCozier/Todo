import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoForm from "../Todo form/TodoForm";
import { FaTrash, FaCheck } from 'react-icons/fa';
import './Todo.css';

//function to add to do items to a list
function Todo()  {
    //state to store todo Items
    const [todoItem, setTodoItems] = useState(()=> {
        const local = localStorage.getItem("TODO ITEM")
        if (local == null) {
            return [];
        } else {
            return JSON.parse(local)
        }
    });

    useEffect(() => {
        localStorage.setItem("TODO ITEM", JSON.stringify(todoItem))
    }, [todoItem])

    //function to add a new todo item to the list using the todo form
    const addTodoItem = (text) => {
        const newTodoItem = { id: todoItem.length + 1, text };
        setTodoItems([...todoItem, newTodoItem]);
    };

    //function to delete a task from the list (triggered by the FaTrash icon)
    const deleteTask = (id) => {
        setTodoItems(todoItem.filter(todo => todo.id !==id));
    }

    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodoItem={addTodoItem} />
            {todoItem.length === 0 && "No Items"}
                {todoItem.map((todoItem) => (
                    <ul>
                        <div key={todoItem.id}>
                            <li>
                                <span style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>{todoItem.text}</span>
                                <button onClick={() => deleteTask(todoItem.id)}><FaTrash /></button>
                            </li>
                        </div>
                    </ul>
                )

                )}

        </div>
    );
    
}

export default Todo;