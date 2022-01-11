import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shubham",
             age:25
        }
    }

    chagetext=()=>{
        this.setState({
            name:"Praveen"
        })
    }
    
    render() {
        return (
            <div className='text-center mt-5'>
                
                <h2>My name is <span style={{color:"red"}}>{this.state.name}</span> and i am {this.state.age} Year old</h2><br/>
                <button type='submit' className='btn btn-warning' onClick={this.chagetext}>Click Here to change the name</button>
            </div>
        )
    }
}

export default State
