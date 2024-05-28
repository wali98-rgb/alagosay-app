import React, { useState, useEffect } from 'react';

const TargetCounter = ({ target, interval }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const counterInterval = setInterval(() => {
            if (count < target && target <= 10) {
                setCount(count + 1);
            }
            if (count < target && target > 10 && target < 1000) {
                setCount(count + 10);
            }
            if (count < target && target > 1000) {
                setCount(count + 100);
            }

        }, interval);

        return () => clearInterval(counterInterval);
    }, [count, target, interval]);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
};

export default TargetCounter;
