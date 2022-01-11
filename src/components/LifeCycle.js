import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                    color: "Cricket"
        }
    }
    
// 1. This is first Life Cycle Hook it wil be called after component is Loaded/Rendered in the DOM
componentDidMount(){
    setTimeout(() => {
        this.setState({color: "Football"})
      }, 2000)
}


// 2. This 2nd Life Cycle hook it call when the component state is changed
componentDidUpdate(){
    console.log("updated");
}

//3 . This Last Life cycle method which called when our component in removed from the Dom
componentWillUnmount() {
    alert("The component named Lifecycle is about to be unmounted.");
  }

    render() {
        return (
            <div>
                 <h2 className='text-center mt-5'>This will change cricket to football after 2 seconds</h2>
               <h1 className='text-center mt-5'>I Love To Play  <span style={{color:"red"}}>{this.state.color}</span></h1>
            </div>
        )
    }
}

export default LifeCycle
