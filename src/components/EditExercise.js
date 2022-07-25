import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export const EditExercise = () => {

    const {id} = useParams()
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().substring(0, 16))
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/' + id)
        .then(result => {
            setUsername(result.data.username)
            setDescription(result.data.description)
            setDuration(result.data.duration)
            setDate(result.data.date)
        })
        .catch(error => console.log(error))
        //
        axios.get('http://localhost:5000/users')
        .then(result => setUsers(result.data.map(user => user.username)))
        .catch(error => console.log(error.response.data))
    }, [id])

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

        await axios.post('http://localhost:5000/exercises/update' + id, exercise)
        .then(result => console.log(result.data))
        .catch(error => console.log(error.response.data))

        //just to go to '/' url after all operations
        window.location = '/';
    }

    return (
        <>
            <h3 style={{color:'navy'}}>Edit exist exercise</h3>
            <div style={{height: '10px'}}></div>
            <form className='my-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor="username">Username: </label>
                    <select value={username} onChange={onChangeUsername}>
                        {users.map((user) => (
                            <option key={user} value={user}>{user}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Description: </label>
                    <input 
                        type="text" 
                        required
                         className='form-control'
                         value={description}
                         onChange={onChangeDescription}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="duration">Duration: </label>
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
                    <label htmlFor="date">Date: </label>
                    <input 
                        type="datetime-local" 
                        required
                        className='form-control'
                        value={date}
                        onChange={onChangeDate}
                    />
                </div>

                <div className='form-group text-center'>
                    <input type="submit" className='btn btn-primary' value="update exercise"/>

                </div>

            </form>
        </>
    );
}