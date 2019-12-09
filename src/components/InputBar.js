import React from 'react';
import Button from './Button';

const InputBar = ({onCountChange, onButtonSubmit}) => {
    return(
        <div className='flex'>
            <div class=" w-25 pa1 mr2">
                <input 
                    className='pa2 ba b--green bg-lightest-grey'
                    type="search" 
                    placeholder="Number of Virtual Friends"
                    onChange={onCountChange}
                />
                <Button onButtonSubmit={onButtonSubmit} buttonName={'Display'}/>
            </div>
        </div>
        
    );
} 

export default InputBar;