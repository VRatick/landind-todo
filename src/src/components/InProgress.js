import React from 'react'
import text from '../assets/text.json'

const InProgress = ( {inProgress, abandon, addToAbandon, setInProgress, setAbandon, done, addToDone, setDone} ) => {

    const addToAbandonList = (id) => {
        const inProgressList = [...inProgress]
        const abandonList = [...abandon]
        const removed  = inProgressList.splice(id, 1)
        abandonList.push(removed)
        addToAbandon(id)
        setAbandon(abandonList)
        setInProgress(inProgressList)
    }

    const addToDoneList = (id) => {
        const inProgressList = [...inProgress]
        const doneList = [...done]
        const removed  = inProgressList.splice(id, 1)
        doneList.push(removed)
        addToDone(id)
        setDone(doneList)
        setInProgress(inProgressList)
    }

    const list = inProgress.map( (item, index) => {        
        return (
            <div  key={index+1} className='info-container'>
                <div className='text'>{item}</div>
                <div className='buttons-container'>
                    <button className='button-green' onClick={() => {addToDoneList(index)}}>{text.done}</button>
                    <button className='button-red' onClick={() => {addToAbandonList(index)}}>{text.abandon}</button>
                </div>
            </div>
        )
    })

    return (
        <div className='inprogress-container'>
            <div className='title'>{text.inProgress}</div>
            {list}
        </div>
    )
}

export default InProgress