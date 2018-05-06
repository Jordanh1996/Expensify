import React from 'react';
import BillForm from '../components/billForm';

const GetStarted = (props) => (
    <div className='getStarted'>
        <div className='getStarted-description'>
            Get started by creating your first bill
        </div>
        <BillForm
            addBill={props.addBill}
        />
    </div>
);

export default GetStarted;
