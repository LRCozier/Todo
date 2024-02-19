import React from 'react';
import { useState } from 'react';
import TodoForm from "../Todo form/TodoForm";
import { FaTrash, FaCheck } from 'react-icons/fa';
import './Todo.css';

//function to add to do items to a list
function Todo()  {
    //state to store todo Items
    const [todoItem, setTodoItems] = useState([]);

    //function to add a new todo item to the list using the todo form
    const addTodoItem = (text) => {
        const newTodoItem = { id: todoItem.length + 1, text };
        setTodoItems([...todoItem, newTodoItem]);
    };

    //function to delete a task from the list (triggered by the FaTrash icon)
    const deleteTask = (id) => {
        setTodoItems(todoItem.filter(todo => todo.id !==id));
    }

    //function to mark a task as complete on the list (triggered by the FaCheck icon)
    const completeTask = (id) => {
        setTodoItems(todoItem.map( todo => {
            if(todo === id) {
                return {...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodoItem={addTodoItem} />
                {todoItem.map((todoItem) => (
                    <ul>
                        <div className={`todoItem ${todoItem.completed ? 'completed' : 'active'}`} key={todoItem.id}>
                            <li>
                                <span style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>{todoItem.text}</span>
                                <span onClick={() => deleteTask(todoItem.id)}><FaTrash /></span>
                                <span {...() => completeTask(todoItem.id)}><FaCheck /></span>
                            </li>
                        </div>
                    </ul>
                )

                )}

        </div>
    );
    
}

export default Todo;