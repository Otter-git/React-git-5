import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './Count.css';

const Count = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()

    return (
        <div className="counter">
            <button className="minus" onClick={() => dispatch({ type: 'minus' })}>-</button>
            <p className="currentNumber">{count}</p>
            <button className="plus" onClick={() => dispatch({ type: 'plus' })}>+</button>
        </div>
    )
};

export default Count;

