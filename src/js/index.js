import React from 'react';
import ReactDOM from 'react-dom';
// import StarFrame from './components/starFrame.jsx';
// import ButtonFrame from './components/buttonFrame.jsx';
// import AnswerFrame from './components/answerFrame.jsx';
import Game from './components/game.jsx';

// var Game = React.createClass({

//     render: function () {
//         return (
//             <div>
//                 <h1>Play Nine</h1>
//                 <StarFrame />
//                 <ButtonFrame />
//                 <AnswerFrame />
//             </div>
//         )
//     }
// })

class App extends React.Component {
    render() {
        return (
            <Game />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));