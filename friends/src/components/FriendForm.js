import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const initialNewFriend = {
   name: '',
   age: '',
   email: '',
}

export default function FriendForm(props) {

   const [newFriend, setNewFriend] = useState(initialNewFriend);

   const { push } = useHistory();
   
   const handleChange = e => {
      const { name, value } = e.target;
      setNewFriend({ ...newFriend, [name] : value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
         .post('/api/friends', newFriend)
         .then(res => {
            console.log(res)
            push('friends-list')
         })
         .catch(err => console.log(err))
   }

   return (
      <div className='new-friend-form-container'>
         <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name </label>
               <input 
                  type='text'
                  name='name'
                  value={newFriend.name}
                  onChange={handleChange}
               />
            <label htmlFor='age'>Age </label>
               <input 
                  type='number'
                  name='age'
                  value={newFriend.age}
                  onChange={handleChange}
            />
            <label htmlFor='email'>E-mail </label>
               <input 
                  type='email'
                  name='email'
                  value={newFriend.email}
                  onChange={handleChange}
               />
            <button>Add Friend!</button>
         </form>
      </div>
   )
}