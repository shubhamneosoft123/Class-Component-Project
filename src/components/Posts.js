import React, { Component } from 'react'

export class Posts extends Component {

    constructor(props){
        super(props);
        this.state={postData:[]}
    }
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>
        { 
            
            this.setState({postData:data})
            console.log(data)
    })
  
   }
    render() {
        return (
            <div className='text-center m-3'>
                <br/>
                <h2>Getting users data using fetch method with Fake Json Api</h2>
                <hr/><br/>
                <table className='table table-bordered'>
                   <thead>
                   <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>website</th>
                    </tr>
                   </thead>
                    <tbody>
                    {this.state.postData.map((post,index)=>
                    <tr key={post.id}>
                    <td>{index+1}</td>
                    <td>{post.name}</td>
                    <td>{post.email}</td>
                    <td>{post.website   }</td>
                    </tr> )}
                    </tbody>
                </table>

                
            </div>
        )
    }
}

export default Posts
