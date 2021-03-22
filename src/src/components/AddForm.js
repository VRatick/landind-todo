import React from 'react'
import text from '../assets/text.json'

const AddForm = ( {work, setWork, addToList, setList, list} ) => {    

    const handleChange = (e) => {
        setWork(e.target.value)
    } 

    const addToPlan = (work) => {        
        const plan = [...list]
        plan.push(work)
        setList(plan)  
        addToList(work)       
    }

    return (
        <div className='input-container'>
            <div className='title'>{text.add}</div>
            <input className='input' onChange={handleChange} value={work}/>
            <button className='button-green' onClick={ () => {                
                addToPlan(work)
            }}>{text.add}</button>
        </div>
    )
}

export default AddForm