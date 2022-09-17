import React from "react";

const Counter = (props) => {
    console.log(props)
    const {value} = props;

    const x = <h1>empty</h1>;
    const formatValue = () => {
        return value === 0 ? x : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                className="btn m-2 btn-primary btm-sm"
                onClick={()=>props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className="btn m-2 btn-primary btm-sm"
                onClick={()=>props.onDecrement(props.id)}
            >
                -
            </button>
            <button
                className = "btn btn-danger btn-sm m-2"
                onClick={()=>props.onDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Counter;
