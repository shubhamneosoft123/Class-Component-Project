import React, { Component } from 'react'
import { getproductsById, updateProduct } from './config/Myservice';
export class EditProduct extends Component {

    constructor(props){
        super(props);
    
        this.state={pname:'',price:'',quantity:'',image:''}
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    componentDidMount(){
        getproductsById()
        .then(res=>{
            this.setState({pname:res.data})
        })
    }
    editpostData=(event)=>{
        event.preventDefault();
       
        updateProduct(this.state).then(res=>{
            if(res){
                alert("product updated")
            }
        })
        .catch(err=>{
            if(err){
                alert("something Went Wrong")
            }
        })
    }





    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                <h1 className='text-center mt-2'>Edit Product</h1>
                <form onSubmit={this.editpostData}>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" name='pname' 
                        className='form-control' onChange={this.handler} defaultValue={this.state.pname}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Price</label>
                        <input type="number" name='price' 
                        className='form-control' onChange={this.handler} defaultValue={this.state.price}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Quantity</label>
                        <input type="number" name='quantity' 
                        className='form-control' onChange={this.handler} defaultValue={this.state.quantity}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" name='image' 
                        className='form-control' onChange={this.handler} defaultValue={this.state.image}/>
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

export default EditProduct
