import { NavLink } from "react-router-dom";

const activeStyle ={
    color :"green"
}

export default function NavLinks(){
    return <ul>
        <li>
        <NavLink to='/'  activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li>
        <NavLink to='/login'  activeStyle={activeStyle}>Login</NavLink>
        </li>
        <li>
        <NavLink to='/profile' >Profile</NavLink>
        </li>
        <li>
        <NavLink to='/profile/1' >Profile/1</NavLink>
        </li>
        <li>
        <NavLink to='/about' ></NavLink> </li>
        <li>
        <NavLink to='/about?name=mark' >About?name=mark</NavLink>
        </li>
    </ul>
}