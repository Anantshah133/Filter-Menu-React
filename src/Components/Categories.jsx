import React from 'react'

export default function Categories({filterItems}) {
    return (
        <div className="btn-container">
            <button className='filter-btn' onClick={()=> filterItems('all')}>
                <span>All</span>
            </button>
            <button className='filter-btn' onClick={()=> filterItems('breakfast')}>
                <span>Breakfast</span>
            </button>
        </div>
    )
}