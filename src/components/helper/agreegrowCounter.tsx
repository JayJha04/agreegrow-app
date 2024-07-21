import React, { useState } from 'react';

export interface AgreegrowCounterProp {
    intitialCount: number;
}

const AgreegrowCounter: React.FC<AgreegrowCounterProp> = ({ intitialCount = 1 }) => {
    const [count, setCount] = useState<number>(intitialCount);

    const handleDecrement = () => {
        setCount((prevCount) => {
            if (prevCount <= 1) {
                return prevCount;
            }

            return prevCount - 1;
        });
    }

    const handleIncrement = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    return (
        <div className="row border border-2 rounded-2 text-center fs-6 agreegrow-counter-container">
            <div className="col-4 p-1 decrement" onClick={handleDecrement}><i className="bi bi-dash"></i></div>
            <div className="col-4 p-1 bg-secondary-subtle fw-medium">{count}</div>
            <div className="col-4 p-1 increment" onClick={handleIncrement}><i className="bi bi-plus"></i></div>
        </div>
    );
}

export default AgreegrowCounter;