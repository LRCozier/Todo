import { useState } from 'react';

const TodoForm = ({addTodoItem}) => {
    const[inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTodoItem(inputValue);
        setInputValue('');
    };

return (
    <form onClick={handleSubmit} className='todoForm'>
        <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>

    </form>
)
};

export default TodoForm;
