import React, { Component } from 'react'

export default class DataEntryForm extends Component {
    
    constructor(props){
        super(props)

        this.state={
            name: '',
            email: '',
            address_1: '',
            address_2: '',
            city: '',
            postal: '',
            province: ''
        }
    }

    readName = e => {
        //update the state object
        console.log(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
        
    }

    readFormValue = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }
    
    render() {
        return (
            <div className=" border-4 container">
                <form onSubmit={this.readFormValue} className="bg-red-400">

                    <h1 className="text-center">
                        Data Entry Form
                    </h1>

                    <div className="">

                        <div className="grid grid-cols-1">
                            <div className="flex flex-row justify-center gap-4">
                                <div className="flex flex-col items-center">
                                    <label>Email</label>
                                    <input placeholder="Enter email" name="email" type="text" onChange={this.readName}></input>
                                </div>
                                <div className="flex flex-col items-center">
                                    <label>Name</label>
                                    <input placeholder="Full Name" name="name" type="text" onChange={this.readName}></input>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div className="flex flex-col items-center">
                                <label>Address 1</label>
                                <input placeholder="1234 Main St" name="address_1" type="text" onChange={this.readName}></input>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col items-center">
                                    <label>Address 2</label>
                                    <input placeholder="Apartment, studio, or floor" name="address_2" type="text" onChange={this.readName}></input>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div className="flex flex-row justify-center">
                                
                                <div className="flex flex-col items-center space-x-4">
                                    <label>City</label>
                                    <input placeholder="" name="city" type="text" onChange={this.readName}></input>
                                </div>

                                <div className="flex flex-col items-center space-x-4">
                                    <label>Province</label>
                                    <select name="province" id="province" onChange={this.readName}>
                                        <option value="Alberta">Alberta</option>
                                        <option value="British Columbia">British Columbia</option>
                                        <option value="Manitoba">Manitoba</option>
                                        <option value="New brunswick">New brunswick</option>
                                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                        <option value="Nova Scotia">Nova Scotia</option>
                                        <option value="Ontario">Ontario</option>
                                        <option value="Prince Edward Island">Prince Edward Island</option>
                                        <option value="Quebec">Quebec</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                    </select>
                                </div>

                                <div className="flex flex-col items-center space-x-4">
                                    <label>Postal Code</label>
                                    <input placeholder="" name="postal" type="text" onChange={this.readName}></input>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1">
                        <div className="flex flex-col items-center">
                            <label>Agree Terms & Conditions?</label>
                            <input type="checkbox" id="terms" name="terms" value="terms"/>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>

                </form>

                <div className="text-green-500 font-bold text-2xl">
                    <div className="flex flex-col items-center">
                        <h3>Email: {this.state.email}</h3>
                        <h3>Full Name: {this.state.name}</h3>
                        <h3>Address: {this.state.address_1}</h3>
                        <h3>City: {this.state.city}</h3>
                        <h3>Province: {this.state.province}</h3>
                        <h3>Postal Code: {this.state.postal}</h3>
                    </div>
                </div>

            </div>
        )
    }

    //Component lifecycle methods

    componentWillMount()
    {  

        console.log('Component Will MOUNT!')  

    }

    componentDidMount()
    {  

        console.log('Component Did MOUNT!')  

    }

    componentWillReceiveProps(newProps)
    {      

        console.log('Component Will Recieve Props!')  

    }

    shouldComponentUpdate(newProps, newState)
    {  

        console.log('Component shouldComponentUpdate!') 

        return true;  

    }

    componentWillUpdate(nextProps, nextState)
    {  

        console.log('Component Will UPDATE!');  

    }

    componentDidUpdate(prevProps, prevState)
    {  

        console.log('Component Did UPDATE!')  

    }
    
    componentWillUnmount()
    {  

        console.log('Component Will UNMOUNT!')  

    }
}
