import React, { Component } from 'react'
import { addProduct } from './config/Myservice';
export class AddProduct extends Component {

    constructor(props){
        super(props);
    
        this.state={pname:'',price:'',quantity:'',image:''}
    }
    // calling handler method and getting the input value reference
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    // Adding Data in the Records
    postData=(event)=>{
        event.preventDefault(); // it will not refresh the page again again
       
        addProduct(this.state).then(res=>{
            if(res){
                alert("product Added");
               
            }
        })
        .catch(err=>{ // cattching the errors
            if(err){
                alert("something Went Wrong")
            }
        })
    }





    render() {
        return (
            // Form for getting input from the users
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                <h1 className='text-center mt-2'>Add New Product</h1>
                <form onSubmit={this.postData}>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" name='pname' 
                        className='form-control' onChange={this.handler}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Price</label>
                        <input type="number" name='price' 
                        className='form-control' onChange={this.handler}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Quantity</label>
                        <input type="number" name='quantity' 
                        className='form-control' onChange={this.handler}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Image</label>
                        <input type="text" name='image' 
                        className='form-control' onChange={this.handler}/>
                    </div>
                    <div className='text-center mt-3'>
                    <input type="submit" value="Add Item" className="btn btn-success"/>

                    </div>
               </form>
                </div>
            </div>
        )
    }
}

export default AddProduct
