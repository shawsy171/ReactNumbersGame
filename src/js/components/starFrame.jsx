import React from 'react';


class StarFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: []
        }
        this.numberOfStars = this.numberOfStars.bind(this);
    }
    numberOfStars () {
        // for(let i = 0; i < this.numberOfStars(); i++) {
        //         this.state.stars.push(<i  className="fa fa-star"></i>)
        //     }
        return 1 + Math.floor(Math.random()*9);

    };

    // componentWillMount () {

    // }

    render () {
        this.state.stars = [];
        for(let i = 0; i < this.props.randomNumberOfStars; i++) {
                this.state.stars.push(<i key={i} className="fa fa-star"></i>)
            }
            console.log(this.state.stars)
        return (

            <div className="well col-md-4">
                {this.state.stars}
            </div>
        )
    }
}

export default StarFrame;
/*

const numberofStars = 1;
var StarFrame = React.createClass({
    // numberofStars: function () {
    //     return 1 + Math.floor(Math.random()*9);
    // },
    stars: [],
    render: function () {
        // const rand = this.numberofStars();
        for(let i = 0; i < this.numberofStars(); i++) {
            this.stars.push(<i  className="fa fa-star"></i>)
        }
        return (
            <div className="well col-md-4">
                {this.stars}
            </div>
        );
    }
})

export default StarFrame;*/