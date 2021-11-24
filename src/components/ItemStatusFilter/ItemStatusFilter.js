const ItemStatusFilter = ({filter, onChange}) => {

    const filterButtons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    const buttons = filterButtons.map(({name, label}) => {

        const isActive = name === filter;

        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

        return (
            <button key={name}
                    type={"button"}
                    className={classNames}
                    onClick={() => onChange(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div
            className="btn-group"
        >
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;