import React, { useState } from 'react';

const Input = (props) => {
    const [inputText, setInputText] = useState('');

    const handlerInput = (e) => {
  setInputText(e.target.value);
    }

    const handlerEnter=(e) => {
      if(e.keyCode===13) {
        props.addList(inputText)
        setInputText('');
      }
    }
    return (
        <div className='form-container'>
            <input className='input-box'
             type='text' 
            placeholder='Add an item'
            value={inputText}
            onChange={handlerInput}
            onKeyDown={handlerEnter}/>

     <button onClick={()=>{
        props.addList(inputText)
        setInputText('');
     }} className='add-btn'>+</button>
      </div>

    )
}

export default Input;