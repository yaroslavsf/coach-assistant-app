import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
            <div className='container'>
                <Link to="/" className='navbar-brend'>Coach assistant</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to="/users" className='nav-link'>Users list</Link>
                        </li>
                        <li>
                            <Link to="/user" className='nav-link'>Create user</Link>
                        </li>
                        <li>
                            <Link to="/" className='nav-link'>Exercise list</Link>
                        </li>
                        <li>
                            <Link to="/create" className='nav-link'>Create exercise</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav >
    );
}