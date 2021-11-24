import './SearchPanel.css'

const SearchPanel = ({onChange, value}) => {
    const searchText = 'Type here to search...';
    return <input
                className="form-control search-input"
                placeholder={searchText}
                value={value}
                onChange={(e) => onChange(e)}
    />;
}

export default SearchPanel;