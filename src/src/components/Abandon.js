import React from 'react'
import text from '../assets/text.json'

const Abandon = ( {abandon} ) => {

    const list = abandon.map( (item, index) => {
        return (
            <div  key={index+1}>
                <div className='text'>{item}</div>                
            </div>
        )
    })

    return (
        <div className='abandon-container'>
            <div className='title'>{text.abandon}</div>
            {list}
        </div>
    )
}

export default Abandon