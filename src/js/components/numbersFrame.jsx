import React from 'react';
import range from 'lodash/range';

class NumbersFrame extends React.Component {
    constructor(props) {
        super(props)
    }

    numbersClass (number) {
        if (this.props.usedNumbers.indexOf(number) >=0) {
            return 'used'
        }
        if (this.props.selectedNumbers.indexOf(number) >=0) {
            return 'selected'
        }
    };

    numbers () {
        return range(1,10);
    };

    render () {
        return (
            <div className="row text-center">
                {this.numbers().map((num, i) => {
                    return <span key={'number'+i} className={'number'+num +' '+ this.numbersClass(num)}
                    onClick={() => this.props.selectedNumber(num)}>{num}</span>
                })}
            </div>
        )
    }
}

export default NumbersFrame;