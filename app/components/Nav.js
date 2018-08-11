import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (){
    return(
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/Popular'>
                    Popular
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'>
                    Battle
                </NavLink>
            </li>

        </ul>
    )
}