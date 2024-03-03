import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoForm from "../Todo form/TodoForm";
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

    //function to mark a todo item as complete, using the checkbox
    const completeTask = (id) => {
        setTodoItems(todoItem.map(todoItem => {
            if (todoItem.id === id) {
                return { ...todoItem, completed: !todoItem.completed };
            }
            return todoItem;
        }));
    };

    //function to delete a task from the list (triggered by the FaTrash icon)
    const deleteTask = (id) => {
        setTodoItems(todoItem.filter(todoItem => todoItem.id !==id));
    }

    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodoItem={addTodoItem} />
            {todoItem.length === 0 && "No Items"}
                {todoItem.map((todoItem) => (
                    <ul>
                        <div key={todoItem.id} className='todolist'>
                            <li>
                                <input type="checkbox" onClick={() => completeTask(todoItem.id)}></input>
                                <span style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>{todoItem.text}</span><br></br>
                                <button onClick={() => deleteTask(todoItem.id)} className='btn-danger'>Delete</button>
                            </li>
                        </div>
                    </ul>
                )

                )}

        </div>
    );
    
}

export default Todo;