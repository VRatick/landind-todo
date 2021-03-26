import React from 'react'
import text from '../assets/text.json'

const InProgress = ( {inProgress, addToAbandon, addToDone} ) => {    

    const list = inProgress.map( (item, index) => {        
        return (
            <div  key={index+1} className='info-container'>
                <div className='text'>{item}</div>
                <div className='buttons-container'>
                    <button className='button-green' onClick={() => {addToDone(index)}}>{text.done}</button>
                    <button className='button-red' onClick={() => {addToAbandon(index)}}>{text.abandon}</button>
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