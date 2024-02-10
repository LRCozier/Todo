import React, {useState} from react;
import TodoForm from "../Todo form/TodoForm";

const Todo = () => {
    const[todoItems, setTodoItems] = useState([]);

    const addTodo = (text) => {
        const newTodoItem = {id: todoItems.length +1, text};
        setTodoItems([...todoItems, newTodoItem]);
    };

    return (
        <div>
            <h1>To do List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todoItems.map((todoItems) => (
                    <li>{todoItems.text}</li>
                )
                    
                )}
            </ul>

        </div>
    )
}

export default Todo;