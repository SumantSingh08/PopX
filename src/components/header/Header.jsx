
import React from 'react'
import Container from '../Container'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
const authStatus = useSelector((state) =>state.auth.status);
const navigate = useNavigate()
/* The `navItems` constant is an array of objects that represent navigation items for a website header. */
const navItems = [
    {
        name: "home",
        path: "/",
        status: true
    },
    {
        name: "Login",
        path: "/Login",
        status: !authStatus
    },
    {
        name: "SignUp",
        path: "/signup",
        status:!authStatus
    }
]
    return (
        <header className='my-3 bg-gray-500 text-white'>
            <Container>
                <nav className='flex'>
                    <Link>
                    <div className='mr-3'>
                        Logo
                    </div>
                    </Link>
                    <ul className='flex '>
                        {navItems.map((item) =>(
                            item.status? 
                            <li  key={item.name} value={item}>
                                <button onClick={() =>navigate(item.path) } className="inline-block px-6 py-2 rounded-full cursor-pointer duration-200 bg-blue-600 text-white hover:bg-blue-100">
                                    {item.name}
                                </button>
                            </li>
                            : null
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
