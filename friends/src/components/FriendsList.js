import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function FriendsList(props) {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
                console.log('FRIENDFETCH SUCCESS', res)
                setFriends(res.data)
        })
        .catch(err => console.log('FRIENDFETCH ERROR', err))
    }, [setFriends])

    return (
        <div className='friends-list-container'>
            {friends.map(friend => (
                <div className='friend'>
                    <h1>{friend.name}</h1>
                    <h3>{friend.age}</h3>
                    <h4>{friend.email}</h4>
                </div>    
            ))}
        </div>
    )
}