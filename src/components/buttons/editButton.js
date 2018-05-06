import React from 'react';

const EditButton = (props) => (
    <div
        className={`editButton ${props.className}`}
        onClick={props.onClick}
    >
        <img
            src='/images/edit.png'
            className='editButton-img'
        />
    </div>
);

export default EditButton;
