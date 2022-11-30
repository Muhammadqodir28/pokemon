import React from 'react';

const Pages = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return (
        <div className="pages">
            <button onClick={onLeftClick}><div> Left </div></button>
            <div> {page} of {totalPages} </div>
            <button onClick={onRightClick}><div> Right </div></button>
        </div>
    )
}

export default Pages;