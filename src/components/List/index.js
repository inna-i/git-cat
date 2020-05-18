import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './style.css';

function List(props) {
    const [filteredItems, setFilteredItems] = useState(null);
    const [filterText, setFilterText] = useState('');

      
    const handleFilter = value => {
        setFilterText(value);
        const filteredList = props.items.filter((item) => {
            const repoName = item.name.toLowerCase() + item.description.toLowerCase();

            return repoName.indexOf(filterText.toLowerCase()) !== -1;
        });

        setFilteredItems(filteredList);
      }

    const items = filteredItems || props.items;

    return (
        <div className="list">
            <div className="list-header">
                <div className="list-title">
                    <h3>{props.title}</h3>
                    <p>{props.subTitle}</p>
                </div>
                <div className="list-filter">
                    <input
                        className="filter-input"
                        placeholder="Filter"
                        value={filterText}
                        onChange={e => handleFilter(e.target.value)}
                    />
                </div>
            </div>
            <div className="list-items"> 
                {
                    props.isLoading
                        ? <div className="loader"><FontAwesomeIcon icon={faSpinner} size="lg" /></div>
                        : items.map(item => (
                            <div className="list-item" key={item.id}>
                                <span>{item.login}</span>
                                <span>{item.name}</span>
                                <span>{item.description}</span>
                            </div>
                        ))
                }
                
            </div> 
        </div>
    )
}

export default List;
