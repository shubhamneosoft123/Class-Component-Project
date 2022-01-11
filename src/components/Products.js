import React, { Component } from 'react'
import { getproducts,deleteProduct} from './config/Myservice'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Link, } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { browserHistory } from 'react-router-dom';


export class Products extends Component {
    
    constructor(props){
        super(props);
        this.state={proDta:[]} //setting the initial state empty
         
    }

    // To getting the data from the server we are using componentDidMount() method ,which 
    // is called when component is Rendered in the Dom
    componentDidMount(){
        getproducts().then(res=>{
            this.setState({proDta:res.data})
        })
        
    }


    // deleting the records/product from the using id 
    delPro(id) {
        if(window.confirm("Do you want to delete product")){
         deleteProduct(id)
         .then(res=>{
             if(res){
                 alert("Product Deleted");
                 getproducts().then(res=>{
                    this.setState({proDta:res.data})
                })
             }
         })
        }
    }

// when we ckick on the edit button ,it will navigate to Editproduct Comp 
    editPro=(id)=>{
        alert(id)
        // browserHistory.push('/post');

    //    return  <Navigate to={"/post"}/>
        
    }
   
    
    render() {
        return (
            <div className=' mt-2'>
            <Link className="btn btn-primary" to="/addproduct"> + Add New Item</Link>
        <div className='text-center'>
                <h1>All Products List</h1><hr/>

            <div className='row'>
                {this.state.proDta.map((pro)=>
               <div className='col-md-4' key={pro.id}>
                   <div className="card" style={{width: "18rem"}}>
                     <img src={pro.image} className="card-img-top" width={200} height={250}/>
                     <div className="card-body">
                         <h5 className="card-title">{pro.pname}</h5>
                            <p className="card-text">
                                 Price :{pro.price} <br/>
                                 Quantity:{pro.quantity}
                            </p>
                        <button className="btn btn-primary">Add To Cart</button> &nbsp;
                        <button className="btn btn-danger" onClick={()=>this.delPro(pro.id)}>Delete</button>&nbsp;
                        <button className="btn btn-warning"  onClick={()=>this.editPro(pro.id)}>Edit</button>
                     </div>
                   </div>
                </div>)}
            </div>
        </div>
        </div>
        )
    }
}

export default Products
