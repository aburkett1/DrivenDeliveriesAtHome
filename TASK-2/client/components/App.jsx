import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardWidth: 8
        }
    }

    render() {
        let board = [];
        let boardRow = [];
        let checkerId = 1;
        for (let i = 0; i < this.state.boardWidth; i++) {
            for (let j = 0; j < this.state.boardWidth; j++) {
                if (i%2 === 0 && j%2 === 0) {
                    if (i === 0 || i === 1) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="black">
                                <div id={`redChecker${checkerId}`} className="redChecker"/>
                            </div>
                        );
                    } else if (i === this.state.boardWidth-1 || i === this.state.boardWidth-2) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="black">
                                <div id={`blackChecker${checkerId}`} className="blackChecker"/>
                            </div>
                        );
                    } else {
                        boardRow.push(<div id={`${i}-${j}`} className="black"/>); 
                    }
                } else if (i%2 === 0 && j%2 !== 0) {
                    if (i === 0 || i === 1) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="white">
                                <div id={`redChecker${checkerId}`} className="redChecker"/>
                            </div>
                        );
                    } else if (i === this.state.boardWidth-1 || i === this.state.boardWidth-2) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="white">
                                <div id={`blackChecker${checkerId}`} className="blackChecker"/>
                            </div>
                        );
                    } else {
                        boardRow.push(<div id={`${i}-${j}`} className="white"/>); 
                    }
                } else if (i%2 !== 0 && j%2 === 0) {
                    if (i === 0 || i === 1) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="white">
                                <div id={`redChecker${checkerId}`} className="redChecker"/>
                            </div>
                        );
                    } else if (i === this.state.boardWidth-1 || i === this.state.boardWidth-2) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="white">
                                <div id={`blackChecker${checkerId}`} className="blackChecker"/>
                            </div>
                        );
                    } else {
                        boardRow.push(<div id={`${i}-${j}`} className="white"/>); 
                    }
                } else if (i%2 !== 0 && j%2 !== 0) {
                    if (i === 0 || i === 1) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="black">
                                <div id={`redChecker${checkerId}`} className="redChecker"/>
                            </div>
                        );
                    } else if (i === this.state.boardWidth-1 || i === this.state.boardWidth-2) {
                        boardRow.push(
                            <div id={`${i}-${j}`} className="black">
                                <div id={`blackChecker${checkerId}`} className="blackChecker"/>
                            </div>
                        );
                    } else {
                        boardRow.push(<div id={`${i}-${j}`} className="black"/>); 
                    }
                }
            }
            board.push(<div className="boardRow">{boardRow}</div>)
            boardRow = [];
        }
        return (
            <div>
                <input type="text" onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        this.setState({boardWidth: e.target.value})
                    }
                }} />
                <div className="board">
                {board}
                </div>
            </div>
        )
    }
}