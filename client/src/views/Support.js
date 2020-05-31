// Core
import React, { useState, useRef, useEffect, forwardRef } from 'react';


const Input = forwardRef((props, forwardedRef) => {
  return (
      <input
          disabled = { !props.isEditing }
          ref = { forwardedRef }
          value = { props.name }
          onChange = { props.onChange }
      />
  );
});


const Support = () => {
    const [ name, setName ] = useState('+380');
    const [ isEditing, setIsEditing ] = useState(true);

    const nameInputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            nameInputRef.current.focus();
        }
    }, [ isEditing ]);

    const buttonText = `edit: ${isEditing ? 'on': 'off' }`;

    const  _handleClick1 = () => false;
    const  _handleClick2 = (event) => event.preventDefault();

    return (
        <>
        <div className = 'section__plasephoder'>
          <section>
            <h1 className="section__title">Enter your number: {name}</h1>

              <Input
                isEditing = { isEditing }
                name = { name }
                ref = { nameInputRef }
                onChange = { (event) => setName(event.target.value) }
              />
                  <button onClick = { () => setIsEditing(!isEditing) }>  {buttonText} </button>
                  <button onClick = {() => nameInputRef.current.focus()}>Focus</button>
            </section>
        </div>


        <div className = 'section__plasephoder'>
          <a
            href = 'https://www.google.com'
            rel = 'noopener noreferrer'
            target = '_blank'
            onClick = { _handleClick1 }>
            Link 1
        </a>
        <br />
        <a
            href = 'https://www.google.com'
            rel = 'noopener noreferrer'
            target = '_blank'
            onClick = { _handleClick2 }>
            Link 2
        </a>
        </div>
            
        </>
    );
};


export default Support;