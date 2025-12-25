function SearchInput({value, onChange}) {
    return (

        <div className="search-wrapper"> <input
        className="search-input"
            type="text"
      placeholder="Search Pc by student Id.."
      value={value}
      onChange={onChange}
        /><span className="search-icon">🔍</span>
        </div>
       
    ); 
}

export default SearchInput;