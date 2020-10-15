import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function FriendsList(props) {

    const [friends, setFriends] = useState([]);

    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
                console.log('FRIENDFETCH SUCCESS', res)
                setFriends(res.data)
        })
        .catch(err => console.log('FRIENDFETCH ERROR', err))
    }, [setFriends])

    const handleAddFriend = () => {
        push('/add-friend')
    }

    return (
        <div className='friends-list-container'>
            {friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h1>{friend.name}</h1>
                    <h3>{friend.age}</h3>
                    <h4>{friend.email}</h4>
                </div>    
            ))}
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
        
    )
}