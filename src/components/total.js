import React from 'react';
import numeral from 'numeral';
import getSymbolFromCurrency from 'currency-symbol-map';


const Total = (props) => (
    <div>
        <div
            className={props.getSum(
                props.expenses,
                props.currencies,
                props.currency
            ) > 0 ?
                'total-income' :
                props.getSum(props.expenses, props.currencies, props.currency) < 0 ?
                    'total-expense' : 'total'}
        >
            <div className={props.getSum(
                props.expenses,
                props.currencies,
                props.currency
            ) > 0 ?
                'total-header-income' :
                props.getSum(props.expenses, props.currencies, props.currency) < 0 ?
                    'total-header-expense' : 'total-header'}>
                Total
        </div>
            <div className={props.getSum(
                props.expenses,
                props.currencies,
                props.currency
            ) > 0 ?
                'total-sum-income' :
                props.getSum(props.expenses, props.currencies, props.currency) < 0 ?
                    'total-sum-expense' : 'total-sum'}>
                {
                    `${numeral(props.getSum(props.expenses, props.currencies, props.currency)).format('0,0.00')}
                ${getSymbolFromCurrency(props.currency)} ${props.currency}`
                }
            </div>
        </div>
    </div>
);

export default Total;
