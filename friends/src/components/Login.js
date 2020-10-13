import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const initialCredentials = {
    username: '',
    password: ''
}

export default function Login() {

    const [credentials, setCredentials] = useState(initialCredentials);

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name] : value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <div className='login-form-container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                    />
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
