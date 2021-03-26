import React from 'react'
import text from '../assets/text.json'

const List = ( {list, addToInProgress, removeFromList} ) => {   

    const plan = list.map( (item, index) => {
        return (
            <div key={index+1} className='info-container'>
                <div className='text'>{item}</div>
                <div className='buttons-container'>
                    <button className='button-green' onClick={() => {addToInProgress(index)}}>{text.inProgress}</button>
                    <button className='button-red' onClick={() => {removeFromList(index)}}>{text.remove}</button>
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