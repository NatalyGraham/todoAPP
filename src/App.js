import React from "react";
import {useState} from "react";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter";
import TodoList from "./components/TodoList";
import AddItemForm from "./components/AddItemForm";
import todoItem from "./data/TodoItems";

import './App.css'

const App = () => {

    const [todos, setTodos] = useState(todoItem);
    // console.log(todos);
    const [filterType, setFilterType] = useState('all');
    const [term, setTerm] = useState('');

    const search = (items, term) => {

        if (term.length === 0) {
            return items;
        } else {
            return items.filter((item) => {
                return item.item
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
            })
        }

    };

    const filter = (items, filterType) => {
        switch (filterType) {
            case 'all': return items;
            case 'active': return items.filter((item) => !item.done);
            case 'done': return items.filter((item) => item.done);
            default: return items;
        }
    }

    const getIndexByID = (items, id) => {
        return items.findIndex((element) => element.id === id);
    }

    const manageArray = (array, impact, id, item) => {
        const index = getIndexByID(array, id);
        switch (impact) {
            case 'add' : {
                return [
                    ...array,
                    item
                ]
            }
            case 'remove': {

                return [
                    ...array.slice(0, index),
                    ...array.slice(index + 1)
                ];
            }
            case 'updateByID': {
                return [
                    ...array.slice(0, index),
                    item,
                    ...array.slice(index + 1)
                ];
            }
            default:
                break;
        }
    }

    const addItemToArray = (items, elementName) => {

        const indexArray = items.map((item) => {
            return item.id;
        });
        const newID = Math.max.apply(null, indexArray) + 1;
        const newItem = {
            item: elementName,
            id: newID,
            important: false,
            done: false
        }
        return manageArray(items, 'add', indexArray, newItem);
    }

    const removeItemFromArray = (items, id) => manageArray(items, 'remove', id);

    const onToggleImportant = (items, id) => {
        const index = getIndexByID(items, id);
        const oldItem = items[index];
        const newItem = {
            ...oldItem,
            important: !oldItem.important
        }
        setTodos(() => {
            return manageArray(items, 'updateByID', id, newItem);
        });
    };

    const onToggleDone = (items, id) => {
        const index = getIndexByID(items, id);
        const oldItem = items[index];
        const newItem = {
            ...oldItem,
            done: !oldItem.done
        }
        setTodos(() => {
            return manageArray(items, 'updateByID', id, newItem);
        });
    }

    const handleItemDelete = (id) => {
        setTodos(removeItemFromArray(todos, id));
    }

    const handleAddItem = (title) => {
        setTodos(addItemToArray(todos, title));
    }

    const handleFilterChange = (name) => {
        setFilterType(name);
    };

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    }

    const visibleItems = filter(search(todos, term), filterType);

    return (

        <div className={'todo-app'}>
            <AppHeader
                list={todos}
            />
            <div className={"search-panel d-flex"}>
                <SearchPanel
                    onChange={handleInputChange}
                    value={term}
                />
                <ItemStatusFilter
                    filter={filterType}
                    onChange={handleFilterChange}
                />
            </div>

            <TodoList
                list={visibleItems}
                onItemDeleted={handleItemDelete}
                onToggleDone={onToggleDone}
                onToggleImportant={onToggleImportant}
            />
            <AddItemForm
                onSubmitAddForm={handleAddItem}
            />
        </div>
    );
};

export default App;