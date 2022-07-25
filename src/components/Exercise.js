import {Link} from 'react-router-dom'

export const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{new Date(props.exercise.date).toLocaleString()}</td>
            <td>
                <Link to={'/edit/' + props.exercise._id} className="btn btn-sm btn-success">
                    Update
                </Link>
                <button onClick={() => props.deleteExercise(props.exercise._id)} className="btn btn-sm btn-success">
                    Delete
                </button>
            </td>
        </tr>

    )
}