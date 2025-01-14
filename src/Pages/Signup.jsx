import React, { useState }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from '../redux/user';
// If user does not exist in database, will create a new user to the database
const Signup = () => {
    const { username } = useSelector(state => state.user)
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault()
        axios.post('/signup', {
            username,
            password
        })
        .then((data) => {
            navigate('/home')
        })
        .catch((error) => console.log('username already exists'))
    }
    return (
        <div className='signupForm'>
            Create User
            <form onSubmit={handleSignUp}>
            <input type="text" id="Username" placeholder = 'Username' onChange={e => dispatch(storeUser(e.target.value))} />
            <input type="text" id="password" placeholder = 'Passowrd' onChange={e => setPassword((e.target.value))} />
=            <input className='submit_btn' type="submit"/>
            </form>
        </div>
    ) 
}


export default Signup;