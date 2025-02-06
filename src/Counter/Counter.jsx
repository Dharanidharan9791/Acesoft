import React, { useEffect, useState } from 'react'
import CounterCard from '../components/counterCard'
import { useSelector } from 'react-redux'
import SumCard from '../components/sumCard'
import ResetButton from '../components/resetButton'
const Counter = () => {

    const [showPageTittle, setShowPageTittle] = useState(true)
    const [resetCounter, setResetCounter] = useState(0)
    const [counterList,setCounterList]=useState([])
    useEffect(() => {
        setCounterList([])
        setTimeout(() => {
            setShowPageTittle(false)
        }, 3000)
        setCounterList(["Counter 1", "Counter 2", "Counter 3", "Counter 4"])
    }, [resetCounter])

    
    const handleresetCount = (value) => {
        console.log('value', value)
        setResetCounter(resetCounter + 1)
    }
    return (
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
            {
                showPageTittle &&
                <div>

                    <h3>Counter App</h3>
                </div>
            }

            {counterList.length>0&&
                counterList.map((data, index) => {
                    return (
                        <CounterCard counterName={data} key={index} reset={resetCounter}/>

                    )
                })
            }

            <ResetButton handleReset={(value)=>handleresetCount(value)} />
            <SumCard />
        </div>
    )
}

export default Counter