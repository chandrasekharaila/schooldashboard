import React, { useState, useContext } from 'react';
import { WidgetContext } from '../WidgetsContext';
import "./Search.css";

export const Search = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const { filterWidget } = useContext(WidgetContext);

    const handleSearch = () => {
        const results = filterWidget(query);
        setSearchResults(results);
        setHasSearched(true);
    };

    const handleClose = () => {
        setQuery("");
        setSearchResults([]);
        setHasSearched(false);
    };

    return (
        <div className='searchWidget p-3'>
            <input
                type="text"
                placeholder='Enter widget data'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="btn btn-primary">
                Search
            </button>
            <button onClick={handleClose} className="btn btn-secondary" style={{ marginLeft: '10px' }}>
                Clear
            </button>

            
            {hasSearched && (
                searchResults
                    .filter(category => category.widgets.length > 0) 
                    .map(category => (
                        <div key={category.id}>
                            <h3>{category.category}</h3>
                            <ul>
                                {category.widgets.map((widget, index) => (
                                    <li key={index}>{widget}</li>
                                ))}
                            </ul>
                        </div>
                    ))
            )}
        </div>
    );
};

export default Search;
