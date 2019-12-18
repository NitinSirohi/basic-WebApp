import React, { Component } from 'react';
import "./Form.css";

export default class Forms extends Component {
  constructor(props){
    super();
    this.state = {
      FirstName : "Enter First Name",
      LastName : "Enter Last Name",
      email : "Enter your email",
      Mobile: "Enter your No.",
      Message : "Type Something"
    }
  }
  handlechange = (event) => {
    this.setState({[event.target.name] :event.target.value })
  }

  handlesubmit= (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form onSubmit = {this.handlesubmit} >
          <label> FirstName </label><br/>
          <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handlechange}/><br/>

          <label> LastName </label><br/>
          <input type="text" name="LastName" value={this.state.LastName} onChange={this.handlechange}/><br/>

          <label> email</label><br/>
          <input type="email" name="email" value={this.state.email} onChange={this.handlechange}/><br/>

          <label> Mobile</label><br/>
          <input type="number" name="Mobile" value={this.state.Mobile} onChange={this.handlechange}/><br/>

          <label> Message</label><br/>
          <textarea  name="Message" value={this.state.Message} onChange={this.handlechange}/><br/>

          <input type="submit" value="Send"/>
        </form>
        
      </div>
    )
  }
}
