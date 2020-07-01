import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 8
        }

        this.boardWidth = this.boardWidth.bind(this);
    }

    boardWidth(value) {
        let updatedObj = {width: value};
        this.setState(updatedObj);
    }

    render() {
        let board = [];
        let color = "";
        let counter = 1;
        for (let i = 0; i < this.state.width**2; i++) {
            i%2 === 0 ? color = "black" : color = "white";
            if (i === 0) {
                board.push(<div className={color} ></div>);
            } else if (counter === this.state.width) {
                board.push(<div className={color} ></div>);
                counter = 1;
            } else {
                board.push(<div className={color} id="inline" ></div>);
                counter += 1;
            }
        }
        return (
            <div className="app">
                <input onChange={(e) => this.boardWidth(e.target.value)}></input>
                <div className="board">
                    {board}
                </div>
            </div> 
        )
    }
}
