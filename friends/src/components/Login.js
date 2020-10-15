import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialCredentials = {
    username: '',
    password: ''
}

export default function Login(props) {

    // const { fetchFriends } = props;

    const { push } = useHistory();

    const [credentials, setCredentials] = useState(initialCredentials);

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name] : value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                console.log('LOGIN SUCCESS', res)
                push('/friends-list')
                // fetchFriends()
            })
            .catch(err => console.log('LOGIN ERROR', err));
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <div className='login-form-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username </label>
                    <input 
                        type='text'
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <label htmlFor='password'> Password </label>
                    <input 
                        type='password'
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}
