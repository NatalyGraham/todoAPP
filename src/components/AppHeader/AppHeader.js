import './AppHeader.css';

const AppHeader = ({list}) => {

    const getDoneQuantity = () => list.filter((element) => element.done).length;

    const getTodoQuantity = () => list.length - getDoneQuantity();

    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{getTodoQuantity()} more to do, {getDoneQuantity()} done</h2>
        </div>
    );
};

export default AppHeader;