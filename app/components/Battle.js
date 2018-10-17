import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
class PlayerInput extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        firstFocus: PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    static defaultProps = {
        label: 'Username',
        firstFocus: false
    }
    state = {
        username: ''
    }

    handleChange = event => {
        //events in js are weird. u cant put the next line inside the object in setstate. it only works like this.
        const value = event.target.value
        this.setState(()=>({username: value}))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
        document.getElementById('Player Two').focus()

    }


    render () {
        const { username } = this.state
        const { label, firstFocus } = this.props
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>{label}</label>
                <input
                    ref={firstFocus===true ? input => input && input.focus() : null }
                    id={label}
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={username}
                    onChange={this.handleChange}
                />

                <button
                    className='button'
                    type='submit'
                    disabled={!username}>
                    Lock in
                </button>
            </form>
        )
    }
}
class Battle extends React.Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    }

    handleSubmit = (id, username) => {
        this.setState(() => ({
            [id + 'Name']: username,
            [id + 'Image']: `https://github.com/${username}.png?size=200`
        }))
    }
    handleReset = (id) => {
        this.setState(() => ({
            [id + 'Name']: '',
            [id + 'Image']: null
        }))
    }

    render(){

        const {match, } = this.props
        const {playerOneName, playerTwoName, playerOneImage, playerTwoImage, } = this.state


        return(
            <div>
                <div className='row'>
                    {!playerOneName &&
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            firstFocus={true}
                            onSubmit={this.handleSubmit}
                        />
                    }
                    {playerOneImage!== null &&
                        <PlayerPreview
                            avatar={playerOneImage}
                            username={playerOneName}
                        >
                            <button
                            className='reset'
                            onClick={() => this.handleReset('playerOne')}>
                                Switch Player
                        </button>
                        </PlayerPreview>}
                    {!playerTwoName &&
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        />
                    }
                    {playerTwoImage!== null &&
                        <PlayerPreview
                            avatar={playerTwoImage}
                            username={playerTwoName}
                        >
                            <button
                            className='reset'
                            onClick={() => this.handleReset('playerTwo')}>
                                Switch Player
                            </button>
                        </PlayerPreview>}
                </div>
                {playerOneImage && playerTwoImage &&
                    <Link
                        className='button'
                        to={{
                            pathname: match.url + '/results',
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                        }}>
                    Battle
                    </Link>}
            </div>
        )
    }
}

export default Battle