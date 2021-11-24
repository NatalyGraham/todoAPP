import TodoListItem from "../TodoListItem";

import './TodoList.css'

const TodoList = ({
                      list,
                      onItemDeleted,
                      onToggleImportant,
                      onToggleDone}) => {


    const elements = list.map((item) => {
        const {id, ...rest} = item;
        return (
            <li className='list-group-item'
                key={id}>
                <TodoListItem
                    {...rest}
                    onDelete={() => onItemDeleted(id)}
                    onToggleDone={() => onToggleDone(list, id)}
                    onToggleImportant={() => onToggleImportant(list, id)}
                />
            </li>
        )
    });

    return (
        <ul className={"list-group todo-list"}>
            {elements}
        </ul>
    );
};

export default TodoList;