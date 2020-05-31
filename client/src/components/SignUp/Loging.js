import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')

    const [user, setUser] = useState([]);

    const handleChange = ({ target: { value }}) => {
        setName(value);
    };

    const handleChangePassword = ({ target: { value }}) => {
        setPassword(value);
    };

    const reset = () => {
        setName('');
        setPassword('')
      }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const userInfo = {
            name, 
            type: 'admin',
            password,
        }

        console.log('submited!', userInfo);

        setUser(userInfo);
        reset();
      };


      const userName = useSelector(state => state.user.user.name);
      const dispatch = useDispatch();
  
      const _proceed = () =>{
            console.log('sent!')
            // dispatch(push('/'));
      }
  
      useEffect(() => {
          dispatch({ type: "INIT"})
      }, []);

return (
        <div className = 'section__plasephoder'>
        <i>{userName && userName}</i>
        { user && user.length < 1 ?
        
           <>
               <p> {name.length > 1 ? `Your name is ${name}` : 'Type your name '}</p>
               <form onSubmit={onSubmitForm}>
               
               <label> Name 
                   <input 
                       type="text" 
                       value={name} 
                       name="name"
                       onChange={handleChange}
                       />
               </label>

               <label> Password 
               <input 
                   type="password" 
                   value={password} 
                   name="password"
                   onChange={handleChangePassword}
                   />
               </label>
                   <button type="submit" onClick={_proceed} className="btn">Sign up as </button>
               </form>
           </>
           :
           <h1> Welcome, {user.name}</h1> 
        }
        </div>
    
    );
}
  