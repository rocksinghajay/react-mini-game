import React, { Component } from 'react'

class ChoosePlayer extends Component {

    handleForm = (e) => {
        e.preventDefault()

        this.props.player(e.target.player.value)
    }

    render() {

        return (
            <div className="ChoosePlayer"> 
                <h3>Choose a player</h3>
                <form onSubmit={this.handleForm}>
                    <label>
                        Player X
                        <input type="radio" name="player" value="X" />
                    </label>
                    <label>
                        Player O
                        <input type="radio" name="player" value="O" />
                    </label>
                    <button type="submit">Start</button>
                </form>
            </div>
        )
    }
}

export default ChoosePlayer
