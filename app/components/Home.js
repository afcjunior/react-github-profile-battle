import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
    <div className='home-container'>
        <h1>Github API React.js App</h1>
        <h3>See the most popular repos, or battle your github profiles!</h3>
        <Link className='button' to='/battle'>
            Battle
        </Link>
    </div>
)

export default Home