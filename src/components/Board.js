import React from 'react'
import Square from '../components/Square'
import { Component } from 'react'


export default class Board extends Component {
    state = {
       player: true,
       squares: Array(9).fill(null),
       playero: 'o',
       playerx: 'x',
       result: '',
    }

    gamingInput = (i) => {
        const newState = [...this.state.squares]

        if(newState[i] === null) {
            newState[i] = this.state.player? this.state.playerx : this.state.playero
            this.setState({squares: newState, player: !this.state.player})

            const gameLines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
              ];

              for (let i = 0; i < gameLines.length; i++) {
                const [a, b, c] = gameLines[i];
                if (newState[a] && newState[a] === newState[b] && newState[a] === newState[c]) {
                    this.setState({
                        result: `${newState[a]} player wins`
                        })
            }
          }
        }
    }
    

    render() {
        console.log(this.state.squares);
        const squareValues = this.state.squares.map((item, i) =>  { 
            return <Square i = {i}  key={i} gamingInput={this.gamingInput} value={this.state.squares[i]}/>
          })
      
          return (
            <React.Fragment>
                 
              <div className="status h2 text-center">{this.state.player ? "Next player: X" : "Next player: O"}</div> 
              <div className="board">
                {squareValues}
              </div>
              <button onClick={() => this.setState({
                    squares :  Array(9).fill(null)
                })}>Restart Game</button>
                <h2>{this.state.result}</h2>
            </React.Fragment>
          );
        }
    };





//  }
