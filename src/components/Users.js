import React, { Component } from 'react'
import axios from "axios"
export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state={proDta:[]}
    }
    
componentDidMount(){
    const Url="https://jsonplaceholder.typicode.com/posts";
    axios.get(Url)
    .then(res=>{
        this.setState({proDta:res.data})
    })
    console.log(Url);
}

    render() {
        return (
            <div className=' mt-3'>
                <h2 style={{color:"blue",textAlign:"center"}}>Getting Posts using Axios with fake Json Api</h2><br/>

                {this.state.proDta.map((pro)=>
                 <div key={pro.id}>
                     
                    Post- <span>{pro.id}</span><h3>{pro.title}</h3>
                     <p>{pro.body}</p>
                     <hr/>
                 </div>
                )}
            </div>
        )
    }
}

export default Users
