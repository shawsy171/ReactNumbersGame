import React from 'react';

/*var ButtonFrame = React.createClass({
    render: function () {
        return (

            <div className="col-md-4">
                <button type="button" className="btn btn-lg btn-primary button center"> = </button>
            </div>

        );
    }
})

export default ButtonFrame;*/

const ButtonFrame = (props) => {
    let button;

    switch (props.answerIsCorrect) {
        case true:
            button = <button
                onClick={props.acceptedNumbers}
                className="btn btn-lg btn-success button">
                    <i className="fa fa-check"></i>
                </button>
            break
        case false:
            button = <button
                className="btn btn-lg btn-danger button">
                    <i className="fa fa-times"></i>
                </button>
            break
        default:
            button = <button
                disabled={props.selectedNumbers.length === 0}
                onClick={props.checkAnswer}
                type="button"
                className="btn btn-lg btn-primary button center"> = </button>
            break
    }
    return (
        <div className="col-md-4 text-center" >
            {button}
            <br/>
            <br/>
            <button
                className="btn btn-warning btn-sm"
                disabled={props.redraws === 0}
                onClick={props.redraw}>
                <i className="fa fa-refresh"> {props.redraws}</i>
            </button>
        </div>
    );
}

export default ButtonFrame;