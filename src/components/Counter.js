import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

     Change=()=>{
        // For changing the current state .. here we used setState() mehod 
            this.setState({
                count:this.state.count+1
            })
       
    }
    
    
    render() {
        return (
            <div className='text-center mt-5'>
                <h1 >Counter App</h1><br/><hr/>
                <p>When we click on increament button counter wiil increase by 1 so on..</p>

                <h2>Counter is -&nbsp;{this.state.count}</h2><br/>
                <button className='btn btn-primary' type='submit' onClick={this.Change}>Increament</button>
            </div>
        )
    }
}

export default Counter
