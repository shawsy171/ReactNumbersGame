import React from 'react';
import range from 'lodash/range';

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};
// import ReactDOM from 'react-dom';
import StarFrame from './starFrame.jsx';
import ButtonFrame from './buttonFrame.jsx';
import AnswerFrame from './answerFrame.jsx';
import NumbersFrame from './numbersFrame.jsx';
import DoneFrame from './doneFrame.jsx';

class Game extends React.Component {
    randomNumber () {
        return 1 + Math.floor(Math.random()*9);
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: this.randomNumber(),
            answerIsCorrect: null,
            usedNumbers: [],
            redraws: 5,
            doneStatus: null
        };
        this.selectedNumber = this.selectedNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptedNumbers = this.acceptedNumbers.bind(this);
        this.redraw = this.redraw.bind(this);
    }

    selectedNumber (clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber (clickedNumber) {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }))
    }

    checkAnswer () {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, cur) => {
                // console.log(prevState.randomNumberOfStars);
                return acc + cur
            }, 0)
        }))
    }

    acceptedNumbers () {
        this.setState(prevState => {
           return {
               usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
                selectedNumbers: [],
                answerIsCorrect: null
            }
        }, this.updateDoneStatus)
    }
    possibleSolutions ({randomNumberOfStars, usedNumbers}) {
        const possibleNumbers = range(1, 10).filter((number) => {
            usedNumbers.indexOf(number) === -1;
        });

        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    }

    updateDoneStatus () {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'Good job' }
            }

            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over!' }
            }
        })
    }

    redraw () {
        if (this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            randomNumberOfStars: this.randomNumber (),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus)
    }

    render () {
        // const { selectedNumbers, randomNumberOfStars, answerIsCorrect } = this.state --- is using destructuring
        const { selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers, redraws, doneStatus } = this.state;
        return (
            <div>
                <h1>Play Nine</h1>
                <div className={'row'} >
                    <StarFrame
                        randomNumberOfStars={randomNumberOfStars}/>
                    <ButtonFrame
                        checkAnswer={this.checkAnswer}
                        answerIsCorrect={answerIsCorrect}
                        acceptedNumbers={this.acceptedNumbers}
                        selectedNumbers={selectedNumbers}
                        redraw={this.redraw}
                        redraws={redraws}/>
                    <AnswerFrame
                        selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber}/>
                </div>
                <br/>
                {doneStatus ?
                <DoneFrame
                    doneStatus={doneStatus}/> :
                <NumbersFrame
                    selectedNumbers={selectedNumbers}
                    selectedNumber={this.selectedNumber}
                    usedNumbers={usedNumbers}/>}

            </div>
        )
    }
}

export default Game;