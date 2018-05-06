import React from 'react';

const RemoveButton = (props) => (
    <div
        className={`removeButton ${props.className}`}
        onClick={props.onClick}
    >
        <img
            src='/images/trashbin.png'
            className='removeButton-img'
        />
    </div>
);

export default RemoveButton;