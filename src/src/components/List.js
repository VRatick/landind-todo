import React from 'react'
import text from '../assets/text.json'

const List = ( {inProgress, list, addToInProgress, setInProgress, setList, removeFromList} ) => {

    const addToInProgressList = (id) => {
        const inProgressList = [...inProgress]
        const plan = [...list]
        const removed  = plan.splice(id, 1)
        inProgressList.push(removed)
        addToInProgress(id)
        setInProgress(inProgressList)
        setList(plan)
    }

    const deleteFromPlan = (id) => {       
        const plan = [...list]  
        plan.splice(id, 1)      
        removeFromList(id)        
        setList(plan)
    }  

    const plan = list.map( (item, index) => {
        return (
            <div key={index+1} className='info-container'>
                <div className='text'>{item}</div>
                <div className='buttons-container'>
                    <button className='button-green' onClick={() => {addToInProgressList(index)}}>{text.inProgress}</button>
                    <button className='button-red' onClick={() => {deleteFromPlan(index)}}>{text.remove}</button>
                </div>
            </div>
        )
    })

    return (
        <div className='list-container'>
            <div className='title'>{text.plan}</div>            
            {plan}
        </div>
    )
}

export default List