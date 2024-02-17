import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function updateTodoItem({ todoItems, onDelete, onComplete }) {

    return (
        <div className="updateTodoItem">
            <FontAwesomeIcon icon={faTrash} onClick ={() => onDelete(todoItems.id)} />
            <FontAwesomeIcon icon={faCheck} onClick ={() => onComplete(todoItems.id)} />
        </div>
    )

}


export default updateTodoItem;

