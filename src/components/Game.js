import React from 'react'
import Board from '../components/Board'
import { Component } from 'react'

export default class Game extends Component {

    render() {
        
      return (
        <article className="game container mt-5">
          <section className="row">
            <div className="col-sm-8 game-board">
              <Board />
            </div>
            <div className="col-sm-4 game-info">
              <p className="h2">{/* status */}</p>
              <ul className="nav nav-pills flex-column">
              
            </ul>
            </div>
          </section>
        </article>
      );
    }
  }