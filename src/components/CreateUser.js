import { useState } from 'react'
import axios from 'axios'

export const CreateUser = () => {

    const [userName, setUserName] = useState('')

    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        let user = { username: userName };
        console.log(user)
        //
        await axios.post('http://localhost:5000/users/add', user)
            .then(result => console.log(result.data))
            .catch(error => console.log(error))
        //
        setUserName('');
        window.location = '/users'
    }
    return (
        <>
            <h3 style={{ color: 'navy' }}>Create new user</h3>
            <div style={{ height: '10px' }}></div>
            <form className='my-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label for="userName">
                        UserName:
                    </label>
                    <input
                        type='text'
                        id="userName"
                        className='form-control'
                        value={userName}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input type="submit" value="Create User" className='btn btn-primary'></input>
                </div>
            </form>
        </>
    );
}