import './AddItemForm.css'
import {useState} from "react";

const AddItemForm = ({onSubmitAddForm}) => {

    const itemDescription = 'Type here to name new task...';

    const [taskTitle, setTaskTitle] = useState('');

    const handleInput = (e) => {
      setTaskTitle(e.target.value.toUpperCase())
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
      onSubmitAddForm && onSubmitAddForm(taskTitle);
      setTaskTitle('');
    }

    return (
        <form
            onSubmit={handleSubmitForm}
            className={"add-item-form d-flex"}
        >
            <input
                className="form-control add-item-input"
                placeholder={itemDescription}
                value={taskTitle}
                onChange={handleInput}
            />
            <button
                className={"btn btn-outline-secondary"}
            >
                Add
            </button>
        </form>
    );
}

export default AddItemForm;