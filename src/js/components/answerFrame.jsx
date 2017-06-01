import React from 'react';

class AnswerFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="well col-md-4">
                {this.props.selectedNumbers.map((num, i) => {
                    return <span key={'answer' + i} onClick={() => this.props.unselectNumber(num)}>{num}</span>
                })}
            </div>
        )
    }
}

export default AnswerFrame;

/*var AnswerFrame = React.createClass({

    render: function () {

        // console.log(this.props.selectedNumbers)
        return (
            <div className="well col-md-4">
                {this.props.selectedNumbers.map((num, i) => {
                    return <span key={'answer' + i} onClick={props.unselectNumber(num)}>{num}</span>
                })}
            </div>
        );
    }
})

export default AnswerFrame;*/