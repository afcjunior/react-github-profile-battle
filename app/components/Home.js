var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component{
    render (){
        return (
            <div className='home-container'>
                <h1>Github API React.js App</h1>
                <h3>See the most popular repos, or battle your github profiles!</h3>
                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home;