import React from "react";
import styles from "./Semple.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from "../../store/reducers/counterReducer";

function Semple() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 className={styles.h1}>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Semple;