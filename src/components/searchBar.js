import { useState } from "react";
import './SearchBar.css';
function SearchBar({onSubmit}){
    const [state,setState] = useState('');
    const handleChange = (event) => {
        setState(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(state);
    }
    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={state} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchBar;