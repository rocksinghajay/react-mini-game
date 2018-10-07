import React, { Component, Fragment } from 'react'
import ChoosePlayer from './ChoosePlayer';

class StatusOfGame extends Component {

    state = {
        message:''
    }

    handleSetPlayer = (e) => {

        if(!e) {
            
           this.setState({
               message: 'Please select a player'
           })
        }
        else {
            this.setState({
                message: ''
            })
            this.props.setPlayer(e)
        }

    }

    render() {

        const { message } = this.state

        const { player, winner } = this.props

        return (

            <Fragment>
                {
                    winner ? <h2 style={{color:'green'}} >Winner is {winner}</h2> : ''
                }

                {
                    !player ?
                        <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
                        :
                        <Fragment>
                            {
                                winner ? '' : <h1>Next Player is {player}</h1>
                            }
                        </Fragment>
                }

                {
                    <p style={{color:'red'}}>{message}</p>
                }
            </Fragment>
        )
    }
}

export default StatusOfGame