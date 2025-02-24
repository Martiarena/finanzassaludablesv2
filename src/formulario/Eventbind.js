import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    /*clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }*/

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* First approach
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Second approach
                <button onClick={() => this.clickHandler()}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Eventbind