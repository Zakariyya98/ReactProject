import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleClickHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
        setEnteredTitle(event.target.value)

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value}
    // });
    };

    const amountClickHandler = (event) => {
        setEnteredAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value}
    // });
    };

    const dateClickHander = (event) => {
        setEnteredDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });

    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value}
    // });
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.saveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleClickHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"  value={enteredAmount} onChange={amountClickHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateClickHander} min="2020-01-01" max="2023-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;