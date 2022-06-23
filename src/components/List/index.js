import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

import './style.css';

function List(props) {
    const [filteredItems, setFilteredItems] = useState(null);
    const [filterText, setFilterText] = useState('');

      
    const handleFilter = value => {
        setFilterText(value);
        const filteredList = props.items.filter((item) => {
            const listItems = item.name.toLowerCase() + item.description.toLowerCase();

            return listItems.indexOf(filterText.toLowerCase()) !== -1;
        });

        setFilteredItems(filteredList);
      }

    const items = filteredItems || props.items;

    return (
        <div className="list">
            <div className="list-header">
                <div className="list-filter-bar">
                    <div className="list-title">
                        <h3>{props.title}</h3>
                        <p>{props.subTitle}</p>
                    </div>
                    <div className="list-filter">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            className="filter-input"
                            placeholder="Filter"
                            value={filterText}
                            onChange={e => handleFilter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="list-columns">
                    {props.columns.map((col, index) => <span key={`col-name-${index}`}>{col.name}</span>)}
                </div>
            </div>
            <div className="list-items custom-scrollbar"> 
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
