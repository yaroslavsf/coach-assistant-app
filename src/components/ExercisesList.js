import {useState, useEffect} from 'react'
import {Exercise} from './Exercise'
import axios from 'axios'

export const ExercisesList = () => {

    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then(result => setExercises(result.data))
        .catch(error => console.log(error))
    }, [])

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/'+ id)
        .then(result => console.log(result.data))
        .catch(error => console.log(error))

        setExercises(exercises.filter(item => item._id !== id ))
    }


    const displayExercisesList = () => {
        exercises.map(item => (
            <Exercise key={item._id} exercise={item} deleteExercise={deleteExercise}/>
        ))
    }
    return (
        <>
            <h3 style={{color:'navy'}}>All exercises list</h3>
            <div style={{height: '10px'}}></div>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>UserName</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayExercisesList()}
                </tbody>
            </table>
        </>
    );
}