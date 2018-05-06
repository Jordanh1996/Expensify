import React from 'react';
import { Card, CardMedia } from 'material-ui/Card';

const DescriptiveCards = () => (
    <div className='descriptiveCards'>
        <Card
            className='descriptiveCard'
            style={{
                background: 'linear-gradient(120deg, #202020, #252525)'
            }}
        >
            <p className='descriptiveCard-title'>
                Simple
            </p>
            <p className='descriptiveCard-text'>
                Expensify is simple, and straightforward. Here you do not need to
                spend time learning any confusing functions.
                <br />
                The design highlights all the available functions which are simple
                to use and give you everything you need to manage your expenses.
            </p>
            <p className='descriptiveCard-simple'>
                1 + 1 = 2
            </p>
        </Card>
        <Card
            className='descriptiveCard'
            style={{
                background: 'linear-gradient(120deg, #202020, #252525)'
            }}
        >
            <p className='descriptiveCard-title'>
                Technology
            </p>
            <p className='descriptiveCard-text'>
                The code behind expensify uses the latest tools and technologies.
                Which allows the best performance for the user.
                <br />
                In expensify, all of your bills will be saved in a safe database that
                no one can access. All of your expenses are private and safe with us.
            </p>
            <img
                src='/images/react.png'
                className='descriptiveCard-img-react'
            />
        </Card>
        <Card
            className='descriptiveCard'
            style={{
                background: 'linear-gradient(120deg, #202020, #252525)'
            }}
        >
            <p className='descriptiveCard-title'>
                Currencies
            </p>
            <p className='descriptiveCard-text'>
                Expensify offers over 30 different currencies for your expenses calculations.
                <br />
                You can mix different currencies in the same calculation and get the total
                amount of your expenses in the currency you choose.
                <br />
                The currency rates are retrieved from the European central bank and are updated
                daily
            </p>
            <CardMedia>
                <img src="/images/currencies.jpg" />
            </CardMedia>
        </Card>
    </div>
);

export default DescriptiveCards;
