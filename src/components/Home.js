import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='text-center mt-5'>
                <h1 style={{color:"red"}}>{this.props.name}</h1>
                {/* this data is comming from app component via a props */}
                <p>This data in coming from app component to Home Comp via a props</p>
            </div>
        )
    }
}

export default Home
