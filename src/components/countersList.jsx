import React, {useState} from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id: 0, value: 111, name: 'ненужная вещь'},
        {id: 1, value: 4, name: 'ложка'},
        {id: 2, value: 0, name: 'вилка'},
        {id: 3, value: 0, name: 'тарелка'},
        {id: 4, value: 0, name: 'набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        setCounters(counters => counters.filter(c => c.id !== id))
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        setCounters(counters => counters
            .map((counter) => counter.id === id
                ? {...counter, value: counter.value + 1}
                : counter))
    };

    const handleDecrement = (id) => {
        setCounters(counters => counters.map(counter => counter.id === id && counter.value > 0
                ? {...counter, value: counter.value - 1}
                : counter))
    };

    return <>
        {counters.map((counter) => (
            <Counter
                key={counter.id}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                {...counter}
            />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
};

export default CountersList