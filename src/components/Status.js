import React, { Component, Fragment } from 'react'
import ChoosePlayer from './ChoosePlayer';

class Status extends Component {


    handleSetPlayer = (e) => {

        console.log("handleSetPlayer")
        this.props.setPlayer(e)
    }

    resetGame = () => {

    }

    render() {

        const { player, winner } = this.props

        return (

            <Fragment>

                {
                   winner ? <h2>Winner is {winner}</h2> : ''
                }

                
                {
                    !player ?
                        <ChoosePlayer player={ (e) => this.handleSetPlayer(e)} />

                        :
                        <Fragment>
                        {
                            winner ? '' : <h1>Next Player is {player}</h1>}
                        </Fragment>
                }
            </Fragment>

        )
    }
}

export default Status