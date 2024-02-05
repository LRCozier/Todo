import React, {useState} from react;

const TodoForm = ({addTodo}) => {
    const[inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTodo(inputValue);
        setInputValue('');
    }
};

return (
    <form onclick={handleSubmit}>
        <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">+</button>

    </form>
)

export default TodoForm;
