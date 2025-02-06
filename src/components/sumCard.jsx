import React from 'react'
import { useSelector } from 'react-redux'
const SumCard = () => {
    const count = useSelector((state) => state.value)

    return (
        <div className='d-flex gap-2'>
            <div className='fw-bold fs-5'>Sum</div>
            <div className='d-flex align-items-center'>{count}</div>
        </div>
    )
}

export default SumCard