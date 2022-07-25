import {useState, useEffect} from 'react'
import axios from 'axios'

export const UsersList = () => {

    const [users, setUsers] = useState([]);
    
    //when the page is loaded (works 1 time tho)
    useEffect(() => {
        axios.get('http://localhost:5000/users').
        then(result => setUsers(result.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h3 style={{color:'navy'}}>All users list</h3>
            <div style={{height: '10px'}}></div>
            <ol className="my-list">
                {
                    users.map(user => (
                        <li key={user._id}>
                            {user.username} - {new Date(user.createdAt).toLocaleString()}
                        </li>
                    ))
                }
            </ol>
        </>
    );
}