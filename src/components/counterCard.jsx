import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { increment, decrement } from '../feature/counterSlice'
export default function CounterCard({ counterName }) {
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()


    const handleIncrement = () => {
        if (value - 1 < 9) {
            setValue(value + 1)
            dispatch(increment())
        }
        else {
            setMessage(`${counterName} has reached maximum value 10`)
        }

    }
    const handleDecrement = () => {
        if (value - 1 >= 0) {
            setValue(value - 1)
            dispatch(decrement())
        }


    }
    return (
        <div className='mb-3 border border-dark rounded p-3'>
            <div className='d-flex gap-3'>
                <h4>
                    {counterName}
                </h4>
                <div className='d-flex gap-5 '>
                    <Button className='rounded-circle px-3 py-1 fs-4'
                        aria-label="Increment value"
                        onClick={() => handleDecrement()}
                    >
                        -
                    </Button>
                    <span>{value}</span>
                    <Button className='rounded-circle px-3 py-1 fs-4'
                        aria-label="Decrement value"
                        onClick={() => handleIncrement()}
                    >
                        +
                    </Button>
                </div>
            </div>
            <div className='text-danger'>{message}</div>
        </div>
    )
}