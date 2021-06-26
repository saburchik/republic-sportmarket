import './Categories.css';
import React from 'react';

const Categories = ({ filterItems }) => {
    return (
        <div className="sidebar__wrapper">
            <button className="titled" onClick={() => filterItems("Tech")}>
                Tech
            </button>
        </div>
    );
};

export default Categories;