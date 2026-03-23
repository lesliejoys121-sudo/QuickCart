import React from 'react';
import { Search } from 'lucide-react';
import '../styles/global.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-bar-container">
            <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default SearchBar;
