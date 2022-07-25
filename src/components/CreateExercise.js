import {useState, useEffect} from 'react'
import axios from 'axios'

export const CreateExercise = () => {

    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().substring(0, 16))
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(result => setUsers(result.data.map(user => user.username)))
        .catch(error => console.log(error.response.data))
    }, [])

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }
    const onChangeUsers = (e) => {
        setUsers(e.target.value)
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault()
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date,
            users: users
        }

        await axios.post('http://localhost:5000/exercises/add', exercise)
        .then(result => console.log(result.data))
        .catch(error => console.log(error.response.data))

        //just to go to '/' url after all operations
        window.location = '/';
    }

    return (
        <>
            <h3 style={{color:'navy'}}>Create new exercise</h3>
            <div style={{height: '10px'}}></div>
            <form className='my-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label for="username">Username: </label>
                    <select value={username} onChange={onChangeUsername}>
                        {users.map((user) => (
                            <option key={user} value={user}>{user}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label for="description">Description: </label>
                    <input 
                        type="text" 
                        required
                         className='form-control'
                         value={description}
                         onChange={onChangeDescription}
                    />
                </div>

                <div className='form-group'>
                    <label for="duration">Duration: </label>
                    <input 
                        type="number" 
                        min="0"
                        required
                        className='form-control'
                        value={duration}
                        onChange={onChangeDuration}
                        step="any"
                    />
                </div>

                <div className='form-group'>
                    <label for="date">Date: </label>
                    <input 
                        type="datetime-local" 
                        required
                        className='form-control'
                        value={date}
                        onChange={onChangeDate}
                    />
                </div>

                <div className='form-group text-center'>
                    <input type="submit" className='btn btn-primary' value="create exercise"/>

                </div>

            </form>
        </>
    );
}