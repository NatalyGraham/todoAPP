// import {useState} from "react";
import cn from "classnames";
import './TodoListItem.css';


const TodoListItem = ({
                          item,
                          important = false,
                          done,
                          onDelete,
                          onToggleImportant,
                          onToggleDone
                      }) => {


    return (
        <span className={cn('todo-list-item', {'important': important}, {'done': done})}>
            <span
                className={'todo-list-item-label'}
                onClick={onToggleDone}
            >
                {item}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}
            >
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default TodoListItem;