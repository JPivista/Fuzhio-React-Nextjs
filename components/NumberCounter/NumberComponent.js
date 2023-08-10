
import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

const NumberCounter = ({ title, symbol, start, end }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const step = Math.ceil((end - start) / 100);
        const timer = setInterval(() => {
            if (count < end) {
                setCount((prevCount) => Math.min(prevCount + step, end));
            }
        }, 10); // The interval at which the count will be updated

        return () => clearInterval(timer);
    }, [count, start, end]);

    return (
        <Row className="number-counter p-md-3 d-flex flex-column align-items-center">
            <span className="count poppins-bold">{count}<span className="symbol">{symbol}</span></span>
            <h2 className="title pb-4">{title}</h2>
            <hr className='w-75 d-none d-md-block' />
            <hr className='w-75 d-block d-md-none border border-2' />

        </Row>
    );
};

export default NumberCounter;
